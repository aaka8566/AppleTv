
const showVideos = () => {

    let data = localStorage.getItem("clicked_video")
    
    let { videoId } = JSON.parse(data)
    
    let iframe = document.createElement("iframe");
    
    iframe.src = `https://www.youtube.com/embed/${videoId}`
    
    iframe.width = "100%"
    iframe.height = "500px"
    iframe.setAttribute("allowfullscreen", true)
    
    let video = document.getElementById("video");
    
    video.append(iframe);
    
    
    }