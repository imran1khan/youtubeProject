import { Request, Response } from "express";
import { VideoCommentSch, VideoDetailSchema } from "../db";

export const getVideos = async (req: Request, res: Response) => {
    try {
        const numberOfVidoes = req.query.length;
        if (isNaN(Number(numberOfVidoes))) {
            return res.json({
                message: 'invalid query'
            });
        }
        const videoArray = await VideoDetailSchema.find().limit(Number(numberOfVidoes));
        if (!videoArray || videoArray.length <= 0) {
            return res.status(404).json({
                message: 'no video found',
            });
        }
        res.json({
            videoArray,
            message: 'output is given',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}

interface reqBody {
    videoId:string,
    Comment:string,
    UserId:string
}
export const PostComment = async (req: Request, res: Response) => {
    try {
        const {videoId,Comment,UserId} = req.body as reqBody;
        if (!videoId || !Comment || !UserId) {
            return res.json({
                message: 'invalid query'
            })
        }
        const requireVideo = await VideoCommentSch.findOne({VideoRef:videoId});
        if (!requireVideo) {
            return res.status(404).json({
                message: 'no video found',
            });
        }
        requireVideo.commentsList.push({Comment:Comment,CreatorId:UserId});
        requireVideo.save();
        return res.status(200).json({
            message: 'Comment posted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}