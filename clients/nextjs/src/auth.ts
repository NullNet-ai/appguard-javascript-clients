import {AppGuardService} from "./app-guard-nextjs";
import {HeartbeatRequest} from "./proto/appguard/HeartbeatRequest";

export const TOKEN_FILE = process.cwd() + '/../token.txt'

export class AuthHandler {
    private app_id: string
    private app_secret: string
    private client: AppGuardService

    constructor(client: AppGuardService) {
        require('dotenv').config()

        this.app_id = process.env.APP_ID || ''
        this.app_secret = process.env.APP_SECRET || ''
        this.client = client

        if (this.app_id === '') {
            console.log('APP_ID environment variable is not set')
            process.exit(1)
        }
        if (this.app_secret === '') {
            console.log('APP_SECRET environment variable is not set')
            process.exit(1)
        }

        // empty token file content
        const fs = require('fs');
        fs.writeFileSync(TOKEN_FILE, '', {flag: 'w'});
    }

    async init(){
        let hb_req: HeartbeatRequest = {
            appId: this.app_id,
            appSecret: this.app_secret,
        };

        this.client.heartbeat(hb_req);

        console.log("Waiting for the first server heartbeat...");
        while (this.token() === '') {
            // sleep for 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        console.log("Received the first server heartbeat");
    }

    token(): string {
        const fs = require('fs');
        return fs.readFileSync(TOKEN_FILE, 'utf8');
    }
}