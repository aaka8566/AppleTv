import { navbar , footer } from "./navbar.js";
let navdiv = document.getElementById("navbar");
navdiv.innerHTML = navbar();
let footdiv = document.getElementById("footer");
footdiv.innerHTML= footer();
let insearch = document.getElementById("searchinput");
insearch.onclick=function(){
    window.location.href="./search.html"
}



let getthename=JSON.parse(localStorage.getItem("profile"))||[];
let catchthebutton=document.getElementById("show");

if(getthename.name!=null){
    catchthebutton.innerText=`${getthename.name}`+"    |   "+"Sign Out";
}
else{catchthebutton.innerText="Sign In";}


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








let showtoknow=false;

    const getprofile=async(u,t)=>{
        console.log(u,t,"aaaa");
    let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${u}`,{
        
        headers:{
            Authorization: `Bearer ${t}`,
            "Content-Type":"application/json"
        }
    });
    let res1=await res.json();
    console.log(res1);
    let blackdiv=document.querySelector(".signupdiv");
    blackdiv.innerHTML=null;
    let p=document.createElement("h1");
    p.innerText=`Welcome ${res1.name}`;
   localStorage.setItem("profile",JSON.stringify(res1));
   setTimeout(function(){
    window.location.reload();
   },5000)
    let img=document.createElement("img");
        img.src="https://smallimg.pngkey.com/png/small/330-3307329_cross-thin-comments-cross-icon-black-png.png";
        img.setAttribute("id","cross1");
        img.onclick=()=>{
            let blackdiv=document.querySelector(".signupdiv");
            blackdiv.removeAttribute("id","showshow")
            blackdiv.innerHTML=null;
            showtoknow=true;
        }
    blackdiv.append(p,img);
    }
    
    
    
    
    
    
    
    
    
    
    
    const loginstart=(u,p)=>{
        console.log(u,p);
        
        class user{
        constructor(){
        
        }
        async login(u,p){
            const logindata={
                password:p,
                username:u
            };
            try{
            let response=await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
                method:"POST",
                body:JSON.stringify(logindata),
                
                headers:{
                    "Content-Type":"application/json"
                }
            })
    //         const test1=response.headers.get('content-type')?.includes('application/json');
    // if(!response.ok) throw `Error! status: ${response.status}`
    
    console.log(response.status);
            let res1=await response.json();
            let b=res1.token;
            console.log(res1.token);
            getprofile(u,res1.token);
        }
        catch(err){
            return ;
        }
        }
        
        
        
        }
        let User=new user();
        User.login(u,p);
        
        
        
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let show=document.getElementById("show");
    show.onclick=()=>{
        // if(showtoknow==false){showdiv();}
        let getthename=JSON.parse(localStorage.getItem("profile"));
if(getthename!=null){
    localStorage.removeItem("profile");
    window.location.reload();
}
        else if(getthename==null){showdiv();}
    }
    const showdiv=()=>{
        let blackdiv=document.querySelector(".signupdiv");
        blackdiv.setAttribute("id","showshow")
    }
    let closethesignup=document.querySelector(".cross");
    closethesignup.onclick=()=>{
        let blackdiv=document.querySelector(".signupdiv");
        blackdiv.removeAttribute("id","showshow")
    }
    let createnewid=document.getElementById("createnewid");
    
    createnewid.onclick=()=>{
        let blackdiv=document.querySelector(".signupdiv");
        blackdiv.innerHTML=null;
        let red=document.createElement("div");
        red.setAttribute("class","allfields1");
        let img=document.createElement("img");
        img.src="https://smallimg.pngkey.com/png/small/330-3307329_cross-thin-comments-cross-icon-black-png.png";
        img.setAttribute("id","cross1");
        img.onclick=()=>{
            let blackdiv=document.querySelector(".signupdiv");
            blackdiv.removeAttribute("id","showshow")
            window.location.reload();
        }
        blackdiv.append(red,img);
        let allfields=document.querySelector(".allfields1");
    let img1=document.createElement("img");
    img1.src="https://tv.apple.com/static-commerce/img/tv.4572edc9.png"
    let imgsvg=document.createElement("img");
    img1.setAttribute("class","img1");
    let h2=document.createElement("h2");
    h2.innerText="Planet TV App & Privacy";
    imgsvg.src="https://tv.apple.com/static-commerce/img/privacy.2b1ef289.svg";
    imgsvg.setAttribute("class","img2")
    let firstp=document.createElement("p");
    firstp.innerText="Your playback, searches, purchases, and device trust score are used to personalize your experience, improve the service, send you notifications, and prevent fraud. Your device serial number may be used to check eligibility for offers. See how your data is managed...";
    firstp.setAttribute("class","level2p");
    let secondp=document.createElement("p");
    secondp.innerText="Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support, and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. See how your data is managed..."
    secondp.setAttribute("class","level2p");
    let continuebutton=document.createElement("button");
    continuebutton.innerText="CONTINUE";
    continuebutton.setAttribute("class","continuepart2");
    continuebutton.onclick=()=>{
        let blackdiv=document.querySelector(".signupdiv");
        blackdiv.innerHTML=null;
        appendform();
    }
    allfields.append(img1,h2,imgsvg,firstp,secondp,continuebutton)
    };
    
    // 3rd page of signup
    const appendform=()=>{
        let blackdiv=document.querySelector(".signupdiv");
        let img1=document.createElement("img");
        img1.src="https://smallimg.pngkey.com/png/small/330-3307329_cross-thin-comments-cross-icon-black-png.png"
        img1.setAttribute("class","imgpart3cross");
        img1.onclick=()=>{
            let blackdiv=document.querySelector(".signupdiv");
            blackdiv.removeAttribute("id","showshow")
            window.location.reload();
        }
        let imgsvg=document.createElement("img");
        imgsvg.src="https://cdn.mos.cms.futurecdn.net/6bTF6C2QiWXvhi33fJi3AC.jpg";
        imgsvg.setAttribute("class","imgpart3apple");
        let divlast=document.createElement("div");
        divlast.setAttribute("class","divlastupper");
    divlast.append(img1,imgsvg);
    blackdiv.append(divlast);
    
    
    let h1=document.createElement("h1");
    h1.innerText="Create Planet Account";
    h1.style="text-align:center"
    
    //formdiv
    let formdiv=document.createElement("div");
    formdiv.setAttribute("class","formdiv");
    // form starts here
    let form=document.createElement("form");
    form.setAttribute("class","formreg")
    let inputname=document.createElement("input");
    inputname.setAttribute("placeholder","First Name");
    inputname.setAttribute("type","text");
    inputname.setAttribute("id","name");
    
    let inputemail=document.createElement("input");
    inputemail.setAttribute("placeholder","email");
    inputemail.setAttribute("type","email");
    inputemail.setAttribute("id","email");
    
    let inputusername=document.createElement("input");
    inputusername.setAttribute("placeholder","username");
    inputusername.setAttribute("type","text");
    inputusername.setAttribute("id","username");
    
    let inputpassword=document.createElement("input");
    inputpassword.setAttribute("placeholder","password");
    inputpassword.setAttribute("type","password");
    inputpassword.setAttribute("id","password");
    
    let inputmobile=document.createElement("input");
    inputmobile.setAttribute("placeholder","mobile");
    inputmobile.setAttribute("type","number");
    inputmobile.setAttribute("id","mobile");
    
    let inputdescription=document.createElement("input");
    inputdescription.setAttribute("placeholder","description");
    inputdescription.setAttribute("type","text");
    inputdescription.setAttribute("id","description");
    
    let inputcheckbox=document.createElement("input");
    inputcheckbox.setAttribute("placeholder","checkkox");
    inputcheckbox.setAttribute("type","checkbox");
    inputcheckbox.setAttribute("id","checkbox");
    
    let label=document.createElement("label");
    label.innerText="Agree To Terms and Conditions.";
    label.setAttribute("class","label");
    form.append(inputname,inputemail,inputusername,inputpassword,inputmobile,inputdescription);
    formdiv.append(form,inputcheckbox,label)
    //form ends here
    
    let lastline=document.createElement("p");
    lastline.innerText="You acknowledge that you agree to the Planet Media Services Terms & Conditions when you select Continue.";
    lastline.setAttribute("class","lastline")
    let lastbuttondiv=document.createElement("div");
    lastbuttondiv.setAttribute("class","lastbuttondiv")
    let lastbutton=document.createElement("button");
    lastbutton.innerText="CONTINUE"
    lastbutton.setAttribute("class","lastbutton");
    
    lastbuttondiv.append(lastbutton);
    blackdiv.append(h1,formdiv,lastline,lastbuttondiv);
    
    
    
    //setting button disabled
    
    
    lastbutton.onclick=()=>{
    let form=document.querySelector(".formreg");
    let name=form.name.value;
    let email=form.email.value;
    let username=form.username.value;
    let password=form.password.value;
    let mobile=form.mobile.value;
    let description=form.description.value;
    let checkcheckbox=document.getElementById("checkbox").checked;
    if(name!=""&&email!=""&&username!=""&&password!=""&&mobile!=""&&description!=""&&checkcheckbox!=false){
        
        allformdata(name,email,username,password,mobile,description);
    }
    
    else{
        alert("Fill All The Details")
    }
    }
    
    
    }
    
    
    //login all times
    let paswordimage=document.getElementById("passwordimage");
    paswordimage.onclick=()=>{
    let username=document.getElementById("id").value;
    let password=document.getElementById("password1").value;
       loginstart(username,password);
    }
    
    //login all times
    
    
    
    
    const allformdata=(name,email,username,password,mobile,description)=>{
    // console.log(name,username,password,mobile,description);
    class user{
    constructor(){
    
    }
    validateusername(u){
       return u.includes ("@")?false:true;
    }
    validatepassword(p){
        return p.length>=8?true:false;
    }
    async signup(n,e,u,p,m,d){
    
    let isvalidated=this.validateusername(u)&&this.validatepassword(p);
    
    if(isvalidated)
    {
        this.name=n;
        this.email=e;
        this.username=u;
        this.password=p;
        this.mobile=m;
        this.description=d;
    }
    
    const res=await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
        method:"POST",
        body:JSON.stringify(this),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const res1=await res.json();
    console.log(res1.message);
    if(res1.message=="Registration Success"){
        console.log("done");
        let blackdiv=document.querySelector(".signupdiv");
       let h1=document.createElement("h1");
       h1.innerText="Registered Successfully"
       blackdiv.innerHTML=null;
       let nowcansignin=document.createElement("button");
       nowcansignin.innerText="Continue To Sign In";
       nowcansignin.setAttribute("class","nowcansignin");
    
    
       nowcansignin.onclick=()=>{
        blackdiv.innerHTML=null;
       // appending after registration
       let img1=document.createElement("img");
       img1.setAttribute("class","cross");
       img1.src="https://smallimg.pngkey.com/png/small/330-3307329_cross-thin-comments-cross-icon-black-png.png";
    
       let divallfields=document.createElement("div");
       divallfields.setAttribute("class","allfields");
      let divinputforid=document.createElement("div");
      divinputforid.setAttribute("id","inputforid");
    
    let div1=document.createElement("div");
    let inputid=document.createElement("input");
    inputid.setAttribute("placeholder","Apple id");
    inputid.setAttribute("type","text");
    inputid.setAttribute("id","id");
    let imginputforiddiv1=document.createElement("img");
    imginputforiddiv1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS753-RxOsj-3vnG6wVbHxwAseHMAS8FxcffQ&usqp=CAU";
    div1.append(inputid,imginputforiddiv1);
    
    let div2=document.createElement("div");
    let inputpassword=document.createElement("input");
    inputpassword.setAttribute("placeholder","Password");
    inputpassword.setAttribute("type","passowrd");
    inputpassword.setAttribute("id","password1");
    let imginputforiddiv2=document.createElement("img");
    imginputforiddiv2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS753-RxOsj-3vnG6wVbHxwAseHMAS8FxcffQ&usqp=CAU";
    imginputforiddiv2.onclick=()=>{
       let username= inputid.value;
       let password=inputpassword.value;
       loginstart(username,password);
    }
    div2.append(inputpassword,imginputforiddiv2);
    
    divinputforid.append(div1,div2);
    
      let img2=document.createElement("img");
    img2.src="https://cdn.mos.cms.futurecdn.net/6bTF6C2QiWXvhi33fJi3AC.jpg";
    let firstp=document.createElement("p");
    firstp.innerText="Sign in with your Apple ID";
    let secondp=document.createElement("p");
    secondp.innerText="You will be signed in to Apple TV and Apple Music";
    let but1=document.createElement("button");
    but1.innerText="Create New Apple ID";
    but1.setAttribute("id","createnewid");
    let but2=document.createElement("button");
    but2.innerText="Forgot ID or Password?";
    but2.setAttribute("id","forgotidps");
    
    
    divallfields.append(img2,firstp,secondp,divinputforid,but1,but2);
    
    blackdiv.append(img1,divallfields);
    
        blackdiv.setAttribute("id","showshow");
    
    
    
    
       }
       blackdiv.append(h1,nowcansignin);
       
        
    }
    else if(res1.message=="Registration failed, user already exists"){
        alert("User already exists ,Try with a diiferent ID")
    }
    else{
        console.log("Something went wrong ,Retry");
    }
    }
    
    
    
    }
    
    let User=new user();
    User.signup(name,email,username,password,mobile,description);
    
    }
    
    
       //appending backend data
const append=(data)=>{
    let appenddiv=document.querySelector("#testi");
    appenddiv.innerHTML=null;
    data.forEach(({name,poster,serieslink,duration}) => {
        console.log(name,poster,duration);
        let p1=document.createElement("p");
        p1.innerText=name;
        let p2=document.createElement("p");
        p2.innerText=duration;
        let image=document.createElement("img");
        image.src=poster;
        let div=document.createElement("div");
        div.setAttribute("class","img_cards");
        div.append(image,p1,p2);
        appenddiv.append(div);
    });
    
    
    
    }
    const backendfetch=async()=>{
        try{
    let res=await fetch(`https://stormy-headland-68504.herokuapp.com/series`);
    let res1=await res.json();
    console.log(res1);
    append(res1);
        }
        catch(err){
            console.log(err);
        }
    }
    backendfetch();
        //appending backend data
    
