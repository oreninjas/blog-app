import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EachBlog = () => {
  const navigate = useNavigate();
  const { blogid } = useParams();
  const [blog, setBlog] = useState({});
  

  const dataHandler = async () => {
    try{
      await axios.get(`http://localhost:3000/blogs/${blogid}`)
      .then((res) => {
        console.log(res.data);
        // setBlog(res.data);
      })
    }catch(err){
      console.log(err);
    }
  }
  
  useEffect( async () => {
    
    dataHandler();

  }, []);
  
  
  console.log(blog);
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl text-gray-600 italic mb-6"></h2>
        <p className="text-base text-gray-700 leading-relaxed mb-6"></p>
        <div className="border-t border-gray-200 pt-4 text-right">
          <span
            className="text-sm text-gray-500 underline cursor-pointer"
            onClick={() => navigate("/blogs")}
          >
            Go Back
          </span>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
