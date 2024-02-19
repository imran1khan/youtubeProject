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

//suffel videos
const shuffleArray = <T>(array:T[]):T[]=>{
  for (let i = array.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]]
  }
  return array;
}
export const useGetVideos = () => {
  const [videos, setVideos] = useState<videoList[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get<VideoResponce>(`http://localhost:3000/video/VideoArray?length=15`);
        const suffelList = shuffleArray(responce.data.videoArray);
        setVideos(suffelList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return videos;
}

export const useGetSearchVideos=(NumResponce:number,RegexStr:string)=>{
  const [videos,setVideos]=useState<videoList[]>([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const responce = await axios.get<VideoResponce>(`http://localhost:3000/video/getVideoSuggestion?RegexFilter=${RegexStr}&limit=${NumResponce}`);
        setVideos(responce.data.videoArray);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[RegexStr,NumResponce]);
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
  },[reRander,videoId]);
  return allComment;
}

export const getVideosList=async(str:string)=>{
  if(str===undefined || str.trim()===''){
    str='';
  }
  try {
    const responce = await axios.get<VideoResponce>('http://localhost:3000/video/getVideoSuggestion',{
      params:{
        RegexFilter:str,
        limit:'10'
      }
    })
    return responce.data.videoArray;
  } catch (error) {
    console.log(error)
  }
  return [];
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
