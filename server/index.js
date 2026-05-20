import express from'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/patientRoutes.js';
import cors from 'cors';
dotenv.config();


const app  = express();


app.use('/uploads',express.static('uploads'));
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 5000;


mongoose.connect(process.env.MONGO_URI)
.then(() =>{
  console.log('MongoDB Connected');
})
.catch((error) => {
  console.log(error);
})

app.get('/' ,(req,res) => {
  res.send('Backend Sever Running');
})

app.listen(PORT,() => {
  console.log(`server is running on port ${PORT}`);

})

