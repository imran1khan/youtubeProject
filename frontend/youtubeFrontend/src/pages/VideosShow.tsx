import VideoThumbCard from "../components/VideoThumbCard"


function VideosShow() {

    return (
        <div className="bg-blue-600 w-full grid md:grid-cols-2 ">
            {Array.from({ length: 2 }, (_, index) => (
                <VideoThumbCard key={index} />
            ))}
        </div>
    )
}

export default VideosShow