import { useGetAllComments } from "../hooks/CheckCookie"
import IndividualComment from "./IndividualComment"



interface prop {
    videoId:string
}
function AllComments({videoId}:prop) {
  let allComments = useGetAllComments(videoId) ?? [];
  return (
    <div className="space-y-2">
      {allComments.map((eComment) => (
        <IndividualComment key={eComment._id} comment={eComment.Comment} creator={eComment.CreatorId} />
      ))}
    </div>
  )
}

export default AllComments