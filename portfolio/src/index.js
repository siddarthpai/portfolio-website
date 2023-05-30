import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './homepage/App';
import Contact from './contact/contact'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
