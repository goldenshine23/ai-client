// index.js - Entry point for React App
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create and render root React component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import reportWebVitals from './reportWebVitals';

// Log metrics in the console
reportWebVitals(console.log);
