import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.subtitle')}</p>
      <div>
        <h2>{t('contact.phoneTitle')}</h2>
        <p>{t('contact.phoneNumber')}</p>
      </div>
      <div>
        <h2>{t('contact.emailTitle')}</h2>
        <p><a href={`mailto:${t('contact.emailAddress')}`}>{t('contact.emailAddress')}</a></p>
      </div>
      <div>
        <h2>{t('contact.addressTitle')}</h2>
        <p>{t('contact.address')}</p>
      </div>
      <div>
        <h2>{t('contact.socialMediaTitle')}</h2>
        <p>
          <a href={t('contact.facebookUrl')} target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href={t('contact.instagramUrl')} target="_blank" rel="noopener noreferrer">Instagram</a> | 
          <a href={t('contact.twitterUrl')} target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href={t('contact.linkedinUrl')} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
