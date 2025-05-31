// firebase.jsx
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjQ8jXisqmAdbsoOq0gyY-j3OwrqOjcxc",
  authDomain: "mental-support-4a6f3.firebaseapp.com",
  databaseURL: "https://mental-support-4a6f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mental-support-4a6f3",
  storageBucket: "mental-support-4a6f3.firebasestorage.app",
  messagingSenderId: "1081962246086",
  appId: "1:1081962246086:web:7aeba0ce6f1411294b0cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { database };
