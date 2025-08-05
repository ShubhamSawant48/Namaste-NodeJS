const express = require("express");

const app = express();

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     // log your message
//     res.status(500).send("something went wrong...");
//   }
// });

app.get("/getUserData", (req, res) => {
  try {
    // logic of db connection

    throw new Error("ahskjfasfklsjh");
    res.send("data sent successfully!");
  } catch (err) {
    res.status(500).send("error occured contact support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // log your message
    res.status(500).send("something went wrong...");
  }
});

app.listen(7777, () => {
  console.log("server successfully established...");
});
