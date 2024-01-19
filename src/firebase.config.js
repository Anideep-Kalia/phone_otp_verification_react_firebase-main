// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0yIUtBK48RkGTVtCeLEYZYs0eHFs7ULE",
  authDomain: "whatsappclone-d6ab1.firebaseapp.com",
  projectId: "whatsappclone-d6ab1",
  storageBucket: "whatsappclone-d6ab1.appspot.com",
  messagingSenderId: "733647548417",
  appId: "1:733647548417:web:9f6efe6689c35225741000",
  measurementId: "G-5PR5CEZL3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);