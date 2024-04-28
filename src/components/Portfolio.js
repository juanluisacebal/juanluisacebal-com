import React from 'react';
import { useTranslation } from 'react-i18next';

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t('portfolio.title')}</h1>
      <p>{t('portfolio.comingSoon')}</p>
    </div>
  );
}

export default Portfolio;
