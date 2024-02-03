import { useEffect, useState } from "react"
import VideoThumbCard from "../components/VideoThumbCard"
import axios from "axios";
import { VideoResponce, videoList } from "../store/GetVideos";

function VideosShow() {
    const [videos, setVideos] = useState<videoList[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get<VideoResponce>(`http://localhost:3000/video/VideoArray?length=20`);
                setVideos(responce.data.videoArray);
                console.log(responce.data.videoArray)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="bg-blue-600 w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {videos.map((individualVideo) => (
                <VideoThumbCard key={individualVideo._id} public_id={individualVideo.public_id} />
            ))}
        </div>
    )
}

export default VideosShow