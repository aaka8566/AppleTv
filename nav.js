import { navbar , footer } from "./navbar.js";

let navdiv = document.getElementById("navbar");

navdiv.innerHTML = navbar();

let footdiv = document.getElementById("footer");
footdiv.innerHTML= footer();