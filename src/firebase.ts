import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBunRXCpeP3trQhBmot3P97WeO_uANZjFg",
  authDomain: "cisnerosnutricion-de9dd.firebaseapp.com",
  projectId: "cisnerosnutricion-de9dd",
  storageBucket: "cisnerosnutricion-de9dd.appspot.com",
  messagingSenderId: "684579468833",
  appId: "1:684579468833:web:59a99301731fe44c711560",
  measurementId: "G-EVQN0JT253"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);