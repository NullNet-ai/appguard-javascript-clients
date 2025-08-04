import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import type {ProtoGrpcType} from './proto/appguard'
import {AppGuardClient} from './proto/appguard/AppGuard'
import {AppGuardHttpRequest} from './proto/appguard/AppGuardHttpRequest'
import {AppGuardResponse__Output} from './proto/appguard/AppGuardResponse'
import {AppGuardTcpConnection} from './proto/appguard/AppGuardTcpConnection'
import {AppGuardHttpResponse} from './proto/appguard/AppGuardHttpResponse'
import {AppGuardTcpResponse__Output} from "./proto/appguard/AppGuardTcpResponse";
import {APP_ID_FILE, APP_SECRET_FILE, FIREWALL_DEFAULTS_FILE, TOKEN_FILE} from "./auth";
import {AuthorizationRequest} from "./proto/appguard_commands/AuthorizationRequest";
import {ClientMessage} from "./proto/appguard_commands/ClientMessage";
import {ServerMessage__Output} from "./proto/appguard_commands/ServerMessage";
import {FirewallDefaults} from "./proto/appguard_commands/FirewallDefaults";

const opts = {includeDirs: [
    'node_modules/@nullnet/appguard-express/node_modules/appguard-client-common/proto/',
    'node_modules/@nullnet/appguard-nextjs/node_modules/appguard-client-common/proto/',
    ]};
const packageDef = protoLoader.loadSync('appguard.proto', opts);
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const fs = require('fs');

// it doesn't work with .cer files, convert them to .pem with the following command:
// openssl x509 -inform der -in ca.cer -out ca.pem

// The NODE_EXTRA_CA_CERTS environment variable is only read when the Node.js process is first launched.
// Changing the value at runtime has no effect on the current process.

// process.env.NODE_EXTRA_CA_CERTS = process.cwd() + '/../tls/ca.pem'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export type AppGuardConfig = {
    host: string;
    port: number;
    tls: boolean;
};

export class AppGuardService {
    private client: AppGuardClient
    private config: AppGuardConfig

    constructor(config: AppGuardConfig){
        this.client = new grpcObj.appguard.AppGuard(
            `${config.host}:${config.port}`,
            config.tls ? grpc.credentials.createSsl() : grpc.credentials.createInsecure()
        );
        this.config = config;
    }
    async onModuleInit(){
        return new Promise((resolve, reject) => {
            this.client?.waitForReady(Date.now() + 10000, (err) => {
                if(err){
                    console.log('Error connecting to AppGuard service')
                    reject(err)
                } else {
                    console.log('Connected to AppGuard service')
                    resolve(this)
                }
            })
        })

    }

    async handleHttpRequest(req: AppGuardHttpRequest): Promise<AppGuardResponse__Output>{
        return new Promise((resolve, reject) => {
            this.client.handleHttpRequest(req, (err, res) => {
                if(err){
                    reject(err)
                } else {
                    resolve(res as AppGuardResponse__Output)
                }
            })
        })
    }

    async handleHttpResponse(req: AppGuardHttpResponse): Promise<AppGuardResponse__Output>{
        return new Promise((resolve, reject) => {
            this.client.handleHttpResponse(req, (err, res) => {
                if(err){
                    reject(err)
                } else {
                    resolve(res as AppGuardResponse__Output)
                }
            })
        })
    }

    async handleTcpConnection(req: AppGuardTcpConnection): Promise<AppGuardTcpResponse__Output>{
        return new Promise((resolve, reject) => {
            this.client.handleTcpConnection(req, (err, res) => {
                if(err){
                    reject(err)
                } else {
                    resolve(res as AppGuardTcpResponse__Output)
                }
            })
        })
    }

    firewallPromise = (promise: Promise<AppGuardResponse__Output>): Promise<AppGuardResponse__Output> => {
        let firewallDefaults: FirewallDefaults = getFirewallDefaults();
        let timeout = firewallDefaults.timeout;
        let defaultPolicy = firewallDefaults.policy;
        if (timeout !== undefined) {
            let timeoutPromise: Promise<AppGuardResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, timeout, {
                    policy: defaultPolicy
                })
            });
            return Promise.race([promise, timeoutPromise])
        } else {
            return promise
        }
    }

    connectionPromise = (connection: AppGuardTcpConnection): Promise<AppGuardTcpResponse__Output> => {
        let firewallDefaults: FirewallDefaults = getFirewallDefaults();
        let timeout = firewallDefaults.timeout;
        let promise = this.handleTcpConnection(connection);
        if (timeout !== undefined) {
            let timeoutPromise: Promise<AppGuardTcpResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, timeout, {
                    tcpInfo: {
                        connection: connection,
                    }
                })
            });
            return Promise.race([promise, timeoutPromise])
        } else {
            return promise
        }
    }

    control_stream(req: AuthorizationRequest) {
        let call = this.client.controlChannel();

        let authz_req: ClientMessage = {authorizationRequest: req};
        call.write(authz_req);

        call.on('data', function(server_msg: ServerMessage__Output) {
            if (server_msg.deviceAuthorized) {
                // save app secret and app id (if defined)
                let auth_data = server_msg.deviceAuthorized;
                if (auth_data.appId) {
                    fs.writeFileSync(APP_ID_FILE, auth_data.appId, {flag: 'w'});
                }
                if (auth_data.appSecret) {
                    fs.writeFileSync(APP_SECRET_FILE, auth_data.appSecret, {flag: 'w'});
                }

                // read app id and app secret from files
                let appId = fs.readFileSync(APP_ID_FILE, 'utf8').trim();
                let appSecret = fs.readFileSync(APP_SECRET_FILE, 'utf8').trim();

                // send authenticate
                let auth: ClientMessage = {authentication: {
                    appId: appId,
                    appSecret: appSecret,
                }};
                call.write(auth);
            }
            if (server_msg.updateTokenCommand) {
                // save token
                let token = server_msg.updateTokenCommand;
                fs.writeFileSync(TOKEN_FILE, token, {flag: 'w'});
            }
            if (server_msg.setFirewallDefaults) {
                // save firewall defaults
                let firewallDefaults: FirewallDefaults = server_msg.setFirewallDefaults;
                console.log("Received firewall defaults from server:", firewallDefaults);
                fs.writeFileSync(FIREWALL_DEFAULTS_FILE, JSON.stringify(firewallDefaults), {flag: 'w'});
            }
            if (server_msg.deviceDeauthorized) {
                // delete saved app secret and app id
                fs.writeFileSync(APP_ID_FILE, '', {flag: 'w'});
                fs.writeFileSync(APP_SECRET_FILE, '', {flag: 'w'});
            }
            if (server_msg.heartbeat) {
                console.log("Received heartbeat from server");
            }
        });

        call.on('error', (_e) => {
            // An error has occurred and the stream has been closed.
            // sleep for 10 seconds and try again
            console.log("Error in control stream");
            setTimeout(() => {
                this.control_stream(req);
            }, 10000);
        });
    }
}

function getFirewallDefaults(): FirewallDefaults {
    let text = fs.readFileSync(FIREWALL_DEFAULTS_FILE, 'utf8');
    return JSON.parse(text);
}
