import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import { cld } from "../CloudineryTools/Cloudinery"
import { AdvancedVideo } from '@cloudinary/react';

interface VideoProp {
  public_id: string,
}
function VideoThumbCard({ public_id }: VideoProp) {
  const myVideo = cld.video(public_id);
  myVideo.resize(fill()
    .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(0));
  return (
    <div className="bg-red-400 h-auto w-full border border-black">
      <AdvancedVideo cldVid={myVideo} className="w-full"/>
      <div className="bg-slate-600 grid grid-cols-12">
        <div className="col-span-1  flex justify-center items-center">
          <img src="/src/assets/channels4_profile.jpg" className="rounded-full" alt="" srcSet="" />
        </div>
        <div className="col-span-11 ">
          <div id="videoTitle">
            9MM x LOLI SHIGURE UI
          </div>
          <div>
            <div itemID="channelName" className="text-white">MusicTracer</div>
            <div itemID="viewsAndTime" className="text-white">234 views | 3 days ago</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoThumbCard