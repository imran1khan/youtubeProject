import { useEffect, useState } from "react"

function DarkModeBTN() {
    const [theme,setTheme]=useState('');
    useEffect(()=>{
        document.querySelector('html')?.classList.toggle('dark');
    },[theme]);
    const changeTheme=()=>{
        setTheme(theme==='dark'?'light':'dark');
    }
  return (
    <button onClick={changeTheme} className="text-white px-8 py-4 bg-gray-600 rounded-lg">
    {theme==='dark'?'dark':'light'}
    </button>
  )
}

export default DarkModeBTN