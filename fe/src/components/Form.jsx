import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    try {
         axios.post("http://localhost:3000/create/blog", {
          title,
          description,
        })
        .then(() => {
          console.log("Blog created successfully!");
          navigate('/blogs');
        });
    } catch (error) {
      console.error("Error something went wrong: ", error);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full flex flex-col bg-gray-800 p-5"
    >
      <h1 className="text-2xl px-5">Create a blog.</h1>
      <input
        className="bg-transparent w-full p-5 border-2 border-gray-500 rounded mt-5"
        type="text"
        placeholder="Title"
        name="title"
        required
      />
      <textarea
        className="bg-transparent mt-5 resize-none h-25 p-5 border-2 border-gray-500 rounded"
        name="description"
        placeholder="description"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-emerald-700 py-5 mb-5 mt-5 rounded text-2xl hover:bg-emerald-600"
      >
        Post
      </button>
    </form>
  );
};

export default Form;
