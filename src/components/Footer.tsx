import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-secondary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-400 to-accent-400 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img className="h-12 w-auto mr-4" src="/assets/images/logo-fvkfm.jpg" alt="FVKFM Logo" />
              <div>
                <h3 className="text-2xl font-bold text-white">FVKFM</h3>
                <p className="text-accent-300 text-sm font-medium">Église Chrétienne</p>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed max-w-md">
              L'Église FVKFM s'engage à partager l'amour de Dieu et à servir la communauté 
              à travers la prière, l'enseignement biblique et l'action sociale.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors duration-200 group">
                <FaFacebook className="text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200 group">
                <FaTwitter className="text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200 group">
                <FaYoutube className="text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-400 hover:to-pink-400 transition-all duration-200 group">
                <FaInstagram className="text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group">
                <FaLinkedin className="text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              {t('footer_quick_links')}
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-accent-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-accent-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  {t('nav_services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-accent-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  {t('nav_contact')}
                </Link>
              </li>
              <li>
                <Link to="/donations" className="text-secondary-300 hover:text-accent-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  {t('nav_donations')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-secondary-300 hover:text-accent-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  {t('nav_gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              {t('footer_newsletter_signup')}
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent-500 rounded-full"></div>
            </h3>
            <p className="text-secondary-300 mb-4 text-sm">
              Restez informé de nos dernières actualités et événements.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('footer_newsletter_placeholder')}
                className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-500 hover:to-accent-600 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-medium"
              >
                {t('footer_subscribe_button')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-secondary-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-secondary-400 text-sm">
                &copy; {new Date().getFullYear()} {t('footer_copyright')}
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/legal" className="text-secondary-400 hover:text-accent-300 transition-colors duration-200">
                {t('footer_legal_mentions')}
              </Link>
              <Link to="/privacy" className="text-secondary-400 hover:text-accent-300 transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-secondary-400 hover:text-accent-300 transition-colors duration-200">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 