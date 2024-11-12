import React from "react";

const Blogs = ({ blogs }) => {

  return blogs ? (
    <div className="flex gap-20 p-5 flex-wrap">
      {blogs.map((blog, index) => (
        <div key={index} className="bg-zinc-800 w-[200px] p-5 rounded ">
          <h2 className="bg-zinc-900 p-1 rounded-sm">{blog.title}</h2>
          <p className="mt-5">{blog.description}</p>
        </div>
      ))}
    </div>
  ) : (
    <h1>data is not retriving.</h1>
  );
};

export default Blogs;
