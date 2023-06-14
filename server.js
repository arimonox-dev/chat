import * as shared from 'http';
import os from 'os';
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

const memory = []

const HTTP = shared.createServer(context)


HTTP.listen(port,ip,()=>{
console.log(`server listing http://${ip}:${port}`)
})
