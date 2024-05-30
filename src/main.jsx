import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqmlW12SSRXUBfPPuT47Z2EG3MxjxX1mA",
  authDomain: "gamerssquad-coderhouse-6-18e22.firebaseapp.com",
  projectId: "gamerssquad-coderhouse-6-18e22",
  storageBucket: "gamerssquad-coderhouse-6-18e22.appspot.com",
  messagingSenderId: "912973566468",
  appId: "1:912973566468:web:cbee752183a2096562db51"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
