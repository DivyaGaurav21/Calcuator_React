// import react for supprting jsx 
import React from 'react';
// import reactDOM for create root where you render App component by render method 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

