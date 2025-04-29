
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-lg bg-holo-dark/40 shadow-md shadow-holo-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-orbitron font-bold holo-text"
        >
          SVS SRINIVAS
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white opacity-80 hover:opacity-100 font-medium transition-opacity duration-300 hover:text-holo-primary relative group"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-holo-blue via-holo-primary to-holo-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:bg-holo-primary/20"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`absolute top-full left-0 w-full bg-holo-dark/90 backdrop-blur-lg transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden holo-border border-t-2 border-b-2 border-x-0`}
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-white py-2 px-4 hover:bg-holo-primary/20 transition-colors duration-200 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
