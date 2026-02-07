// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import authentication service
import { getFirestore } from "firebase/firestore"; // Import Firestore service
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "community-hub-2d06b.firebaseapp.com",
    projectId: "community-hub-2d06b",
    storageBucket: "community-hub-2d06b.firebasestorage.app",
    messagingSenderId: "325398207191",
    appId: "1:325398207191:web:4fe3f8832599bce383ee92",
    measurementId: "G-KS1104WMDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize authentication
const db = getFirestore(app); // Initialize Firestore

export { app, analytics, auth, db };