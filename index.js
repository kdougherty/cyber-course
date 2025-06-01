import React from 'react';
import ReactDOM from 'react-dom/client';
import CybersecurityModule from './cybersecurity-learning-module-v2';
import './index.css';

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <CybersecurityModule />
  </React.StrictMode>
);

// Optional: Add service worker for offline functionality (common in Amplify apps)
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }