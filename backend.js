// Correct Firebase imports
export {signIn, signUp}
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDD48hinQXoOjwPusaX3fC7FWj5Nl2io60",
  authDomain: "fithub-e94b7.firebaseapp.com",
  projectId: "fithub-e94b7",
  storageBucket: "fithub-e94b7.firebasestorage.app",
  messagingSenderId: "216525947537",
  appId: "1:216525947537:web:d1e55f07cd53a17be17530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Example values (replace with input fields)
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const email = emailInput.value;
const password = passwordInput.value;
const SignInBTN = document.querySelector('#signIn');
const SignUpBTN = document.querySelector('#signUp');

SignInBTN.addEventListener('click', () => {
    signIn(emailInput.value, passwordInput.value);
});
SignUpBTN.addEventListener('click', () => {
    signUp(emailInput.value, passwordInput.value);
});




// SIGN UP FUNCTION
function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("SIGNED UP: " + user.email);
    })
    .catch((error) => {
      alert(error.code + ": " + error.message);
    });
}

// SIGN IN FUNCTION
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("SIGNED IN: " + user.email);
    })
    .catch((error) => {
      alert(error.code + ": " + error.message);
    });
}