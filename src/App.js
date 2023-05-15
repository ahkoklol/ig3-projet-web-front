import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products, Navbar } from './components';
import Catalog from './pages/Catalog/Catalog';
import AboutUs from './pages/About us/Aboutus';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Story from './pages/Story of Lala/Story';
import Cart from './pages/Cart/Cart';
import Auth from './pages/Authentication/Authform';


const App = () => {
  return (
    <Router>
      <div className="App">
        <shopContextProdiver>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/catalog" element={<Catalog />} />
                <Route exact path="/about" element={<AboutUs />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/authentication" element={<Auth />}/>
                <Route exact path="/story" element={<Story />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </shopContextProdiver>
      </div>
    </Router>
  );
};

export default App;