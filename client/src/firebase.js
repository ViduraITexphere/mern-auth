// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2b398.firebaseapp.com",
  projectId: "mern-auth-2b398",
  storageBucket: "mern-auth-2b398.appspot.com",
  messagingSenderId: "275825365533",
  appId: "1:275825365533:web:5a6ebc228b781998a52cf4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
