// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeBIzjg0E6D4CMyUsDDG52GRevWghZl6c",
  authDomain: "quick-notes-16edf.firebaseapp.com",
  projectId: "quick-notes-16edf",
  storageBucket: "quick-notes-16edf.firebasestorage.app",
  messagingSenderId: "304271199405",
  appId: "1:304271199405:web:6b307acb6db17a6ef38a24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getFirestore(app);

export default app;