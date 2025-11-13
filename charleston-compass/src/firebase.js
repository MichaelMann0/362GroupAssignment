// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMdsIVfk1sEWFs6UntIS4yLTDCi5KJMLI",
  authDomain: "charleston-compass.firebaseapp.com",
  projectId: "charleston-compass",
  storageBucket: "charleston-compass.firebasestorage.app",
  messagingSenderId: "269214884229",
  appId: "1:269214884229:web:7f1c57d302ce234da7a4ec",
  measurementId: "G-5EGQKHDB9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (optional)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export default app;
export { analytics };