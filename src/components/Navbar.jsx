import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" mx-auto shadow-lg hover:cursor-pointer rounded bg-gradient-to-r from-orange-50 to-orange-100 p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-orange-300 text-4xl italic font-serif hover:underline font-bold hover:text-orange-500 hover:uppercase">Style Spot...</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-lime-500 text-2xl hover:italic shadow-lg p-1 mx-4">🏠 Home</Link>
          <Link to="/cart" className="text-lime-500 text-2xl hover:italic shadow-lg p-1 mx-4">
            🛒 Cart ({cartCount})
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gray-300 text-xl focus:outline-none"
          >
            Menu
          </button>
        </div>
      </div>
      
      
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2">
          <Link to="/" className="text-orange-800 text-xl hover:bg-orange-600" onClick={toggleMenu}>
            🏠 Home
          </Link>
          <Link to="/cart" className="text-orange-800 text-xl hover:bg-orange-600" onClick={toggleMenu}>
            🛒 Cart ({cartItemCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
