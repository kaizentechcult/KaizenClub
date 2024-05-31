// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  // authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_CONFIG_DATABASE_URL,
  // projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_CONFIG_APP_ID,
  // measurementId: process.env.FIREBASE_CONFIG_MEASUREMENT_ID,
  apiKey: "AIzaSyA_P0f_tqy1ugWYBACpOnrtsSentJqDuY0",
  authDomain: "kaizen-b1af6.firebaseapp.com",
  projectId: "kaizen-b1af6",
  storageBucket: "kaizen-b1af6.appspot.com",
  messagingSenderId: "675562374944",
  appId: "1:675562374944:web:481cd4d5ec983ac53b3945",
  measurementId: "G-V88YH21W98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
