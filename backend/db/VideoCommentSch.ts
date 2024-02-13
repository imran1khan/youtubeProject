import mongoose, { Schema } from "mongoose";

const VideoCommentStructure = new mongoose.Schema(
    {
        VideoRef : {
            type: Schema.Types.ObjectId,
            ref: 'VideoDetailSchema'
        },
        commentsList : [
            {
                CreatorId:{
                    type:Schema.Types.ObjectId,
                    ref:'User',
                },
                Comment : String
            }
        ]
    },
    {
        timestamps:true
    }
);

export const VideoCommentSch = mongoose.model('VideoCommentSch',VideoCommentStructure);