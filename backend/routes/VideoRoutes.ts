import {Router} from 'express';
import { getVideos } from '../controllers/VideoFunction2';
const VideoRouter = Router();

VideoRouter.route('/VideoArray').get(getVideos);

export {
    VideoRouter,
}