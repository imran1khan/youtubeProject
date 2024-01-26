import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";


function App() {

  return (
    <div id="detailStucture">
      <Banner/>
      <Outlet/>
    </div>
  )
}

export default App
