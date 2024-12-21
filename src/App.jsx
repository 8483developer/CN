import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/pages/LoginPage';
import Homepage from 'src/components/pages/Homepage';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import AddToCartPage from './components/pages/Addtocart';
import ProductCard from './components/pages/ProductCard';
import CheckoutPage from './components/pages/checkoutpage';
import ContactUs from './components/pages/ContactUs';
import RoomInspiration from './components/pages/RoomInspiration';
import Categories from './components/Category';
import AccountPage from './components/pages/Account';
import { CartProvider } from "./components/CartContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize the state based on localStorage value
    const storedLoginState = localStorage.getItem('isLoggedIn');
    console.log('LocalStorage isLoggedIn:', storedLoginState);  // Log to see localStorage value

    return storedLoginState === 'true';
  });

  // Update the state whenever `isLoggedIn` changes
  useEffect(() => {
    console.log("App isLoggedIn state:", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    console.log('Login successful, set isLoggedIn to true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    console.log('Logout successful, set isLoggedIn to false');
  };

  return (
    <Router>
      <CartProvider>
        {/* Only show Navbar if the user is logged in */}
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        
        <Routes>
          {/* LoginPage will render if user is not logged in */}
          <Route
            path="/"
            element={!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/homepage" />}
          />
          
          {/* Homepage or other protected routes only render if the user is logged in */}
          <Route
            path="/homepage"
            element={isLoggedIn ? <Homepage /> : <Navigate to="/" />}
          />
          
          <Route
            path="/Addtocart"
            element={isLoggedIn ? <AddToCartPage /> : <Navigate to="/" />}
          />
          
          <Route
            path="/product-card"
            element={isLoggedIn ? <ProductCard /> : <Navigate to="/" />}
          />
          
          <Route
            path="/checkout"
            element={isLoggedIn ? <CheckoutPage /> : <Navigate to="/" />}
          />
          
          <Route
            path="/RoomInspiration"
            element={isLoggedIn ? <RoomInspiration /> : <Navigate to="/" />}
          />
          
          <Route
            path="/Categories"
            element={isLoggedIn ? <Categories /> : <Navigate to="/" />}
          />
          
          <Route
            path="/Account"
            element={isLoggedIn ? <AccountPage /> : <Navigate to="/" />}
          />
          
          <Route
            path="/ContactUs"
            element={isLoggedIn ? <ContactUs /> : <Navigate to="/" />}
          />
        </Routes>

        {/* Footer only shows if user is logged in */}
        {isLoggedIn && <Footer />}
      </CartProvider>
    </Router>
  );
};

export default App;
