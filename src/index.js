import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, history } from "react-router-dom";
import './index.css';
import App from './App';
import SignIn from './components/SignIn'
import SignInCalls from './components/SignInCalls'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="signin" element={<SignIn  />} />
      <Route path="signincalls" element={<SignInCalls  />} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();