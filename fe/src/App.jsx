import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Blogs from "./components/Blogs";
import Register from "./pages/Register";
import axios from "axios";
import { Route, Router, Routes } from "react-router-dom";
import EachBlog from "./components/EachBlog";

const App = () => {
  const [blogs, setBlogs] = useState(null);

  const getBlogs = async () => {
    await axios
      .get("http://localhost:3000/blogs")
      .then((res) => {
        setBlogs(res.data);
        // console.log(res.data);
        // console.log(blogs);
      })
      .catch((err) => {
        console.log("Error retrieving data: ", err);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs/:blogid" element={<EachBlog />} />
      </Routes>
      
    </>
  );
};

export default App;
