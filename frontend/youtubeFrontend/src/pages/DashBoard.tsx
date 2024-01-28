// import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import SidebarContent from "../components/SidebarContent";
import { useCheckCookie } from "../hooks/CheckCookie"
import { SidebarAtom } from "../store/SideBarList";
// import { SvgList } from "../hooks/SidebarListObject";


function DashBoard() {
  useCheckCookie();
  const SvgList = useRecoilValue(SidebarAtom);
  return (
    <div className="flex h-screen">
      <div id="sideBar" className="bg-slate-800 w-[15%] text-white">
        <div className="bg-blue-800 h-[25%] w-full flex flex-col items-center justify-center">
          <img className="rounded-full" src="https://yt3.ggpht.com/DX89GV9x1g6YHtbRRTMSF4GTw4zxELXvtVyCO-y9EKZbEMtGc1T-oaATulWnG466IyVYoz6f=s176-c-k-c0x00ffffff-no-rj" alt="" />
          <div className="text-center">your_channel</div>
          <div className="text-center">simrran_sultan</div>
        </div>
        <div className="bg-slate-950">
          {SvgList.map((item, index) => (<SidebarContent key={index} path={item.path} textContent={item.textContent} svg={item.svg} />))}
        </div>
        <div className="bg-purple-900">setting</div>
      </div>
      <div className="bg-red-500 flex-grow">div2</div>
    </div>
  )
}

export default DashBoard