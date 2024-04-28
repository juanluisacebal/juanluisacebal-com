import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} className="dropbtn">
        {/* Aquí iría tu icono */}
        <img src="../img/lang.png" alt="Language" />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={() => changeLanguage('es')}>ES</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('fr')}>FR</button>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;