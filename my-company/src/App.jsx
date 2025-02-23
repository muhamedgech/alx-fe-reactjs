// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      {/* Navigation Bar - Visible on all pages */}
      <Navbar />

      {/* Defining Routes for Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
