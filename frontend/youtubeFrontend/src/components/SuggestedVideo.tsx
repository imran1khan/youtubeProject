import { AdvancedVideo } from "@cloudinary/react"
import { cld } from "../CloudineryTools/Cloudinery";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

interface suggestedVideoProp {
  public_id : string
}

function SuggestedVideo({public_id}:suggestedVideoProp) {
  const myVideo = cld.video(public_id);
  myVideo.resize(fill()
      .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))))
      .roundCorners(byRadius(0));
  return (
    <div className="bg-slate-500">
      <AdvancedVideo cldVid={myVideo} className=""/>
    </div>
  )
}

export default SuggestedVideo