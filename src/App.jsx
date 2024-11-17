import { useState } from 'react';
import './App.css';
import LandingPage1 from './screens/lending2/LandingPage';
import LandingPage2 from './screens/lending1/lendingPage1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<LandingPage2 />} />
          <Route path="/page1" element={<LandingPage1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
