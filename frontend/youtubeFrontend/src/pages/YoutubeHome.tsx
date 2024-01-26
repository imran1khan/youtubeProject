import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

function YoutubeHome() {
  const navigate = useNavigate();
  const [cookie]=useCookies(['token']);
  if(!cookie.token){
    navigate('/');
  }
  return (
    <div>YoutubeHome</div>
  )
}

export default YoutubeHome