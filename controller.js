// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2FoWlwLXBcJDyY09mpynZl-92TpRjscA",
  authDomain: "mobile-31902025.firebaseapp.com",
  projectId: "mobile-31902025",
  storageBucket: "mobile-31902025.firebasestorage.app",
  messagingSenderId: "405653498191",
  appId: "1:405653498191:web:422eae4aadc267dbf53d3a",
  measurementId: "G-LJJ02Z7NFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);