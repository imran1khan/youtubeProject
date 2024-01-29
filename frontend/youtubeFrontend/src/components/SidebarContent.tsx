import { NavLink } from "react-router-dom"

interface inputProp {
    path: string,
    textContent: string,
    svg: JSX.Element
}
function SidebarContent({ path, svg, textContent }: inputProp) {
    return (
        <NavLink to={path}>
            {({ isActive}) => (
                <div id="one" className={`flex items-center h-11 gap-5 pl-6 
                ${isActive? "hover:bg-red-400" : "hover:bg-slate-900"} ${isActive?'bg-red-700':''}`}>
                    {svg}
                    <div>{textContent}</div>
                </div>
            )}
        </NavLink>
    )
}

export default SidebarContent