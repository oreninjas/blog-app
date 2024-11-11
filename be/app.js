const express = require("express");
const blogModel = require("./model/blog.model");
const dbConnection = require("./config/db.connection");
dbConnection()
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000);
