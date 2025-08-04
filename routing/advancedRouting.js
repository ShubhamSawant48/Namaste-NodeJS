const express = require("express");

const app = express();

// b is optional , /ac , /abc 
app.get("/ab?c",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});

// can write as much as b want , /abbc , /abbbbbbbbbc
app.get("/ab+c",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});

// bc is optional , /ad , /abcd 
app.get("/a(bc)?d",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});

// can write as much as bc want , /abcbcd , /abcbcbcbcd 
app.get("/a(bc)+d",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});

// you can  write anything in place of * , /afdsbhfhsbc , /aihbieuifc
app.get("/a*c",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});

//  it is regex , if a contains it will work
app.get("/a/",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});

// start with anything and end with fly ($-to denote end - symbol of regex)
// /butterfly , /dragonfly
app.get("/.*fly$/",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});

// http://localhost:7777/user?userID=101&password=shubham
app.get("/user",(req,res)=>{
    console.log(req.query) // { userID :'101' , password:'shubham'}
    res.send({firstName:"shubham",lastName:"sawant"});
});

// http://localhost:7777/user/777/shubham/beast
app.get("/user/:userID/:name/:password",(req,res)=>{
    console.log(req.params) // { userID :'101' , name:'shubham' , password:'beast'}
    res.send({firstName:"shubham",lastName:"sawant"});
});


app.listen(7777,()=>{
    console.log("server successfully established...");
});