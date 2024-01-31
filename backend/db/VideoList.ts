import mongoose, { Schema } from "mongoose";

const VideoArrayList = new mongoose.Schema(
    {
        creator : {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        videoUrlArray: [
            {
                type: Schema.Types.ObjectId,
                ref : 'VideoDetailSchema'
            }
        ],
    },
    {
        timestamps:true
    }
);
export const VideoList = mongoose.model('VideoList',VideoArrayList);