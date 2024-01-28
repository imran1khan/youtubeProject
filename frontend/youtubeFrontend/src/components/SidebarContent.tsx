import { NavLink } from "react-router-dom"

interface inputProp {
    path: string,
    textContent: string,
    svg: JSX.Element
}
function SidebarContent({ path, svg, textContent }: inputProp) {
    return (
        <NavLink to={path}>
            <div id="one" className="flex items-center h-11 gap-5 pl-6 hover:bg-slate-900">
                {svg}
                <div>{textContent}</div>
            </div>
        </NavLink>
    )
}

export default SidebarContent