import express from "express";
import cors  from 'cors'
import { UserRouter } from "../routes/userRoutes";
import { VideoRouter } from "../routes/VideoRoutes";
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',UserRouter);
app.use('/video',VideoRouter);
app.listen(3000,()=>{
    console.log('http://localhost:3000/');
});