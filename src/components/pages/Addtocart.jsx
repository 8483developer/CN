import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const AddToCartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Function to clean and parse price
  const parsePrice = (price) => {
    // If the price is a number, return it as is
    if (typeof price === 'number') {
      return price;
    }

    // If the price is a string, clean it and parse it to float
    if (typeof price === 'string') {
      const cleanedPrice = price.replace(/[^0-9.-]+/g, "");
      const parsedPrice = parseFloat(cleanedPrice);
      return isNaN(parsedPrice) ? 0 : parsedPrice;
    }

    // Return 0 if price is neither a number nor a string
    return 0;
  };

  // Function to update the quantity of a product
  const handleQuantityChange = (product, delta) => {
    updateQuantity(product, delta); // Update quantity
  };

  // Function to remove an item from the cart
  const handleRemove = (product) => {
    removeFromCart(product); // Remove item
  };

  // Calculate total amount
  const calculateTotalAmount = (cartItems = []) => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.price);
      return total + price * item.quantity;
    }, 0);
  };

  // Handle proceeding to checkout
  const handleProceedToCheckout = () => {
    const totalAmount = calculateTotalAmount(cart);
    if (isNaN(totalAmount) || totalAmount <= 0) {
      alert("Invalid total amount. Please check your cart.");
    } else {
      navigate("/checkout", { state: { totalAmount } });
    }
  };

  const totalAmount = calculateTotalAmount(cart);

  return (
    <div className="cart-page max-w-4xl mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((product, index) => (
            <div key={index} className="cart-item border p-4 rounded-lg shadow-lg mb-4 flex flex-col sm:flex-row items-center sm:items-start">
              <img src={product.imageUrl} alt={product.title} className="w-full sm:w-32 h-32 object-cover rounded mb-4 sm:mb-0 sm:mr-4" />
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-gray-500">Price: ₹{parsePrice(product.price).toFixed(2)}</p>
                <p className="text-gray-500">Quantity: {product.quantity || 1}</p>
                <div className="flex space-x-2 mt-4">
                  <button onClick={() => handleQuantityChange(product, -1)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">-</button>
                  <button onClick={() => handleQuantityChange(product, 1)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">+</button>
                  <button onClick={() => handleRemove(product)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="total-amount text-right mb-6">
            <h3 className="text-xl font-semibold">Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          </div>
          <div className="checkout-button text-center">
            <button onClick={handleProceedToCheckout} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Proceed to Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default AddToCartPage;
