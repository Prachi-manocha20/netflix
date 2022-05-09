// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDpofs-v2TfwT9v5tsCH_eW-7nykkVRMso",
  authDomain: "netflix-clone-f82c2.firebaseapp.com",
  projectId: "netflix-clone-f82c2",
  storageBucket: "netflix-clone-f82c2.appspot.com",
  messagingSenderId: "171225260341",
  appId: "1:171225260341:web:b3730804efcbc897026c7c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
