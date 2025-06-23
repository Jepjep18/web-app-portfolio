import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can install lucide-react or use any icon lib

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b border-gray-200">
      <div className="w-full h-1" />
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Jefferson Arnado</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
