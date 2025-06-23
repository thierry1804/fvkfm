import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

const flags: { [key: string]: JSX.Element } = {
  en: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-auto rounded-sm">
      <rect width="5" height="3" fill="#00247d"/>
      <path d="M0,0 L5,3 M5,0 L0,3" stroke="#fff" strokeWidth=".6"/>
      <path d="M0,0 L5,3 M5,0 L0,3" stroke="#cf142b" strokeWidth=".4"/>
      <path d="M2.5,0 V3 M0,1.5 H5" stroke="#fff" strokeWidth=".2"/>
      <path d="M2.5,0 V3 M0,1.5 H5" stroke="#cf142b" strokeWidth=".2"/>
    </svg>
  ),
  fr: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-auto rounded-sm">
      <rect width="3" height="2" fill="#fff"/>
      <rect width="2" height="2" fill="#002395"/>
      <rect width="1" height="2" fill="#ed2939"/>
    </svg>
  ),
  mg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-auto rounded-sm">
      <rect width="3" height="2" fill="#007e3a"/>
      <rect width="3" height="1" fill="#fc3d32"/>
      <rect width="1" height="2" fill="#fff"/>
    </svg>
  ),
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'mg', name: 'Malagasy' },
  ];

  const selectedLanguage = languages.find(lang => lang.code === i18n.language);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-2 text-white hover:bg-white/20 transition-colors duration-200"
      >
        {selectedLanguage && flags[selectedLanguage.code]}
        <span className="font-medium text-sm">{selectedLanguage?.code.toUpperCase()}</span>
        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-md rounded-lg shadow-large z-10 overflow-hidden"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          <ul className="p-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-md transition-colors duration-200 ${
                    i18n.language === lang.code
                      ? 'bg-accent-500 text-white font-semibold'
                      : 'text-secondary-700 hover:bg-accent-100 hover:text-accent-700'
                  }`}
                >
                  {flags[lang.code]}
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 