import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyDErkGbCmHVpz5Hl24Vg6DBkmYXJwlGd3s",
  authDomain: "tik-tok-clone-9951d.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-9951d.firebaseio.com",
  projectId: "tik-tok-clone-9951d",
  storageBucket: "tik-tok-clone-9951d.appspot.com",
  messagingSenderId: "589201918165",
  appId: "1:589201918165:web:0857053f49f68b64d07a5c",
  measurementId: "G-19VP5Q2C15",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
