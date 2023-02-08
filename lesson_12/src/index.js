import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Example01 from './useRef/Example01';
import Example02 from './useRef/Example02';
import Example03 from './useRef/Example03';
import Example04 from './useRef/Example04';
import Example05 from './memo/Example05';
import Example06 from './useMemo/Example06';
import MindxExample from './memo/MindxExample';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Example05/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
