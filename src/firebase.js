// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVok0dd7P8QoVSc6g2FYmfklg3KFxM-2I",
  authDomain: "dvt--auth.firebaseapp.com",
  projectId: "dvt--auth",
  storageBucket: "dvt--auth.appspot.com",
  messagingSenderId: "749660803612",
  appId: "1:749660803612:web:4bd58c7ea8ab565eb185d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
