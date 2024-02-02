
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsy9uVN1cYyPcAxu7oPeIZYetgnN8pLA8",
  authDomain: "krafft-37167.firebaseapp.com",
  projectId: "krafft-37167",
  storageBucket: "krafft-37167.appspot.com",
  messagingSenderId: "425468271921",
  appId: "1:425468271921:web:3961d61049cf023d30e410",
  measurementId: "G-55V02WWKEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);