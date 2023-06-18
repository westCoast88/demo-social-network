import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from 'react-dom/client';
import MainApp from './App';
// import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
);


reportWebVitals();
