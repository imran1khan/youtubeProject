import { useRecoilStateLoadable } from "recoil";
import VideoThumbCard from "../components/VideoThumbCard"
import { VideosArray } from "../store/GetVideos";

function VideoShow2() {
    const [videosLoadable] = useRecoilStateLoadable(VideosArray(20));
    console.log(videosLoadable.contents)
    switch (videosLoadable.state) {
        case "hasValue":
            const videoArrList = videosLoadable.contents;
            if (!videoArrList || videoArrList.length === 0) {
                return <div>No videos available</div>
            }
            return (
                <div className="bg-blue-600 w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {videoArrList.map((video, _) => (
                        <VideoThumbCard key={video._id} public_id={video.public_id} />
                    ))}
                </div>
            );
        case "loading":
            return <div className="text-white bg-blue-600 w-full">Loading...</div>; // You might want to replace this with a loading spinner or other UI.
        case "hasError":
            return <div className="text-white bg-blue-600 w-full">Error: unknon error</div>;
        default:
            return <div className="text-white">ooops....</div>;
    }
}

export default VideoShow2