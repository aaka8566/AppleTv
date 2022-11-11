



const navbar = ()=>{
    return `<a href="./index.html">
    <img id="navimg" src="./New folder/logo.png" alt="logo"></a>
    <div>
        <div id="navinput">
            <i class="fa fa-search icon"></i>
    <input type="text"  placeholder="Search" >
</div>
<div>
 
    <button id="show"><img  src="./New folder/icon_for_button.png" alt="">  Sign In</button>
</div>
</div>`
}

const footer = ()=>{
    return `  <div id="footer1">
    <p>Copyright © 2022 Planet Inc. All rights reserved.</p>
</div>
<div id="footer2">
    <p>Internet Service Terms  &nbsp |  &nbsp  Planet Tv & Privacy  &nbsp |   &nbsp Cokkie Warning  &nbsp|  &nbsp  Support </p>
</div>`
}


export { navbar , footer}
