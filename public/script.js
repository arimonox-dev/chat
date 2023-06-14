import os from "os"

const cors = {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'OPTIONS, POST,GET,PUT,CONNECT,DELETE',
'Access-Control-Max-Age': 2592000,
};

const context=function(req,res){
    const {method,url,headres}=req

    if(method != "GET" ){
    req.on("data",(chunk)=>{
    try{
        chunk = JSON.parse(chunk.toString())
    }catch(e){
        chunk = chunk.toString()
    }
    opcode.send.result = chunk
    });
    
    req.on("end",()=>{
    res.writeHead(200,cors);
    res.end(JSON.stringify(opcode.send));
    });
    
    }else{
    opcode.send.result = opcode.memory
    res.writeHead(200,cors);
    res.end(JSON.stringify(opcode.send));
    }
}

const opcode = {
    push:function(chunk){
    const { method , params , id } = chunk
        res.output.id = id
        switch(method){
           case "chat":
              
            break;
            default:
        }
    }
    
}

export { context , opcode }