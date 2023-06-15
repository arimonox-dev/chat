import os from "os"
import * as file from "fs"

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
    opcode.push(chunk)
    });
    
    req.on("end",()=>{
    res.writeHead(200,cors);
    res.end(JSON.stringify(opcode.send));
    });
    
    }else{
    
    res.writeHead(200,cors);
    res.end(JSON.stringify(opcode.send));
    }
}

const opcode = {
    push:function(chunk){
    const { method , params , id } = chunk
        opcode.send.id = id
        switch(method){
        case "chat":
        this.memory[params[0]]=params[1]
        this.send.result = this.memory
        break;
        default:
        }
    },
    html:function(url){
        try {
        this.send = file.readFileAsync(`./public${url}`) 
        }catch(e){
            this.send.result = opcode.memory
            this.send=JSON.stringify(this.send)
        }
    }
    
}

export { context , opcode }