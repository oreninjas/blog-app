import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Blogs from "./components/Blogs";
import axios from "axios";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  const [blogs, setBlogs] = useState(null);

  const getBlogs = async () => {
    await axios
      .get("http://localhost:3000/get/api")
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
      </Routes>
      
    </>
  );
};

export default App;
