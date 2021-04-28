import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import styles from './contact-tab.module.scss';

const ContactTab = () => {
  const { t } = useTranslation('sidebar');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Trans i18nKey='sidebar:contact.title' components={[<br />]} />
      </h1>
      <div className={styles.info}>
        <p>maksim.pautsina@gmail.com</p>
        <p>{t('contact.location')}</p>
      </div>
    </div>
  );
};

export default ContactTab;
