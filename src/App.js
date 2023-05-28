import React, { useState } from 'react';
import Axios from 'axios';
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
import Checkout from './pages/Checkout/Checkout';
import ProductID1 from './pages/ProductsID/id1';
import ProductID2 from './pages/ProductsID/id2';
import ProductID3 from './pages/ProductsID/id3';
import ProductID4 from './pages/ProductsID/id4';
import ProductID5 from './pages/ProductsID/id5';
import ProductID6 from './pages/ProductsID/id6';
import Refund from './pages/Refund policy/Refund';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';


const App = () => {

  

  /*

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8800/products')
      .then(response => {
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        setError("Error");
        if (error.response && error.response.status === 404) {
          setError('404 Resource not found');
        } else {
          setError('Unable to fetch data from server');
        }
        console.log(error);
      });
  }, []);

  */
  const { products } = Products;
  const [ cartItems, setCartItems ] = useState([]);

  const onAdd = (product) => {
    // Add to cart logic goes here
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Toast />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/catalog" element={<Catalog />} onAdd={onAdd} products={products} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/register" element={<Auth />}/>
            <Route exact path="/story" element={<Story />} />
            <Route exact path="/cart" element={<Cart />} onAdd={onAdd} cartItems={cartItems}/>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/products/1" element={<ProductID1 />} />
            <Route exact path="/products/2" element={<ProductID2 />} />
            <Route exact path="/products/3" element={<ProductID3 />} />
            <Route exact path="/products/4" element={<ProductID4 />} />
            <Route exact path="/products/5" element={<ProductID5 />} />
            <Route exact path="/products/6" element={<ProductID6 />} />
            <Route exact path="/refund" element={<Refund />} />
            
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;