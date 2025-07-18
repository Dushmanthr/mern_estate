import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DATABASE_CONNECTION).then(()=>{
    console.log('Database connected successfully');
}).catch((err)=>{
    console.log("Database connection failed", err);
})

const app = express();

app.listen(5000, ()=> {
    console.log('Server is running on port 5000');
})