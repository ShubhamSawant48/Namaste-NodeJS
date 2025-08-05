const express = require("express");

const app = express();

const { adminAuth } = require("./auth");
const { userAuth } = require("./auth");

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin/getUserData", (req, res) => {
  res.send("data sent successfully!");
});

app.get("/user", (req, res) => {
  res.send("user login successfully!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("user deleted successfully!");
});

app.listen(7777, () => {
  console.log("server successfully established...");
});
