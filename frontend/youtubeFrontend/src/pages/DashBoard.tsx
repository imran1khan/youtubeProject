import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import SidebarContent from "../components/SidebarContent";
import { useCheckCookie } from "../hooks/CheckCookie"
import { SettingSideBar, SidebarAtom } from "../store/SideBarList";
import VideoUpload from "./VideoUpload";
import { UploadVideoAtom } from "../store/recoilAtom";


function DashBoard() {
  useCheckCookie();
  const SvgList = useRecoilValue(SidebarAtom);
  const SvgSetting = useRecoilValue(SettingSideBar);
  const UploadVideo = useRecoilValue(UploadVideoAtom);
  return (
    <div className="flex h-screen">
      <div className={`fixed top-0 z-10 text-white backdrop-blur-sm bg-black/50 w-full h-full ${UploadVideo?'flex':'hidden'} justify-center items-center`}>
        <VideoUpload/>
      </div>
      <div id="sideBar" className="bg-slate-800 w-[15%] text-white relative">
        <div className="bg-blue-800 h-[25%] w-full flex flex-col items-center gap-2 justify-center">
          <img className="rounded-full h-32 w-32" src="https://yt3.ggpht.com/DX89GV9x1g6YHtbRRTMSF4GTw4zxELXvtVyCO-y9EKZbEMtGc1T-oaATulWnG466IyVYoz6f=s176-c-k-c0x00ffffff-no-rj" alt="" />
          <div className="text-center">your_channel</div>
          <div className="text-center">simrran_sultan</div>
        </div>
        <div className="bg-slate-950 flex flex-col gap-3 py-2">
          {SvgList.map((item, index) => (<SidebarContent key={index} path={item.path} textContent={item.textContent} svg={item.svg} />))}
        </div>
        <div className="bg-purple-900 w-full absolute bottom-0">
          {SvgSetting.map((item, index) => (<SidebarContent key={index} path={item.path} textContent={item.textContent} svg={item.svg} />))}
        </div>
      </div>
      <div className="bg-red-500 flex-grow"><Outlet/></div>
    </div>
  )
}

export default DashBoard