import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { VideoResponce, videoList } from "../store/GetVideos";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { reRanderComment } from "../store/recoilAtom";

export const useCheckCookie = () => {
  const navigate = useNavigate();
  const [cookie] = useCookies(['token']);
  useEffect(() => {
    if (!cookie.token) {
      navigate('/');
    }
    return () => {
    }
  }, [cookie.token]);
}

export const useGetVideos = () => {
  const [videos, setVideos] = useState<videoList[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get<VideoResponce>(`http://localhost:3000/video/VideoArray?length=15`);
        setVideos(responce.data.videoArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return videos;
}

interface resCommenst{
  CreatorId:string,
  Comment:string,
  _id:string,
}
interface allComments{
  comments:resCommenst[],
}
export const useGetAllComments=(videoId:string)=>{
  const [allComment,setAllComment] = useState<resCommenst[]>([]);
  const reRander = useRecoilValue(reRanderComment);
  useEffect(()=>{
    const getComment=async()=>{
      try {
        const responce = await axios.get<allComments>(`http://localhost:3000/video/getComments`,{
          params:{
            videoId,
          }
        });
        setAllComment(responce.data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
    getComment();
  },[reRander]);
  return allComment;
}

export const useGetLeftOverBannerHeight = () => {
  const [remainHeight, setRemainHeight] = useState(0);
  useEffect(() => {
    const handelResize = () => {
      const bannerHeight = document.getElementById('YTbanner')?.offsetHeight;
      const windowHeight = window.innerHeight;
      if (bannerHeight) {
        const calcHeight = windowHeight - bannerHeight;
        setRemainHeight(calcHeight);
      }
    }
    handelResize();
    window.addEventListener('resize', handelResize);
    return () => window.removeEventListener('resize', handelResize);
  }, []);
  return [remainHeight, setRemainHeight] as const;
}
