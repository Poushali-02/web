import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    // First navigate to home if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Location', id: 'location' },
    { label: 'Specialties', id: 'specialties' },
    { label: 'Menu', id: 'menu' },
  ];

  return (
    <nav className="bg-blend-color-burn border-b border-yellow-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-slate-950 font-bold text-xl">LD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-amber-50 font-bold text-xl">
                Little <span className="text-yellow-500">Darjeeling</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-amber-50 hover:text-yellow-500 transition-colors duration-300 font-medium cursor-pointer bg-none border-none"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/order"
              className="bg-yellow-500 text-slate-950 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Order Now
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-10 h-1 bg-yellow-500 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-yellow-500/20 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-amber-50 hover:text-yellow-500 transition-colors duration-300 font-medium px-2 py-2 bg-none border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/order"
              className="block bg-yellow-500 text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300 text-center"
              onClick={closeMenu}
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
