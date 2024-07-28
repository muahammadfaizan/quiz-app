 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"


 const firebaseConfig = {
   apiKey: "AIzaSyDLps1eV_6d2l_eCCCJ400OdpgxYp3bWZ8",
   authDomain: "quiz-app-d4e17.firebaseapp.com",
   projectId: "quiz-app-d4e17",
   storageBucket: "quiz-app-d4e17.appspot.com",
   messagingSenderId: "74759452382",
   appId: "1:74759452382:web:948c9deedf0e311fff744f",
   measurementId: "G-2Y2Q5VT87E"

 };


 // Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)