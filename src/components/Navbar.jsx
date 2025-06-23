const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b border-gray-200">
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Jefferson Arnado</h1>
        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
