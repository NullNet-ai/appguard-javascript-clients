import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import type  {ProtoGrpcType} from './proto/appguard'
import { AppGuardClient } from './proto/appguard/AppGuard'
import { AppGuardHttpRequest } from './proto/appguard/AppGuardHttpRequest'
import { AppGuardResponse__Output } from './proto/appguard/AppGuardResponse'
import { AppGuardTcpConnection } from './proto/appguard/AppGuardTcpConnection'
import { AppGuardHttpResponse } from './proto/appguard/AppGuardHttpResponse'
import {AppGuardTcpResponse__Output} from "./proto/appguard/AppGuardTcpResponse";
import * as fs from "node:fs";

const PROTO_FILE = __dirname + '/../appguard-protobuf/appguard.proto'
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const server_ca_pem_file = __dirname + '/../tls/server_ca.pem'
const server_ca_pem = fs.readFileSync(server_ca_pem_file)

export class AppGuardService {
    private host: string
    private port: number
    private client: AppGuardClient
    constructor(host: string, port: number){
        this.host = host
        this.port = port
        this.client = new grpcObj.appguard.AppGuard(`${this.host}:${this.port}`, grpc.credentials.createSsl(server_ca_pem))
    }
    async onModuleInit(){
        return new Promise((resolve, reject) => {
            this.client?.waitForReady(Date.now() + 10000, (err) => {
                if(err){
                    console.log('Error connecting to AppGuard service')
                    reject(err)
                }
                console.log('Connected to AppGuard service')
                resolve(this)
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
}
