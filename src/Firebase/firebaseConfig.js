
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBc610HqsfRIIUZwwztktPlt7CeASPeBM",
  authDomain: "edu-journey-fusion.firebaseapp.com",
  projectId: "edu-journey-fusion",
  storageBucket: "edu-journey-fusion.appspot.com",
  messagingSenderId: "312686457843",
  appId: "1:312686457843:web:e35238dae1239b061dd886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;