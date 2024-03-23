import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SocialMedias from './components/SocialMedias/SocialMedias';
import HomePage from './pages/home';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <SocialMedias />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mesprojets" element={<HomePage />} />
          <Route path="/contacts" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
