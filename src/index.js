import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { HashRouter, Router } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SocialMedias from './components/SocialMedias/SocialMedias';
import HomePage from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <SocialMedias />
    <HashRouter>
      <Routes>
        <Route path="/mesprojets" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      {/* <Router> */}
      {/* <App /> */}
      {/* </Router> */}
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
