import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products, Navbar } from './components';
import Catalog from './pages/Catalog/Catalog';
import AboutUs from './pages/About us/Aboutus';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Story from './pages/Story of Lala/Story';
import Cart from './pages/Cart/Cart';
import Auth from './pages/Register/Register';
import Login from './pages/Login/Login';


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
            <Route exact path="/authentification" element={<Auth />}/>
            <Route exact path="/story" element={<Story />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;