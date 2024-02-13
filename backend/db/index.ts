import mongoose from "mongoose";
import { User } from "./UserShema";
import { VideoDetailSchema } from "./VideoUploadSchema";
import { VideoList } from "./VideoList";
import { VideoCommentSch } from "./VideoCommentSch";
mongoose.connect('mongodb+srv://imrankhan:yfFcriFRZlbOLBOa@cluster0.umzw1qr.mongodb.net/youtubeProject');


export {
    User,
    VideoDetailSchema,
    VideoList,
    VideoCommentSch
}