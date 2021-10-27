import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1k-Fa5tayycGVS8_HF_obK_N9-yQHRmo",
    authDomain: "e-clone-48291.firebaseapp.com",
    projectId: "e-clone-48291",
    storageBucket: "e-clone-48291.appspot.com",
    messagingSenderId: "92654298043",
    appId: "1:92654298043:web:57cca242cdeb047e50da9e",
    measurementId: "G-NR8XZ5SNHZ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };