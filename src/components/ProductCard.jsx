import { useState } from "react";

const ProductCard = ({ product, addToCart, cartItems }) => {
  const [hover, setHover] = useState(false);
  const quantityInCart = cartItems.find(item => item.id === product.id)?.quantity || 0;

  return (
    <div
      className={`border border-gray rounded shadow-lg p-2 m-1 transition-transform transform ${hover ? "scale-110" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
        style={{ filter: hover ? "grayscale(0%)" : "grayscale(100%)" }}
          />
      <h2 className="text-lg font-semibold italic gap-2 mt-4">{product.title}</h2>
   
          <p className="text-gray-500 mt-2">{product.description.substring(0, 100)}...</p>
   
          <p className="text-xl font-bold italic mt-2"> ₹ {(product.price * 82).toFixed(0)} </p> 
      
      <button
        className="mt-2 p-2 bg-orange-400 hover:bg-orange-600 text-white rounded hover:underline hover:italic shadow-lg hover:shadow-md"
        onClick={() => addToCart(product)}
      >
        {quantityInCart > 0 ? `Added (${quantityInCart})` : "Add to Cart"}
              </button>
              
    </div>
  );
};

export default ProductCard;
