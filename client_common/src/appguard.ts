import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import type {ProtoGrpcType} from './proto/appguard'
import {AppGuardClient} from './proto/appguard/AppGuard'
import {AppGuardHttpRequest} from './proto/appguard/AppGuardHttpRequest'
import {AppGuardResponse__Output} from './proto/appguard/AppGuardResponse'
import {AppGuardTcpConnection} from './proto/appguard/AppGuardTcpConnection'
import {AppGuardHttpResponse} from './proto/appguard/AppGuardHttpResponse'
import {AppGuardTcpResponse__Output} from "./proto/appguard/AppGuardTcpResponse";
import {HeartbeatRequest} from "./proto/appguard/HeartbeatRequest";
import {HeartbeatResponse__Output} from "./proto/appguard/HeartbeatResponse";
import {DeviceStatus} from "./proto/appguard/DeviceStatus";
import {TOKEN_FILE} from "./auth";
import {AppGuardFirewall, AppGuardFirewall__Output} from "./proto/appguard/AppGuardFirewall";
import {FirewallPolicy} from "./proto/appguard/FirewallPolicy";

const opts = {includeDirs: [
    'node_modules/@nullnet/appguard-express/node_modules/appguard-client-common/proto/',
    'node_modules/@nullnet/appguard-nextjs/node_modules/appguard-client-common/proto/',
    ]};
const packageDef = protoLoader.loadSync('appguard.proto', opts);
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

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
    timeout?: number;
    defaultPolicy: FirewallPolicy;
    firewall: string;
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
        if (this.config.timeout !== undefined) {
            let timeoutPromise: Promise<AppGuardResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, this.config.timeout, {
                    policy: this.config.defaultPolicy
                })
            });
            return Promise.race([promise, timeoutPromise])
        } else {
            return promise
        }
    }

    connectionPromise = (connection: AppGuardTcpConnection): Promise<AppGuardTcpResponse__Output> => {
        let promise = this.handleTcpConnection(connection);
        if (this.config.timeout !== undefined) {
            let timeoutPromise: Promise<AppGuardTcpResponse__Output> = new Promise((resolve, _reject) => {
                setTimeout(resolve, this.config.timeout, {
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

    heartbeat(req: HeartbeatRequest) {
        let call = this.client.heartbeat(req);
        call.on('data', function(heartbeat: HeartbeatResponse__Output) {
            // handle the heartbeat response
            console.log("Received heartbeat from server");
            // write token to file
            const fs = require('fs');
            fs.writeFileSync(TOKEN_FILE, heartbeat.token, {flag: 'w'});
            let status = heartbeat.status;
            if (status == DeviceStatus.ARCHIVED || status == DeviceStatus.DELETED) {
                // terminate current process
                console.log("Device is archived or deleted, terminating process");
                process.exit(0);
            }
        });
        call.on('error', (_e) => {
            // An error has occurred and the stream has been closed.
            // sleep for 10 seconds and try again
            console.log("Error in heartbeat, retrying in 10 seconds");
            setTimeout(() => {
                this.heartbeat(req);
            }, 10000);
        });
    }

    async updateFirewall(req: AppGuardFirewall): Promise<AppGuardFirewall__Output>{
        return new Promise((resolve, reject) => {
            this.client.updateFirewall(req, (err, res) => {
                if(err){
                    reject(err)
                } else {
                    resolve(res as AppGuardFirewall__Output)
                }
            })
        })
    }
}
