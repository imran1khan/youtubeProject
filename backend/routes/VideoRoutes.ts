import {Router} from 'express';
import { PostComment, getComments, getVideoSuggestion, getVideos } from '../controllers/VideoFunction2';
const VideoRouter = Router();

VideoRouter.route('/VideoArray').get(getVideos);
VideoRouter.route('/postComment').post(PostComment);
VideoRouter.route('/getComments').get(getComments);
VideoRouter.route('/getVideoSuggestion').get(getVideoSuggestion);
export {
    VideoRouter,
}