import os from "os"

const cors = {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, POST,GET,PUT,CONNECT,DELETE',
'Access-Control-Max-Age': 2592000,
};

const context=function(req,res){
    const {method,url,headres}=req
    res.output={
        jsonrpc:'2.0',
        id:0,
        result:{
            m:method,
            u:url,
            d:0
        }
    }
    if(method != "GET" ){
    
    req.on("data",(chunk)=>{
    try{
        chunk = JSON.parse(chunk.toString())
    }catch(e){
        chunk = chunk.toString()
    }
    res.output.result.d = chunk
    });
    
    req.on("end",()=>{
    res.writeHead(200,cors);
    res.end(JSON.stringify(res.output));
    });
    
    }else{
    res.writeHead(200,cors);
    res.end(JSON.stringify(res.output));
    }
}

const opcode = {
    push:function(chunk){
        
    }
    
}

export { context }