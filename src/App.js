// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './About'; 
import Home from './Home';  // Import the Home component
import logo from './images/logo.png';  // Import the logo image

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1>BerryScan</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} /> {/* Update this line */}
            <Route path="/about" element={<About />} />
            {/* Add a placeholder for Contact page */}
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h3>BerryScan's</h3>
              <p>20422 Nissouri Rd.<br />Thorndale, ON NOM 2P0<br />519.461.1416</p>
              <div className="social-icons">
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-pinterest"></i>
                <i className="fa fa-youtube"></i>
              </div>
            </div>
            <div className="footer-section">
              <h3>Flowers</h3>
              <ul>
                <li>Annuals</li>
                <li>Nursery</li>
                <li>Perennials</li>
                <li>Veggies, Herbs & Fruits</li>
                <li>Houseplants</li>
                <li>Tropicals</li>
                <li>Garden Guides</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Flavour</h3>
              <ul>
                <li>Market Report</li>
                <li>BerryScan’s Strawberries</li>
                <li>BerryScan’s Berry Retailers</li>
                <li>Hard Cider & Mead</li>
                <li>The Berry Beanery</li>
                <li>The Market</li>
                <li>Recipes</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Fun</h3>
              <ul>
                <li>Events & Workshops</li>
                <li>Map of the Greenhouse</li>
                <li>Gift Cards</li>
                <li>My BerryScan’s Hub</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>About Us</h3>
              <ul>
                <li>Working at BerryScan’s</li>
                <li>Sustainability</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BerryScan's All Rights Reserved</p>
            <p>Website Terms of Use &middot; Refunds, Exchanges and Guarantees &middot; Visit Us</p>
            <p>Web Design & Digital Marketing by tbk</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
