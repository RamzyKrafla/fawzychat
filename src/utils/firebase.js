import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBARA08Y7xD58MkNwlJHTClIagPUP8reGo",
  authDomain: "fawzychat-a3bf2.firebaseapp.com",
  projectId: "fawzychat-a3bf2",
  storageBucket: "fawzychat-a3bf2.firebasestorage.app",
  messagingSenderId: "301051370403",
  appId: "1:301051370403:web:84ca4a7a846832489d5816",
  measurementId: "G-1BHRK3M39Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
