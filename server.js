import * as shared from 'http';

const ip = '127.0.0.1'
const port = 4001

const cros = {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, delete',
'Access-Control-Max-Age': 2592000,
};

const os = function(req,res){
res.output={
    jsonrpc:'2.0',
    id:0,
    result:'last'
}
res.writeHead(200,cros);
res.end(JSON.stringify(output)); 
}

const server = shared.createServer(os)


server.listen(port,ip,()=>{
console.log(`server listing http://${ip}:${port}`)
})