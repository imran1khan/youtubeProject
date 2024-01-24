import express from "express";
const app = express();
app.get('/',(req,res)=>{
    res.json({
        msg : "new change",
    });
});
app.listen(3000,()=>{
    console.log('http://localhost:3000/');
});