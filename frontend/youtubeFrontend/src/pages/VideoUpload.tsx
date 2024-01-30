import { useState } from "react"
import { useSetRecoilState } from "recoil";
import { UploadVideoAtom } from "../store/recoilAtom";


function VideoUpload() {
    const setUploadVideoAtom = useSetRecoilState(UploadVideoAtom);
    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');
    const HideUploadVideoDiv = ()=>{
        setUploadVideoAtom(false);
    }
    const onSubmitVideo=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(title)
        console.log(discription)
    }
    return (
        <div className="bg-slate-800 h-1/2 w-1/2">
            <div className="flex flex-col items-end p-2">
                <button onClick={HideUploadVideoDiv} className="bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <form onSubmit={onSubmitVideo} className="w-full h-full">
                <input className="w-full" type="file" name="" id="" />
                <div>Title:</div>
                <textarea value={title} onChange={(e) => { setTitle(e.target.value) }}
                    className="w-full resize-none text-black" name="Title:" id="" cols={30} rows={5} />
                <div>discription:</div>
                <textarea value={discription} onChange={(e) => { setDiscription(e.target.value) }} className="w-full resize-none text-black" name="discription" id="" cols={30} rows={5} />
                <div className=" mt-2 flex flex-col items-center">
                    <button type="submit" className="bg-blue-600 py-2 px-10 rounded-md">upload</button>
                </div>
            </form>
        </div>
    )
}

export default VideoUpload