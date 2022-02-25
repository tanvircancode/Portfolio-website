import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
