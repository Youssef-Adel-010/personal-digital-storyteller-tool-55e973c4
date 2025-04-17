
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-gradient">
          <a href="#home" className="hover-underline font-display">YA</a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item} className="capitalize">
              <button 
                onClick={() => handleNavigation(item)}
                className="hover-underline font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Theme Toggle and Resume Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full transition-transform hover:scale-110 duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <Button variant="outline" className="glow-effect transition-all duration-300" asChild>
            <a href="#" download="youssef-adel-resume.pdf">Resume</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <button 
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 py-6 border-t border-border/50 animate-slide-down">
          <ul className="flex flex-col space-y-6 px-6">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item} className="capitalize">
                <button 
                  onClick={() => handleNavigation(item)}
                  className="hover-underline font-medium text-foreground/80 hover:text-foreground"
                >
                  {item}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="outline" className="glow-effect w-full" asChild>
                <a href="#" download="youssef-adel-resume.pdf">Resume</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
