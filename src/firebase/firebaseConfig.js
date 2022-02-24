// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrdwtHC8pZNVWDPMR2DuBEnt7zKZVfbWE",
  authDomain: "yclothing-397c6.firebaseapp.com",
  projectId: "yclothing-397c6",
  storageBucket: "yclothing-397c6.appspot.com",
  messagingSenderId: "645187969865",
  appId: "1:645187969865:web:4e81108c12a3a62248b098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);