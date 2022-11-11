



function slideShow(){
    const arr=[
        "https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/738x416.webp",
        "https://is5-ssl.mzstatic.com/image/thumb/HVKS5eWUgpZGnGLZ_LKOLA/738x416.webp",
        "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
        "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
        "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
    ];

    let i=0;
    let div=document.getElementById("slider");
    let img=document.createElement("img");
    img.src=arr[0];
    div.append(img);
    i=i+1;

    setInterval(function(){
        if(i==5){
            i=0;
        }
        img.src=arr[i];
        i=i+1;
        div.append(img);
    },3000);
}
slideShow();