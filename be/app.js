const express = require("express");
const cors = require("cors");
const blogModel = require("./model/blog.model");
const dbConnection = require("./config/db.connection");
dbConnection();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/create/blog", async (req, res) => {
  const { title, description } = req.body;

  const blogCreation = await blogModel.create({
    title: title,
    description: description
  })
});

app.listen(3000);
