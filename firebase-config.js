// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyACboSwJdqP3tK9iz1DNWWIj6n5cRbgTnQ",
  authDomain: "reactnative-96096.firebaseapp.com",
  projectId: "reactnative-96096",
  storageBucket: "reactnative-96096.appspot.com",
  messagingSenderId: "284197314255",
  appId: "1:284197314255:web:e47a0d55c4100ba755e1ba",
  databaseURL: "https://reactnative-96096-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
