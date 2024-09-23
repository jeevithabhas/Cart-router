import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" mx-auto shadow-lg hover:cursor-pointer rounded bg-gradient-to-r from-orange-50 to-orange-100 p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
          <span className="text-orange-300 text-4xl italic font-serif hover:underline font-bold hover:text-orange-500 hover:uppercase">Style Spot...</span>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/" className="text-lime-500 text-2xl hover:italic shadow-lg p-1 mx-4">Home 🏠</Link>
          <Link to="/cart" className="text-lime-500 text-2xl hover:italic shadow-lg p-1 mx-4">
            Cart 🛒 ({cartCount})
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-lime-500">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          <Link to="/" className="text-white block py-2">Home</Link>
          <Link to="/cart" className="text-white block py-2">Cart ({cartCount})</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
