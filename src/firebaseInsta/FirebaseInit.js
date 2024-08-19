// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =fb.initializeApp( {
  apiKey: "AIzaSyCajl4p_6DPpRGp3b56sO0wKkENTU9unL0",
  authDomain: "instagram-clone-react-c5bbf.firebaseapp.com",
  projectId: "instagram-clone-react-c5bbf",
  storageBucket: "instagram-clone-react-c5bbf.appspot.com",
  messagingSenderId: "240572809286",
  appId: "1:240572809286:web:6d35fade84b13b50284a47",
  measurementId: "G-26SR3GJE4K"
});

// Initialize Firebase


// const app  = initializeApp(firebaseApp);
const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };
