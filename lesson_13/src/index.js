import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Example01 from './pages/Example01';
import Example02 from './pages/Example02';
import Example03 from './pages/Example03';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Example03/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
