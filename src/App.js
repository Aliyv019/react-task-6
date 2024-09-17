import './App.css';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Restaurants from './pages/Restaurants/Restaurants.jsx';
import Aboutus from './pages/Aboutus/Aboutus.jsx';
import Howitworks from './pages/Howitworks/Howitworks.jsx';
import Faqs from './pages/Faqs/Faqs.jsx';
import { useState } from 'react';

function App() {
  const [cartitems,setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)
  return (
    <div className="App md:p-8">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart cartitems={cartitems} cartTotal={cartTotal} />} />
          <Route path="/restaurants" element={<Restaurants cartTotal={cartTotal} setCartTotal={setCartTotal} cartitems={cartitems} setCartItems={setCartItems}/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/how-it-works" element={<Howitworks />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
