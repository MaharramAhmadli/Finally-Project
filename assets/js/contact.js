// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhgoMNyfdqIA8pykMboy9s2a1iPB7oins",
  authDomain: "finally-project-81df1.firebaseapp.com",
  projectId: "finally-project-81df1",
  storageBucket: "finally-project-81df1.appspot.com",
  messagingSenderId: "661008601886",
  appId: "1:661008601886:web:614a0e6a02c00af9142f0f"
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);

import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.22.2/database-app.js";
const db = getDatabase();

const nameInp = document.getElementById("nameInp");
const surnameInp = document.getElementById ("surnameInp");
const gmailInp = document.getElementById ("gmailInp");
const cityInp = document.getElementById ("cityInp"); 
const submitBtn = document.getElementById ("submit");


function SubmitData(){
    set(ref(db, "Finally-Project/" + idInp),{
        Name: nameInp.value,
        Surname: surnameInp.value,
        Id: idInp
    })
    .then (alert("Proses yerine yetirildi!"))
    .catch(err=>alert(err))
}

submitBtn.addEventListener('click', SubmitData)