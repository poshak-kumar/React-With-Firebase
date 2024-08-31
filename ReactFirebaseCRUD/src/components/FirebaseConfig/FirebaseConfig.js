import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEqGDHwIGRkjKIG3BjqrREtZsNNi1dh4s",
  authDomain: "tma-1-ecbde.firebaseapp.com",
  databaseURL: "https://tma-1-ecbde-default-rtdb.firebaseio.com",
  projectId: "tma-1-ecbde",
  storageBucket: "tma-1-ecbde.appspot.com",
  messagingSenderId: "558204099634",
  appId: "1:558204099634:web:1caf1df215509c0f0a702b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Database
export const database = getDatabase(app);