import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import LanguageDropdown from './components/Lang'; // Asegúrate de que este es el path correcto
import './i18n';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="header center">
        <ul className="pages">
          <li><Link to="/">{t('navigation.home')}</Link></li>
          <li><Link to="/about">{t('navigation.about')}</Link></li>
          <li><Link to="/portfolio">{t('navigation.portfolio')}</Link></li>
          <li><Link to="/resume">{t('navigation.resume')}</Link></li>
          <li><Link to="/blog">{t('navigation.blog')}</Link></li>
          <li><Link to="/contact">{t('navigation.contact')}</Link></li>
        </ul>
      
        <LanguageDropdown />
      </div>
      <div className="body center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
