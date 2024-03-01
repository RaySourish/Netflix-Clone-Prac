// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWY_tFbuuZ8gwJkVWTqWKrSgnY6tqq7w4",
  authDomain: "netflix-prac-e942a.firebaseapp.com",
  projectId: "netflix-prac-e942a",
  storageBucket: "netflix-prac-e942a.appspot.com",
  messagingSenderId: "513326546106",
  appId: "1:513326546106:web:6ec3d98abcc773caccd683"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();