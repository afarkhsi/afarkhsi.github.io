// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SocialMedias from './components/SocialMedias/SocialMedias';
import HomePage from './pages/home';

function App() {
  return (
    <>
      {/* <Router> */}
      <HomePage />
      {/* <Routes>
        <Route path="/mesprojets" element={<HomePage />} />
        <Route path="/contacts" element={<HomePage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes> */}
      {/* 
      // <Routes>
      //   <Route path="/portfolio/" element={<HomePage />} />
      //   <Route path="/portfolio/mesprojets" element={<HomePage />} />
      //   <Route path="/portfolio/contacts" element={<HomePage />} />
      // </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
