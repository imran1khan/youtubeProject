import { AdvancedVideo } from "@cloudinary/react"
import { cld } from "../CloudineryTools/Cloudinery";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { useNavigate } from "react-router-dom";

interface prop {
  title: string
  description: string
  public_id: string
  videoId:string
}
function SearchResult({ title, public_id, description,videoId }: prop) {
  const navigate=useNavigate();
  const myVideo = cld.video(public_id);
  myVideo.resize(fill()
    .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(40));
  const navigateTo=()=>{
    navigate(`/home/${public_id}`,{state:{title,description,videoId}});
  }
  return (
    <div onClick={navigateTo} className="w-3/4 flex gap-2 cursor-pointer hover:bg-[#030a14] rounded-[1rem]">
      <AdvancedVideo cldVid={myVideo} className="w-96 h-60" />
      <div className="flex flex-col">
        <div>
          {title}
          <br />
          36k views . 4 years ago
          <br />
          <div className="flex gap-2">
            <img className="rounded-full size-8" src="https://yt3.ggpht.com/DX89GV9x1g6YHtbRRTMSF4GTw4zxELXvtVyCO-y9EKZbEMtGc1T-oaATulWnG466IyVYoz6f=s88-c-k-c0x00ffffff-no-rj" alt="" />
            <div>Simran Sultan</div>
          </div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default SearchResult