// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-299db.firebaseapp.com",
  projectId: "mern-estate-299db",
  storageBucket: "mern-estate-299db.firebasestorage.app",
  messagingSenderId: "416852594904",
  appId: "1:416852594904:web:9cc5d326c19f15f6f947ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);