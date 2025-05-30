import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/src/assets/Logo nova.jpg" 
              alt="Lorrayne Miranda" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-[#333333]">Lorrayne Miranda</span>
              <span className="text-sm text-[#666666]">Psicóloga Clínica</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label={t('nav.home')} />
            <NavLink to="/sobre" label={t('nav.about')} />
            <NavLink to="/servicos" label={t('nav.services')} />
            <NavLink to="/blog" label={t('nav.blog')} />
            <NavLink to="/contato" label={t('nav.contact')} />
            
            {/* Language Selector */}
            <button
              onClick={() => changeLanguage('pt-BR')}
              className="flex items-center text-[#333333] hover:text-[#C8B6E2] transition-colors"
            >
              <Globe size={20} className="mr-1" />
              PT-BR
            </button>
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
              <NavLink to="/" label={t('nav.home')} mobile />
              <NavLink to="/sobre" label={t('nav.about')} mobile />
              <NavLink to="/servicos" label={t('nav.services')} mobile />
              <NavLink to="/blog" label={t('nav.blog')} mobile />
              <NavLink to="/contato" label={t('nav.contact')} mobile />
              
              {/* Mobile Language Selector */}
              <button
                onClick={() => changeLanguage('pt-BR')}
                className="flex items-center text-[#333333] hover:text-[#C8B6E2] transition-colors py-2"
              >
                <Globe size={20} className="mr-2" />
                PT-BR
              </button>
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