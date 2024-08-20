// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHJ2aGgBti5_Wa4CK_S-6Sg1YS2iAyDfk",
  authDomain: "financex-160302.firebaseapp.com",
  projectId: "financex-160302",
  storageBucket: "financex-160302.appspot.com",
  messagingSenderId: "769965944542",
  appId: "1:769965944542:web:1281b1441d8d7d9f805c4f",
  measurementId: "G-6K8QBHV6JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };