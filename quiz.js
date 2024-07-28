import { signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


const logout = document.querySelector("#logout") 



logout.addEventListener("click" , ()=>{
    console.log("hello world");
    signOut(auth).then(() => {
    window.location = "index.html"
    }).catch((error) => {
        // An error happened.
      });
})









