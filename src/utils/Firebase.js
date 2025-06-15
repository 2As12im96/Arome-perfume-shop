// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth , GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYUBNLcYDw4YFrsPgwzBzmJxqzoaFUcxo",
  authDomain: "arome-perfum-app.firebaseapp.com",
  projectId: "arome-perfum-app",
  storageBucket: "arome-perfum-app.firebasestorage.app",
  messagingSenderId: "417744276152",
  appId: "1:417744276152:web:4b5e805f210e8a7a7bc24d",
  measurementId: "G-GB773N91MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth , provider};
