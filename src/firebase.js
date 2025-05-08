// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeJntn40p7yvp1d77raiMW3S_1Mw1dN7Y",
  authDomain: "finance-tracker-app-1128c.firebaseapp.com",
  projectId: "finance-tracker-app-1128c",
  storageBucket: "finance-tracker-app-1128c.appspot.com",
  messagingSenderId: "90641179227",
  appId: "1:90641179227:web:3d4a0e6af98ed3bce7d57e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };