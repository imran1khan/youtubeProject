import { atom } from "recoil";

export const SidebarAtom = atom({
    key: 'SidebarAtom',
    default: [
        {
            path: '/content',
            svg: (
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="cursor-pointer block w-8 h-8"><g width="24" height="24" viewBox="0 0 24 24"><path d="M11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15ZM13 3V9H21V3H13Z" fill="white"></path></g></svg>
            ),
            textContent: 'Dashboard'
        },
        {
            path: '/content',
            svg: (
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" cursor-pointer block w-8 h-8"><g width="24" height="24" viewBox="0 0 24 24"><path d="M4 5.99982H3V20.9998H18V19.9998H4V5.99982Z" fill="white"></path><path d="M6 2.99982V17.9998H21V2.99982H6ZM11 13.9998V6.99982L17 10.4998L11 13.9998Z" fill="white"></path></g></svg>
            ),
            textContent: 'Content'
        },
    ],
});