// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6KQVuzF6b2Pm-MLHi7iN67CK9Lyr6fu4",
  authDomain: "job-seeker-9c530.firebaseapp.com",
  projectId: "job-seeker-9c530",
  storageBucket: "job-seeker-9c530.firebasestorage.app",
  messagingSenderId: "820484934771",
  appId: "1:820484934771:web:2cd21f8357e1ced0572e06",
  measurementId: "G-FN3QLPPRZC"
};


export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
