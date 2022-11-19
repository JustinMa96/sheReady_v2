import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZnvp1Uddv0dfAveRFuB903w6NSzfidhQ",
  authDomain: "sheready-27981.firebaseapp.com",
  projectId: "sheready-27981",
  storageBucket: "sheready-27981.appspot.com",
  messagingSenderId: "88137407235",
  appId: "1:88137407235:web:ab9c12763c6042b71b2736",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = getAuth(app);
export const db = getFirestore(app);
