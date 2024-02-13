import VideoThumbCard from "../components/VideoThumbCard"
import { useGetVideos } from "../hooks/CheckCookie";

function VideosShow() {
    const videos = useGetVideos();
    return (
        <div className="bg-gray-900 w-full h-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
            {videos.map((individualVideo) => (
                <VideoThumbCard key={individualVideo._id} public_id={individualVideo.public_id} title={individualVideo.title} description={individualVideo.description} />
            ))}
        </div>
    )
}

export default VideosShow