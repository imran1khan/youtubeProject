import {Request,Response} from "express";

export const uploadVideo = async(req:Request,res:Response)=>{
    const {userId} = req.body;
    console.log(userId);
    res.json({
        userId,
        msg:'ok',
    });
}