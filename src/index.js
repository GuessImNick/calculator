import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './calculator/Calculator';
import Header from './header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Calculator />
  </React.StrictMode>
);