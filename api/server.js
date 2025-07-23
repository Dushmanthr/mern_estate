import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DATABASE_CONNECTION).then(()=>{
    console.log('Database connected successfully');
}).catch((err)=>{
    console.log("Database connection failed", err);
})

const app = express();

app.use(express.json());

app.listen(5000, ()=> {
    console.log('Server is running on port 5000');
})


//app routers

app.use('/api/user', userRouter)

//signup router
app.use('/api/auth', authRouter);