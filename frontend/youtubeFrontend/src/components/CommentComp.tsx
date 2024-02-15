import { useRecoilState, useSetRecoilState } from "recoil";
import { CommentsAtom, reRanderComment } from "../store/recoilAtom";
import toast from "react-hot-toast";
import axios from "axios";
import { useCookies } from "react-cookie";
interface props{
    videoId:string
}
interface res {
    message:string,
}
function CommentComp({videoId}:props) {
    const [cookie] = useCookies(['token']);
    const [commentVal,setCommentVal]=useRecoilState(CommentsAtom);
    const setRerander = useSetRecoilState(reRanderComment);
    const postComment =async()=>{
        if (commentVal.trim()==='') {
            toast.error('invalid input')
            return;
        }
        try {
            const responce = await axios.post<res>('http://localhost:3000/video/postComment',{Comment:commentVal,videoId,UserId:cookie.token})
            if (responce.data) {
                toast.success(responce.data.message);
                setRerander((prev) => !prev);
            }
        } catch (error) {
            console.log(error)
        }
        setCommentVal('');
    }
    return (
        <div className="">
            <p><label htmlFor="putComment">Comments:</label></p>
            <textarea name="inputComment" id="putComment" value={commentVal} onChange={(e) => { setCommentVal(e.target.value) }}
                cols={20} rows={5} className="w-full text-white bg-black border border-white"></textarea>
            <button type="submit" onClick={postComment} className="bg-blue-600 mt-1 px-4 py-2 rounded-md">post</button>
        </div>
    )
}

export default CommentComp