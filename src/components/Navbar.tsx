
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl">
          <a href="#home" className="hover-underline">Portfolio</a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item} className="capitalize">
              <button 
                onClick={() => handleNavigation(item)}
                className="hover-underline font-medium"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <ul className="flex flex-col space-y-4 px-6">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item} className="capitalize">
                <button 
                  onClick={() => handleNavigation(item)}
                  className="hover-underline font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
