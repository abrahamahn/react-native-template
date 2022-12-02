// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoXk4JgYeSp9ykjBLg6wZhqVcmiLCXaWg",
  authDomain: "cashrollie-aebfc.firebaseapp.com",
  projectId: "cashrollie-aebfc",
  storageBucket: "cashrollie-aebfc.appspot.com",
  messagingSenderId: "1010432455837",
  appId: "1:1010432455837:web:142e7badd4998b8081d074",
  measurementId: "G-5KKYWCH18V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);