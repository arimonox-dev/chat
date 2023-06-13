import * as shared from 'http';
import os from 'os';


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
const ip = ips("telemetry1_sb")
const port = 40001

const cros = {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, delete',
'Access-Control-Max-Age': 2592000,
};

const event = function(req,res){
res.output={
    jsonrpc:'2.0',
    id:0,
    result:os.networkInterfaces()
}
res.writeHead(200,cros);
res.end(JSON.stringify(res.output)); 
}

const server = shared.createServer(event)


server.listen(port,ip,()=>{
console.log(`server listing http://${ip}:${port}`)
})