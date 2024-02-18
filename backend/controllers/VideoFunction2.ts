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
        const videoArray = await VideoDetailSchema.aggregate([
            { $sample: { size: Number(numberOfVidoes) } }, // Sample random documents
            { $addFields: { randomOrder: { $rand: {} } } }, // Add a random number field to each document
            { $sort: { randomOrder: 1 } } // Sort documents by the random number field to shuffle
        ]);
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
        await requireVideo.save();
        return res.status(200).json({
            message: 'Comment posted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}

export const getComments = async (req: Request, res: Response) => {
    try {
        const videoId = req.query.videoId as string;
        if (!videoId) {
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
        const comments = requireVideo.commentsList;
        return res.status(200).json({
            comments,
            message: 'Comment posted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}

export const getVideoSuggestion = async (req: Request, res: Response) => {
    try {
        const RegexFilter = req.query.RegexFilter as string || '';
        const limit = Number(req.query.limit) as number || 10;
        if (!RegexFilter) {
            return res.json({
                message: 'invalid query'
            })
        }
        const videoArray = await VideoDetailSchema.find({
            $or:[
                {
                    title:{
                        $regex:RegexFilter, $options: 'i'

                    }
                },
                {
                    description:{
                        $regex:RegexFilter, $options: 'i'
                    }
                }
            ]
        }).limit(limit);
        if (!videoArray) {
            return res.status(404).json({
                message: 'no video found',
            });
        }
        return res.status(200).json({
            videoArray,
            message: 'got videos successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}