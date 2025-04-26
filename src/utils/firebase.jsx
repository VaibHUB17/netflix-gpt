
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB729yz8hCuGYWfWFUU8axpzuYtKw4vzzE",
  authDomain: "netflix-gpt-954fc.firebaseapp.com",
  projectId: "netflix-gpt-954fc",
  storageBucket: "netflix-gpt-954fc.firebasestorage.app",
  messagingSenderId: "548709894075",
  appId: "1:548709894075:web:e3f34183d93d7c97a8a69e",
  measurementId: "G-PB3NEF9ZLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()