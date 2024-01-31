import { Router } from "express";
import { UserLogin, UserSignUp } from "../controllers/userFunction";
import { uploadVideo } from "../controllers/VideoFunction";
import { upload } from "../middleware/multer.middleware";
const UserRouter = Router();


UserRouter.route('/signup').post(UserSignUp);
UserRouter.route('/login').post(UserLogin);
UserRouter.route('/upload-video').post(
    upload.fields([
        {
            name:'video',
            maxCount:1,
        }
    ]),
    uploadVideo
);
export {
    UserRouter,
}