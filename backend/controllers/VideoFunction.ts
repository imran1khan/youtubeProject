import { Request, Response } from "express";
import { VideoDetailSchema, VideoList } from "../db";
import { Multer } from "multer";
import { uploadOnCloudinery } from "../Cloudinery";

interface RequestBody {
    userId: string,
    title: string,
    description: string
}
export const uploadVideo = async (req: Request, res: Response) => {
    try {
        const { userId, title, description } = req.body as RequestBody;
        if (
            [userId, title, description].some((field) => field?.trim() === '')
        ) {
            return res.status(400).json({
                message: 'invalid input'
            });
        }
        // here upload the video on the cloudinery logic
        console.log("videoLocalPath");
        let videoLocalPath: string;
        if (req.files && ('videofile' in req.files) && req.files.videofile && req.files.videofile.length > 0) {
            videoLocalPath = req.files.videofile[0].path;
        } else {
            return res.status(400).json({
                message: 'videofile is missing or empty in the request',
            });
        }
        const resData = await uploadOnCloudinery(videoLocalPath);
        if (!resData) {
            return res.status(400).json({
                message: 'video file is required'
            });
        }
        // now upload the video on the video-database and also push it inside the videoArr
        const videoFile = await VideoDetailSchema.create(
            {
                creator: userId,
                title,
                description,
                like: 0,
                dislike: 0,
                views: 0,
                url: resData?.url
            }
        );
        const videoArr = await VideoList.findOne({ creator: userId });
        if (videoArr) {
            videoArr.videoUrlArray.push(videoFile._id);
            videoArr.save();
            return res.json({
                videoId: videoFile._id,
                message: 'video uploaded successfully',
            });
        }
        else {
            await VideoList.create({ creator: userId, videoUrlArray: videoFile._id });
            return res.json({
                videoId: videoFile._id,
                message: 'video uploaded successfully',
            });
        }
    } catch (error) {

    }
}
