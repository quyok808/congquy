import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBiQePURnidQwwG4GHj1Q1w_HA053lGnq0",
  authDomain: "qrcodegen-ee442.firebaseapp.com",
  databaseURL:
    "https://qrcodegen-ee442-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qrcodegen-ee442",
  storageBucket: "qrcodegen-ee442.firebasestorage.app",
  messagingSenderId: "169592556404",
  appId: "1:169592556404:web:4a5d5a0135d12956e83a21",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
