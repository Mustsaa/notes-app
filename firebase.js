
import { initializeApp } from "firebase/app";
import { collection, Firestore, getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBGOCbW-BayNHOl7nn_bySnlmMLrr2ufEA",
  authDomain: "react-notes-863b1.firebaseapp.com",
  projectId: "react-notes-863b1",
  storageBucket: "react-notes-863b1.appspot.com",
  messagingSenderId: "695125340620",
  appId: "1:695125340620:web:487ee2f77ce7ed1e0eed69"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const noteCollection = collection(db, "notes");