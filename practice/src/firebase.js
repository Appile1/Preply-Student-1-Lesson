// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDIQ_DWIWtu2iBLVoJs49pLA_dHZrZvSA",
  authDomain: "practice1-3b17f.firebaseapp.com",
  projectId: "practice1-3b17f",
  storageBucket: "practice1-3b17f.firebasestorage.app",
  messagingSenderId: "683509818703",
  appId: "1:683509818703:web:23804a8fd72e876b15d13a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
