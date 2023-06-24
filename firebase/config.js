// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ijpsXsE22cz0hnxPgndKvN4BZt5KYRc",
  authDomain: "winch-dd1b0.firebaseapp.com",
  projectId: "winch-dd1b0",
  storageBucket: "winch-dd1b0.appspot.com",
  messagingSenderId: "81915338188",
  appId: "1:81915338188:web:556ef33f5dd6e05192d169",
  measurementId: "G-CPFHQ4WZPY"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export { app, auth, provider, db, firebase };