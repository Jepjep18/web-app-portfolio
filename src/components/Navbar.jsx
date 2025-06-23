import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm' : 'bg-white dark:bg-gray-900'}`}>
            <div className={`w-full h-1 transition-all duration-300 ${scrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-transparent'}`} />
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                    Jefferson Arnado
                </h1>

                {/* Desktop Menu + Dark Toggle */}
                <div className="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">
                    <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">About</a>
                    <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Projects</a>
                    <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Contact</a>

                    {/* Dark Mode Toggle (desktop) */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Hamburger Icon (mobile) */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden ${scrolled ? 'bg-white/95 dark:bg-gray-900/95' : 'bg-white dark:bg-gray-900'} border-t border-gray-200 dark:border-gray-700 px-4 pb-6 shadow-lg transition-all duration-200 backdrop-blur-md`}>
                    <ul className="flex flex-col space-y-4 text-base font-medium pt-4 text-gray-900 dark:text-gray-100">
                        <li><a href="#about" onClick={closeMenu} className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">About</a></li>
                        <li><a href="#projects" onClick={closeMenu} className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu} className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Contact</a></li>
                        {/* Dark Mode Toggle (mobile) */}
                        <li>
                            <button
                                onClick={() => {
                                    toggleDarkMode();
                                    closeMenu();
                                }}
                                className="flex items-center gap-2 p-2 mt-2 w-full rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                <span>Toggle Theme</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;