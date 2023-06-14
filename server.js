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

const event = function(req,res){
const {method,url,headres}=req
res.output={
    jsonrpc:'2.0',
    id:0,
    result:os.networkInterfaces()
}
res.writeHead(200,cros);
res.end(JSON.stringify(res.output)); 
}

const HTTP = shared.createServer(event)

HTTP.listen(port,ip,()=>{
console.log(`server listing http://${ip}:${port}`)
})
