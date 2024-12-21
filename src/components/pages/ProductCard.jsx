import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const ProductCard = ({ imageUrl, title, price, description }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { 
      title, 
      price, 
      description, 
      imageUrl, 
      quantity: 1 // Initialize quantity to 1 when the product is added to the cart
    };
    addToCart(product);
    navigate("/Addtocart");
  };

  return (
    <div className="product-card border bg-gray-50 p-4 rounded">
      <img src={imageUrl} alt={title} className="rounded-xl w-full h-40 object-cover" />
      <h3 className="text-center text-2xl p-2 font-serif">{title}</h3>
      <p className="text-center">{description}</p>
      <p className="text-center text-green-500 font-bold">{price}</p>
      <div className="flex justify-center mt-4">
        <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
