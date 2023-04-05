import firebase from "firebase/app";
import 'firebase/firestore'; 
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvmgLJsf3JWNBg0_jJ8wNATwsFUtPKh4s",
    authDomain: "react-chess-493c8.firebaseapp.com",
    projectId: "react-chess-493c8",
    storageBucket: "react-chess-493c8.appspot.com",
    messagingSenderId: "953921751512",
    appId: "1:953921751512:web:d14ac797a8a5d0af728aad"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase