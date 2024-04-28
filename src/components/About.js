import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import './About.css'; // Asegúrate de que este path es correcto


function About() {
  const { t } = useTranslation();

  return (
    <div id="cuerpo">
      <div id="texto">
          <p>{t('about.line1')}</p>
          <p>{t('about.line2')}</p>
          <p>{t('about.line3')}</p>
          <p>{t('about.line4')}</p>
          <br />
          <p>{t('about.line5')}</p>
          <p>{t('about.line6')}</p>
          <p>{t('about.line7')}</p>
          <p>{t('about.line8')}</p>
          <br />
          <p>{t('about.line9')}</p>
          <p>{t('about.line10')}</p>
          <p>{t('about.line11')}</p>
      </div>
      <div id="foto">
        <img src="../img/foto.jpg" alt={t('about.photoAlt')} />
      </div>
    </div>
  );
}

export default About;
