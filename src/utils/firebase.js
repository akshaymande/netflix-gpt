// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6AzD4DzIOjExD84nmFHXgXqeZQMgXXGo",
  authDomain: "netflix-gpt-1b7b4.firebaseapp.com",
  projectId: "netflix-gpt-1b7b4",
  storageBucket: "netflix-gpt-1b7b4.appspot.com",
  messagingSenderId: "102343944727",
  appId: "1:102343944727:web:cedcfd6e825c6efb924a52",
  measurementId: "G-4TC8RDPR84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
