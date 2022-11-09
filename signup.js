let show=document.getElementById("show");
show.onclick=()=>{
    showdiv();
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
h2.innerText="Apple TV App & Privacy";
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
h1.innerText="Create Apple Account";
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
lastline.innerText="You acknowledge that you agree to the Apple Media Services Terms & Conditions when you select Continue.";
lastline.setAttribute("class","lastline")
let lastbuttondiv=document.createElement("div");
lastbuttondiv.setAttribute("class","lastbuttondiv")
let lastbutton=document.createElement("button");
lastbutton.innerText="CONTINUE"
lastbutton.setAttribute("class","lastbutton");
lastbuttondiv.append(lastbutton);
blackdiv.append(h1,formdiv,lastline,lastbuttondiv);

lastbutton.onclick=()=>{
let form=document.querySelector(".formreg");
let name=form.name.value;
let email=form.email.value;
let username=form.username.value;
let password=form.password.value;
let mobile=form.mobile.value;
let description=form.description.value;
allformdata(name,email,username,password,mobile,description);
}


}


const allformdata=(name,username,password,mobile,description)=>{

class user{
constructor(){

}
validate(username){
   return username.includes ("@")?false:true;
}
validate(password){
    return password.length>=8?true:false;
}




}








}




