import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk2qYu3Kbfz_kCBHuR0bmmgUbUtTYbYhY",
  authDomain: "react-notes-a0d5d.firebaseapp.com",
  projectId: "react-notes-a0d5d",
  storageBucket: "react-notes-a0d5d.appspot.com",
  messagingSenderId: "56377288715",
  appId: "1:56377288715:web:35a2de33db4e68511dbf0e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");

export { db, notesCollection };
