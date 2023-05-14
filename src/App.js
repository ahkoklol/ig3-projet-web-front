import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products, Navbar } from './components';
import Catalog from './pages/Catalog/Catalog';
import AboutUs from './pages/About us/Aboutus';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;