import os from "os"

const cors = {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, delete',
'Access-Control-Max-Age': 2592000,
};

const context=function(req,res){
    const {method,url,headres}=req
    res.output={
        jsonrpc:'2.0',
        id:0,
        result:{
            m:method,
            u:url
        }
    }
    res.writeHead(200,cors);
    res.end(JSON.stringify(res.output));
}

export { 
    context,
    opcode:function(){
        
    }
}