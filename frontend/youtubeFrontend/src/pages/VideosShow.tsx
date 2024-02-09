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
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="bg-blue-600 w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
            <VideoThumbCard public_id={'g9vtpbdn2vz7wunii68u'} />
        </div>
    )
}

export default VideosShow