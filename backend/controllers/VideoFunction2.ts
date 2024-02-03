import { Request, Response } from "express";
import { VideoDetailSchema } from "../db";

export const getVideos=async(req: Request, res: Response)=>{
    try {
        const numberOfVidoes = req.query.length;
        if(isNaN(Number(numberOfVidoes))) {
            return res.json({
                message:'invalid query'
            });
        }
        const videoArray = await VideoDetailSchema.find().limit(Number(numberOfVidoes));
        if (!videoArray || videoArray.length<=0) {
            return res.status(404).json({
                message:'no video found',
            });
        }
        res.json({
            videoArray,
            message:'output is given',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}