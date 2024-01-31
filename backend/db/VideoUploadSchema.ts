import mongoose, { Schema } from "mongoose";

const VideoUploadSchema = new mongoose.Schema(
    {
        creator : {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        title:String,
        description:String,
        like:Number,
        dislike:Number,
        views:Number,
        url:String,
    },
    {
        timestamps:true
    }
);
export const VideoDetailSchema = mongoose.model('VideoDetailSchema',VideoUploadSchema);