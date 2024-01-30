import mongoose, { Schema } from "mongoose";

const VideoUploadSchema = new mongoose.Schema(
    {
        creator : {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        title:String,
        discription:String,
    },
    {
        timestamps:true
    }
);
export const VideoDetailSchema = mongoose.model('VideoDetailSchema',VideoUploadSchema);