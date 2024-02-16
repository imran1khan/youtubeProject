import { AdvancedVideo } from "@cloudinary/react"
import { cld } from "../CloudineryTools/Cloudinery";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { useNavigate } from "react-router-dom";

interface suggestedVideoProp {
  public_id : string
  title:string
  description:string,
  videoId:string
}

function SuggestedVideo({public_id,title,description,videoId}:suggestedVideoProp) {
  const navigate = useNavigate();
  const myVideo = cld.video(public_id);
  myVideo.resize(fill()
      .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))))
      .roundCorners(byRadius(0));
  const navigateTo=()=>{
    navigate(`/home/${public_id}`,{state:{title,description,videoId}});
  }
  return (
    <div onClick={navigateTo} className=" flex cursor-pointer">
      <AdvancedVideo cldVid={myVideo} className="w-80 rounded-sm"/>
      <div className="">
        <div>{title}</div>
        <div>channel name</div>
        <div>65k views . 13 days ago</div>
      </div>
    </div>
  )
}

export default SuggestedVideo