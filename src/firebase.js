// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUbV6jPgE1XMXI7r5adpFbRwfGadriOo",
  authDomain: "expense-tracker-c467a.firebaseapp.com",
  projectId: "expense-tracker-c467a",
  storageBucket: "expense-tracker-c467a.firebasestorage.app",
  messagingSenderId: "292262126603",
  appId: "1:292262126603:web:a23faf5663e4ca91f8530e",
  measurementId: "G-85WD972VXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;