import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold font-['Playfair_Display']">
            <span className="text-[#C8B6E2]">Lorrayne</span>
            <span className="text-[#333333]"> Miranda</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" label="Início" />
            <NavLink to="/sobre" label="Sobre" />
            <NavLink to="/servicos" label="Serviços" />
            <NavLink to="/blog" label="Blog" />
            <NavLink to="/contato" label="Contato" />
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 fade-in">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" label="Início" mobile />
              <NavLink to="/sobre" label="Sobre" mobile />
              <NavLink to="/servicos" label="Serviços" mobile />
              <NavLink to="/blog" label="Blog" mobile />
              <NavLink to="/contato" label="Contato" mobile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, mobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        mobile ? 'block py-2' : ''
      } transition-colors duration-300 hover:text-[#C8B6E2] ${
        isActive 
          ? 'text-[#C8B6E2] font-medium' 
          : 'text-[#333333]'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;