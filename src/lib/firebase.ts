// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "jvg-engenharia",
  appId: "1:338805212036:web:3347de541598b180f493d1",
  storageBucket: "jvg-engenharia.firebasestorage.app",
  apiKey: "AIzaSyA5JcJ56h9XSky5KmuBDGw0-SO0v6zsjpg",
  authDomain: "jvg-engenharia.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "338805212036"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };