import * as shared from 'http';
import os from 'os';
import * as fs from "fs";
import * as engine from "engine.io";

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

const server = engine.attach(HTTP);

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);

    // Kirim pesan ke klien
    socket.send('Hello from the server!');
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
  
  
});


