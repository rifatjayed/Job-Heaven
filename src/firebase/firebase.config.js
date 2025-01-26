// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzrpOVd8X48Z7PxOaZ8gHkRGQJOYEuW1c",
  authDomain: "job-portal-75c7b.firebaseapp.com",
  projectId: "job-portal-75c7b",
  storageBucket: "job-portal-75c7b.firebasestorage.app",
  messagingSenderId: "759785235440",
  appId: "1:759785235440:web:c3b4528426731631043335",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
