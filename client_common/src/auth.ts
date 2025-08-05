import {AppGuardService} from "./appguard";
import {AuthorizationRequest} from "./proto/appguard_commands/AuthorizationRequest";
import {FirewallDefaults} from "./proto/appguard_commands/FirewallDefaults";

export const TOKEN_FILE = process.cwd() + '/../token.txt'
export const APP_ID_FILE = process.cwd() + '/../app_id.txt'
export const APP_SECRET_FILE = process.cwd() + '/../app_secret.txt'
export const FIREWALL_DEFAULTS_FILE = process.cwd() + '/../firewall_defaults.json'
export const UUID_FILE = process.cwd() + '/../uuid.txt'

const fs = require('fs');

export class AuthHandler {
    private uuid: string
    private installation_code: string
    private client: AppGuardService

    constructor(client: AppGuardService) {
        require('dotenv').config()

        let uuid: string = fs.readFileSync(UUID_FILE, 'utf8');
        if (!uuid || uuid.trim() === '') {
            uuid = crypto.randomUUID();
            fs.writeFileSync(UUID_FILE, uuid, {flag: 'w'});
        }
        this.uuid = uuid.trim();

        this.installation_code = process.env.INSTALLATION_CODE || ''
        this.client = client

        // empty token file content
        fs.writeFileSync(TOKEN_FILE, '', {flag: 'w'});
    }

    async init(type: string){
        let req: AuthorizationRequest = {
            uuid: this.uuid,
            code: this.installation_code,
            category: "AppGuard Client",
            targetOs: undefined,
            type: type,
        };

        this.client.control_stream(req);

        console.log("Waiting for the first server heartbeat...");
        while (this.token().trim() === '') {
            // sleep for 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        console.log("Received the first server heartbeat");
    }

    token(): string {
        return fs.readFileSync(TOKEN_FILE, 'utf8');
    }

    writeFirewallDefaults(firewallDefaults: FirewallDefaults) {
        fs.writeFileSync(FIREWALL_DEFAULTS_FILE, JSON.stringify(firewallDefaults), {flag: 'w'});
    }
}