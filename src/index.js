import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as amplitude from '@amplitude/analytics-browser';

amplitude.init('5734fc9b953c896c16598e37c28d94e1',);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

