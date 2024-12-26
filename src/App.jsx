import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/pages/LoginPage';
import Homepage from './components/pages/Homepage';
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
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Start with null to handle loading state
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    console.log('LocalStorage isLoggedIn:', storedLoginState);

    // Set the state based on the stored value
    setIsLoggedIn(storedLoginState === 'true');

    // Once the login state is set, stop loading
    setLoading(false);
  }, []); // Empty array ensures this runs only once on mount

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

  if (loading) {
    return <div>Loading...</div>; // Show loading screen while checking login state
  }

  return (
    <Router>
      <CartProvider>
        {isLoggedIn && <Navbar onLogout={handleLogout} />}

        <Routes>
          {console.log('Rendering Routes, isLoggedIn:', isLoggedIn)}

          <Route
            path="/"
            element={isLoggedIn === false || isLoggedIn === null ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/homepage" />}
          />

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

        {isLoggedIn && <Footer />}
      </CartProvider>
    </Router>
  );
};

export default App;