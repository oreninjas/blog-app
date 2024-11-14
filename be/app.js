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
    description: description,
  });

  res.json(blogCreation);
});

app.get("/blogs", async (req, res) => {
  const findBlogs = await blogModel.find().limit(25);
  res.json(findBlogs);
});

app.get('/blogs/:blogid', async (req, res) => {
  const { blogid } = req.params;
  const blog = await blogModel.findById(blogid);
  res.json(blog);
})

app.listen(3000);
