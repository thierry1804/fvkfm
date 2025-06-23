import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/about', label: t('nav_about') },
    { href: '/services', label: t('nav_services') },
    { href: '/donations', label: t('nav_donations') },
    { href: '/gallery', label: t('nav_gallery') },
    { href: '/contact', label: t('nav_contact') },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
                  src="/assets/images/logo-fvkfm.jpg" 
                  alt="FVKFM Logo" 
                />
                <div className="absolute inset-0 bg-accent-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-secondary-800">FVKFM</h1>
                <p className="text-xs text-accent-600 font-medium">Église Chrétienne</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  isActiveLink(link.href)
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-secondary-600 hover:text-accent-600 hover:bg-accent-50'
                }`}
              >
                {link.label}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-4/5 ${
                  isActiveLink(link.href) ? 'w-4/5' : ''
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-secondary-600 hover:text-accent-600 hover:bg-accent-50 transition-colors duration-200"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isActiveLink(link.href)
                      ? 'text-accent-600 bg-accent-50'
                      : 'text-secondary-600 hover:text-accent-600 hover:bg-accent-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-secondary-200">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
