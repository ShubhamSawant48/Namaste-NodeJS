const http = require("http");

const server = http.createServer(function (req,res){
    if(req.url === "/getSecreatData"){
        res.end("There is no secreat data!!");
    }
    res.end("Hello World!");
});

server.listen(7777)