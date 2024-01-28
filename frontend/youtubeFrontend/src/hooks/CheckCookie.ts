import { useEffect } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useCheckCookie=()=>{
    const navigate = useNavigate();
    const [cookie] = useCookies(['token']);
    useEffect(() => {
      if (!cookie.token) {
        navigate('/');
      }
      return ()=>{
      }
    }, [cookie.token]);
}