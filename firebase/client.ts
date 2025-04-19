// Import the functions you need from the SDKs you need

import { initializeApp,getApp,getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeIJ1g0giN8XjJruxnr9K8BrTmxRAgfas",
  authDomain: "deathrow-e0bdc.firebaseapp.com",
  projectId: "deathrow-e0bdc",
  storageBucket: "deathrow-e0bdc.firebasestorage.app",
  messagingSenderId: "658995224526",
  appId: "1:658995224526:web:4625c150a5d1c7632d159f",
  measurementId: "G-0Z8B74LCY6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);