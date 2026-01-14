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
    <nav className="bg-blend-color-burn border-b border-yellow-500/20 shadow-lg w-full">
      <div className="w-full mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-10">
          {/* Desktop Navigation */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-slate-950 font-bold text-xl">LD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-amber-50 font-bold text-xl hover:font-thin">
                Little <span className="text-yellow-500 font-thin hover:font-bold">Darjeeling</span>
              </h1>
            </div>
          </Link>

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
              className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div 
          className={`fixed inset-0 bg-restaurant-dark/95 backdrop-blur-sm z-90 md:hidden flex items-center justify-center transition-all duration-500 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="text-center space-y-8 px-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-amber-50 hover:text-yellow-500 transition-all duration-300 font-display text-3xl font-semibold cursor-pointer bg-none border-none transform hover:scale-110 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 0.1}s` : '0s',
                  padding: '1rem'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Close button */}
          <button
            onClick={closeMenu}
            className={`absolute top-6 right-6 text-yellow-500 hover:text-amber-50 transition-all duration-300 ${
              isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
            }`}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
