import { AdvancedVideo } from "@cloudinary/react";
// import { useGetLeftOverBannerHeight } from "../hooks/CheckCookie";
import { cld } from "../CloudineryTools/Cloudinery";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { useLocation, useParams } from "react-router-dom";
import SuggestedVideo from "../components/SuggestedVideo";
import { useCheckCookie, useGetVideos } from "../hooks/CheckCookie";

interface loactionInterface {
    title : string,
    description:string
}
function FullVideo() {
    // const [remainHeight] = useGetLeftOverBannerHeight();
    useCheckCookie();
    const videos = useGetVideos();
    const param = useParams();
    const loaction = useLocation();
    const {title,description} = loaction.state as loactionInterface;// i want to tell my typescript that title and description is string
    const myVideo = cld.video(param.id);
    myVideo.resize(fill()
        .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))))
        .roundCorners(byRadius(0));
    return (
        <div className={`bg-black text-white mt-1 h-fit flex`}>
            <div className="w-[75%]">
                <AdvancedVideo cldVid={myVideo} className="" controls/>
                <div id="videoAbout">
                    {title}
                    <div className="flex">
                        <div>
                        profilePicture
                        channelName
                        subscribe button
                        </div>
                        <div>
                            like
                            share
                            download
                            clip
                            save
                            more
                        </div>
                    </div>
                    <div>{description}</div>
                </div>
                <div>commemts</div>
            </div>
            <div className="bg-yellow-900 flex-1">{videos.map((iVideo)=>(<SuggestedVideo key={iVideo._id} public_id={iVideo.public_id}/>))}</div>
        </div>
    )
}

export default FullVideo