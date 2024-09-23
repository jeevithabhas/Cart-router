import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart, cartItems, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
      {products.map((product) => (
        <ProductCard
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          cartItems={cartItems}
          removeFromCart={removeFromCart} 
          
        />
      ))}
    </div>
  );
};

export default ProductList;
