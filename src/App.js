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
          <Route path="/portfolio/" element={<HomePage />} />
          <Route path="/portfolio/mesprojets" element={<HomePage />} />
          <Route path="/portfolio/contacts" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
