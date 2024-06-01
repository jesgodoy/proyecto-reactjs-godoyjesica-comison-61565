import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDoma,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};



initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
