import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDugTd6v79Oo9cNU4ds2PThRh2xbmGyz0o",
  authDomain: "cart-1d285.firebaseapp.com",
  projectId: "cart-1d285",
  storageBucket: "cart-1d285.appspot.com",
  messagingSenderId: "1081214064423",
  appId: "1:1081214064423:web:c871f681503ae0d5c5fb02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //create instance of firebase access and export it 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
