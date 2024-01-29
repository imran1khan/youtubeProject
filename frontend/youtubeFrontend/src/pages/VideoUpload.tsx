

function VideoUpload() {
    return (
        <div className="bg-slate-800 h-1/2 w-1/2">
            <form className="">
                <input className="w-full" type="file" name="" id="" />
                <div>Title:</div>
                <textarea className="w-full h-full" name="Title:" id="" cols={30} rows={10}>text</textarea>
                <div>discription:</div>
                <textarea className="w-full h-full" name="discription" id="" cols={30} rows={10}>text</textarea>
            </form>
        </div>
    )
}

export default VideoUpload