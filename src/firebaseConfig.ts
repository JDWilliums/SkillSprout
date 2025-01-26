// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIkQPu5J4CKe_x-EQkyFDGjZmGVmJBRQg",
  authDomain: "ai-tutor-5a252.firebaseapp.com",
  projectId: "ai-tutor-5a252",
  storageBucket: "ai-tutor-5a252.firebasestorage.app",
  messagingSenderId: "764913899699",
  appId: "1:764913899699:web:b84dfa3b558aa26ab3f8c6",
  measurementId: "G-0J3E1DBW3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);