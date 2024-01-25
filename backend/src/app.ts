import express from "express";
import { UserRouter } from "../routes/userRoutes";
const app = express();
app.use(express.json());
app.use('/user',UserRouter);
app.listen(3000,()=>{
    console.log('http://localhost:3000/');
});