import { navbar , footer } from "./navbar.js";
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();
let footdiv = document.getElementById("footer");
footdiv.innerHTML= footer();
let insearch = document.getElementById("searchinput");
insearch.onclick=function(){
    window.location.href="./search.html"
}



const showVideos = () => {
console.log("abd")
    let data = localStorage.getItem("clicked_video")
    
    let { videoId } = JSON.parse(data)
    
    let iframe = document.createElement("iframe");
    
    // iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    
    // iframe.width = "100%"
    // iframe.height = "500px"
    // iframe.setAttribute("allowfullscreen", true)
    // iframe.setAttribute("autoplay", true)
    iframe.src=`https://www.youtube.com/embed/${videoId}?frameborder=0&autoplay=1&mute=1`;
iframe.width="100%";
iframe.height="500px";
iframe.setAttribute("allowfullscreen",true);
iframe.setAttribute("autoplay",true);
    
    let video = document.getElementById("video");
    
    video.append(iframe);
    
    
    }
//     let body = document.querySelector("body")
// body.addEventListener("load",showVideos)
showVideos();