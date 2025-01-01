// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASjc8JhH_E0qAoOqSZRdi9KAZYbdw38wk",
  authDomain: "routing-app-15500.firebaseapp.com",
  projectId: "routing-app-15500",
  storageBucket: "routing-app-15500.firebasestorage.app",
  messagingSenderId: "708436516160",
  appId: "1:708436516160:web:63d66c9f534b1ac25aeea5",
  measurementId: "G-09S4G4072M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth= getAuth(app);
export default app;