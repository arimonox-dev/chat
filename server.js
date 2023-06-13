import * as shared from 'http';
import os from 'os';

const ip = '127.0.0.1'
const port = 3000

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