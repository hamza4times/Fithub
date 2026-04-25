import { getFirestore } from "firebase/firestore";

// Correct Firebase imports
export {signIn, signUp}
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDD48hinQXoOjwPusaX3fC7FWj5Nl2io60",
  authDomain: "fithub-e94b7.firebaseapp.com",
  projectId: "fithub-e94b7",
  storageBucket: "fithub-e94b7.firebasestorage.app",
  messagingSenderId: "216525947537",
  appId: "1:216525947537:web:d1e55f07cd53a17be17530"
};

const data = {
  weight: '1000.00',
  height: '100',
  workout_data: 'lazy',
};

// Add a new document in collection "cities" with ID 'LA'
const res = await db.collection('user-info').doc("nfjweh4iofhuiogh3ui24").set(data);