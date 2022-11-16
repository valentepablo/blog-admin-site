import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAWtmOnY0b3w0j5JgwHkdv72AWE1udDdMQ',
  authDomain: 'blog-testing-b5ce4.firebaseapp.com',
  projectId: 'blog-testing-b5ce4',
  storageBucket: 'blog-testing-b5ce4.appspot.com',
  messagingSenderId: '1016433072983',
  appId: '1:1016433072983:web:e8757af6b14e08ce8f3c12',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
