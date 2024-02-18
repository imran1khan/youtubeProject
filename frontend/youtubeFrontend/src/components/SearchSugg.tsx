import { useNavigate } from "react-router-dom"

interface prop {
    title:string
}
function SearchSugg({title}:prop) {
    const navigate = useNavigate();
    const MoveToSearchResultPage=()=>{
        ///home/results/search_query?
        navigate(`/home/results/search_query?query=${title}`);
    }
    return (
        <li onClick={MoveToSearchResultPage} className="cursor-pointer hover:bg-gray-900">{title}</li>
    )
}

export default SearchSugg