const express = require('express');

const app = express();

// b is optional , /ac , /abc 
app.get("/\/ab?c/",(req,res)=>{
    res.send({firstName:"shubham",lastName:"sawant"});
});


app.listen(7777,()=>{
    console.log("server successfully established...");
});