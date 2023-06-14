import * as shared from 'http';
import os from 'os';
import {
    context,
    opcode
} from "./public/script.js"

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

opcode.memory = []
opcode.send = {
    jsonrpc:"2.0",
    id:0,
    result:0
}
const HTTP = shared.createServer(context).listen(port,ip,()=>{
console.log(`server listing http://${ip}:${port}`)
})
