import {Router} from 'express';
import { PostComment, getVideos } from '../controllers/VideoFunction2';
const VideoRouter = Router();

VideoRouter.route('/VideoArray').get(getVideos);
VideoRouter.route('/postComment').post(PostComment);
export {
    VideoRouter,
}