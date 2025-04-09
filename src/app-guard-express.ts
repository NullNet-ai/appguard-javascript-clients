import path from 'path'
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
import {AuthHandler} from "./auth";

const PROTO_FILE = __dirname + '/../appguard-protobuf/appguard.proto'
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

// it doesn't work with .cer files, convert them to .pem with the following command:
// openssl x509 -inform der -in ca.cer -out ca.pem

// The NODE_EXTRA_CA_CERTS environment variable is only read when the Node.js process is first launched.
// Changing the value at runtime has no effect on the current process.

// process.env.NODE_EXTRA_CA_CERTS = __dirname + '/../tls/ca.pem'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export class AppGuardService {
    private client: AppGuardClient
    constructor(host: string, port: number, tls: boolean){
        this.client = new grpcObj.appguard.AppGuard(
            `${host}:${port}`,
            tls ? grpc.credentials.createSsl() : grpc.credentials.createInsecure()
        )
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
    async heartbeat(req: HeartbeatRequest, auth: AuthHandler) {
        let call = this.client.heartbeat(req);
        call.on('data', function(heartbeat: HeartbeatResponse__Output) {
            // handle the heartbeat response
            auth.token = heartbeat.token;
            let status = heartbeat.status;
            if (status == DeviceStatus.DS_ARCHIVED || status == DeviceStatus.DS_DELETED) {
                // terminate current process
                console.log("Device is archived or deleted, terminating process");
                process.exit(0);
            }
        });
        call.on('error', (_e) => {
            // An error has occurred and the stream has been closed.
            // sleep for 5 seconds and try again
            console.log("Error in heartbeat, retrying in 10 seconds");
            setTimeout(() => {
                this.heartbeat(req, auth);
            }, 10000);
        });
    }
}
