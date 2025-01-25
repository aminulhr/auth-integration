// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByL2xcTHmvYMDog86RBl0GKIj2z-0TDDg",
  authDomain: "auth-integration-project-245a3.firebaseapp.com",
  projectId: "auth-integration-project-245a3",
  storageBucket: "auth-integration-project-245a3.firebasestorage.app",
  messagingSenderId: "821636567335",
  appId: "1:821636567335:web:e3f174411d190133729902",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
