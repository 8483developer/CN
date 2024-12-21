import React, { createContext, useContext, useState, useEffect } from "react";

// Create a CartContext to share cart state across components
const CartContext = createContext();

// CartProvider component to wrap the app and provide cart context
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage, or default to an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save the cart state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product is already in cart
      const existingProductIndex = prevCart.findIndex(
        (item) => item.title === product.title
      );

      if (existingProductIndex !== -1) {
        // Product already in cart, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // New product, add to cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update the quantity of a product
  const updateQuantity = (product, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.title === product.title
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );
      return updatedCart;
    });
  };

  // Remove a product from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== product.title));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
