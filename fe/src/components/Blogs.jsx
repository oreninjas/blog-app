import React from "react";
import EachBlog from './EachBlog';
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {

  return blogs ? (
    <div className="flex gap-20 p-5 flex-wrap">
      {blogs.map((blog, index) => (
        <Link to={`/blogs/${blog._id}`} key={index} className="pointer bg-zinc-800 w-[200px] p-5 rounded">
          <h2 className="bg-zinc-900 p-1 rounded-sm">{blog.title}</h2>
          <p className="mt-5">{blog.description}</p>
        </Link>
      ))}
    </div>
  ) : (
    <h1>data is not retriving.</h1>
  );
};

export default Blogs;
