// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfVo0tIfZgaYUenn9aOV8EtHhmuz2Ziws",
  authDomain: "banking-with-personal-finance.firebaseapp.com",
  projectId: "banking-with-personal-finance",
  storageBucket: "banking-with-personal-finance.firebasestorage.app",
  messagingSenderId: "88568506325",
  appId: "1:88568506325:web:25523ed7a7119f1fb77f5c",
  measurementId: "G-0SW2ZE7792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };
