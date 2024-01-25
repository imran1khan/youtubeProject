import mongoose from "mongoose";
import { User } from "./UserShema";
mongoose.connect('mongodb+srv://imrankhan:yfFcriFRZlbOLBOa@cluster0.umzw1qr.mongodb.net/youtubeProject');



export {
    User,
}