import SearchResult from "../components/SearchResult";
import { useGetVideos } from "../hooks/CheckCookie"

function SearchResultPage() {
    const videos = useGetVideos();
  return (
    <div className="text-white bg-gray-950 flex-1 overflow-hidden overflow-y-scroll">
        <div className="flex flex-col justify-center items-center">
        {videos.map((ivideo)=>(<SearchResult key={ivideo._id+ivideo.__v} title={ivideo.title} description={ivideo.description} public_id={ivideo.public_id}/>))}
        </div>
    </div>
  )
}

export default SearchResultPage