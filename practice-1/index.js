import express from "express";

const server=express();

server.listen(3400,()=>{
    console.log('server listening to 3400');
});