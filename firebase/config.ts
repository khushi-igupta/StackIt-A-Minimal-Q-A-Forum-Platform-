
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// User's provided Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDENSl9eDSk6Y5VjIhmLkhBhx1CgPg3yiU",
  authDomain: "stackit-97293.firebaseapp.com",
  projectId: "stackit-97293",
  storageBucket: "stackit-97293.appspot.com",
  messagingSenderId: "289433696343",
  appId: "1:289433696343:web:52e9edeb1b3d88f9a88b12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);