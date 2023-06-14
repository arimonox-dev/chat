import * as shared from 'http';
import os from 'os';
import * as fs from "fs";
import {context} from "./public/script.js"

const ips=d=>{
    let ip = {}
    let osn = os.networkInterfaces()
    for(var i in osn){
        let f = 0
        osn[i].map(i=> i.family == "IPv4" ? f= i.address:0)
        ip[i]=f
    }
    return ip[d]
}
const ip = ips("lo")
const port = 3000

const cros = {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, delete',
'Access-Control-Max-Age': 2592000,
};

const memory = []

const HTTP = shared.createServer(context)

import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  }
});

HTTP.listen(port,ip,()=>{
console.log(`server listing http://${ip}:${port}`)
})
