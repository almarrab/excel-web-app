// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ27h6ERegC-ZTImtZAvNcgAztlFJyAwc",
  authDomain: "excelwebapp-d3a55.firebaseapp.com",
  projectId: "excelwebapp-d3a55",
  storageBucket: "excelwebapp-d3a55.firebasestorage.app",
  messagingSenderId: "251169239688",
  appId: "1:251169239688:web:320238f38d8a52e4c4253d",
  measurementId: "G-QG5MREES16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
