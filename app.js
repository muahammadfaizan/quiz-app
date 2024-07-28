// function getUsers(){
    
//     let users = localStorage.getItem("users");

//     if(users){
//         users = JSON.parse(users)
//     }else{
//         users = []
//     }

//     return users ;
// }



// function getRegister(){
//     const name = document.querySelector("#r-name")
//     const email = document.querySelector("#r-email")
//     const password = document.querySelector("#r-password")
//     let users = getUsers();
   
//     console.log(users);

//     const user = {
//         name : name.value,
//         email : email.value,
//         password : password.value
//     }
    
 
//     users.push(user)
 
//     localStorage.setItem("users" , JSON.stringify(users))

//     name.value = ""
//     email.value = ""
//     password.value = ""


//     // console.log(name.value , email.value , password.value);
// }



// function login (){
//     const email = document.querySelector("#l-email") 
//     const password = document.querySelector("#l-password") 

//     const users = getUsers();
//     let saveuUsers = {}
//     for(let i = 0 ; i < users.length; i++){
//         if(email.value === users[i].email){
//           saveuUsers = users[i]
//           break;
//         }
//     }
//     if(saveuUsers.email){
//         if(saveuUsers.password === password.value){
//             console.log("Users login Succsefully");
//             window.location = "quiz.html"
//         }else{
//             console.log("Invalid password");
//         }
//     }else{
//         console.log("users not found");
//     }
// }
























// function getRegister(){
//     const name = document.querySelector("#r-name")
//     const email = document.querySelector("#r-email")
//     const password = document.querySelector("#r-password")
//     let users = localStorage.getItem("users")

//     if(users){
//         users = JSON.parse(users)
//     }else{
//         users =[]
//     }

//     const user ={
//         name : name.value,
//         email : email.value,
//         password : password.value 
//     }

//     users.push[user]

//     localStorage.setItem("users" , JSON.stringify(users))

//     // console.log(users);

//     // console.log(name.value , email.value , password.value);
// }

















































import { signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider ,GithubAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";



const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


form.addEventListener("submit" , (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      window.location = "quiz.html"
    })
    .catch((error) => {
    //  const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
    
})


const google = document.querySelector("#google-btn")

const provider = new GoogleAuthProvider();

google.addEventListener("click" , ()=>{
    console.log("hello google");
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    window.location = "quiz.html"
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
})




const github = document.querySelector("#github-btn")

const getProvider = new GithubAuthProvider();

github.addEventListener("click" , ()=>{
  console.log("hello github");signInWithPopup(auth, getProvider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    window.location = "quiz.html"
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})

