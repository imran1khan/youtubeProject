
interface prop {
    comment:string,
    creator:string
}
function IndividualComment({comment,creator}:prop) {
    return (
        <div className="border border-yellow-50 flex gap-2">
            <div className="hidden">{creator}</div>
            <img src="/src/assets/channels4_profile.jpg" className="rounded-full" alt="" />
            <p className="text-white">{comment}</p>
        </div>
    )
}

export default IndividualComment