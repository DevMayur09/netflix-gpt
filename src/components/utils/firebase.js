// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuFHbR5vvHW9zoSJXePviH0tdFYQmvCfM",
  authDomain: "netflix-gpt-ba31e.firebaseapp.com",
  projectId: "netflix-gpt-ba31e",
  storageBucket: "netflix-gpt-ba31e.appspot.com",
  messagingSenderId: "500087490207",
  appId: "1:500087490207:web:c4464bb83ae1ffa39a44aa",
  measurementId: "G-4RZJSN2R4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();