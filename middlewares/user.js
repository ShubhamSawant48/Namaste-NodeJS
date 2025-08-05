const express = require("express");

const app = express();

// app.use("/",rh1, rh2, [rh3, rh4, rh5])

app.get(
  "/user",
  (req, res, next) => {
    console.log("handling the user route 1");
    // res.send("response!!");
    next();
    // res.send("response!!")
  },
  [(req, res,next) => {
    // res.send("2nd response!!");
    console.log("handling the user route 2");
    next();
  },
  (req, res,next) => {
    // res.send("3rd response!!");
    console.log("handling the user route 3");
    next();
  }],
  (req, res,next) => {
    // res.send("4th response!!");
    console.log("handling the user route 4");
    next();
  },
  (req, res,next) => {
    res.send("5th response!!");
    console.log("handling the user route 4");
    // next();
  }
);

app.get("/",(req,res,next)=>{
  console.log("handling the user route 1");
    // res.send("response!!");
    next();
});

app.get("/test",(req,res,next)=>{
  console.log("handling the user route 2");
    res.send("response!!");
});

app.listen(7777, () => {
  console.log("server successfully established...");
});
