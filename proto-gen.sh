#!/bin/bash
rm -rf src/proto
./node_modules/.bin/proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto/ ./appguard-protobuf/appguard.proto