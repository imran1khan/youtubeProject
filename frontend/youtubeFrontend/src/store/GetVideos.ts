import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";
export interface videoList {
    _id: string,
    creator: string,
    title: string,
    description: string,
    like: number,
    dislike: number,
    views: number,
    url: string,
    secure_url: string,
    public_id: string,
    createdAt: string,
    updatedAt: string,
    __v: string
}
export interface VideoResponce {
    videoArray: videoList[];
    message: string;
}
export const VideosArray = atomFamily({
    key: 'VideosArray',
    default: selectorFamily({
      key: "VideoArr",
      get: () => async (videoNumber) => {
        try {
          const response = await axios.get<VideoResponce>(`http://localhost:3000/video/VideoArray?length=${String(videoNumber)}`);
          return response.data.videoArray;
        } catch (error) {
          return [];
        }
      },
    }),
  });