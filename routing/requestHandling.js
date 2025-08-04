const express = require('express');

const app = express();

app.get("/hello2",(req,res)=>{
    res.send("hello from /hello2");
});

app.post("/user",(req,res)=>{
    res.send("information saved sucessfully");
})

app.get("/hello",(req,res)=>{
    res.send("hello from /hello jaggu");
});

app.get("/test",(req,res)=>{
    res.send("hello from /test");
});

app.patch("/user",(req,res)=>{
    res.send("informaton updated successfully.");
});

app.get("/",(req,res)=>{
    res.send("hello from /");
});

app.listen(7777,()=>{
    console.log("server successfully established...");
})