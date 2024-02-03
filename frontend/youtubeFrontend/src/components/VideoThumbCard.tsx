import { cld } from "../CloudineryTools/Cloudinery"

interface VideoProp {
  public_id:string,
}
function VideoThumbCard({public_id}:VideoProp) {
  const myVideo = cld.video(public_id);
  return (
    <div className="bg-red-400">
      <img src="/src/assets/youtubeThumbnail.jpg" alt="" />
      <div className="grid grid-cols-12">
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