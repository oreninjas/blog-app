import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const submitHandler = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post("http://localhost:3000/create/blog", {
          title,
          description,
        });
        console.log("Blog created successfully!");
        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Error something went wrong: ", error);
      }
    };


  return (
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full flex flex-col bg-gray-800 p-5"
        >
          <h1 className="text-2xl px-5">Create a blog.</h1>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="bg-transparent w-full p-5 border-2 border-gray-500 rounded mt-5"
            type="text"
            placeholder="Title"
            name="title"
            required
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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
  )
}

export default Form