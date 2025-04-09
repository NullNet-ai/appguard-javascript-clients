import {AppGuardService} from "./app-guard-express";
import {HeartbeatRequest} from "./proto/appguard/HeartbeatRequest";

export class AuthHandler {
    private app_id: string
    private app_secret: string
    token: string | undefined

    constructor(client: AppGuardService) {
        this.app_id = process.env.APP_ID || ''
        this.app_secret = process.env.APP_SECRET || ''

        let hb_req: HeartbeatRequest = {
            appId: this.app_id,
            appSecret: this.app_secret,
        };

        client.heartbeat(hb_req, this);
    }
}