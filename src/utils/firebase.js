// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4UvBx9ivFE6a8nKIYM_I_KLO6nYUqujk",
  authDomain: "netflixgpt-8ba93.firebaseapp.com",
  projectId: "netflixgpt-8ba93",
  storageBucket: "netflixgpt-8ba93.appspot.com",
  messagingSenderId: "907447088797",
  appId: "1:907447088797:web:d76b9f30093e15d3d80674",
  measurementId: "G-WJ1RQC4E9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);