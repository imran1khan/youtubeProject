import { useLocation } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import { useGetSearchVideos} from "../hooks/CheckCookie"

function SearchResultPage() {
    const loaction=useLocation();
    const title=loaction.state?.title as string || '';
    const videos=useGetSearchVideos(10,title);
  return (
    <div className="text-white bg-gray-950 flex-1 overflow-hidden overflow-y-scroll">
        <div className="flex flex-col justify-center items-center">
        {videos.map((ivideo)=>(<SearchResult key={ivideo._id+ivideo.__v} title={ivideo.title} description={ivideo.description} videoId={ivideo._id} public_id={ivideo.public_id}/>))}
        </div>
    </div>
  )
}

export default SearchResultPage