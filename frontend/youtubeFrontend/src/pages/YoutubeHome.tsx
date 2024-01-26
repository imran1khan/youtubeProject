import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

function YoutubeHome() {
  const navigate = useNavigate();
  const [cookie]=useCookies(['token']);
  useEffect(()=>{
    if(!cookie.token){
      navigate('/');
    }
  },[cookie.token]);
  return (
    <div className="bg-black h-screen">
      
    </div>
  )
}

export default YoutubeHome