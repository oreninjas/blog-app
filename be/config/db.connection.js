const mongoose = require("mongoose");
require("dotenv").config();


const connectToDB = async () =>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected to MongoDB');
        
    })
} 

module.exports = connectToDB;
