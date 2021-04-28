import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import styles from './footer.module.scss';

interface Props {
  onContactClick: () => any;
}

const Footer = ({ onContactClick }: Props) => {
  const { t } = useTranslation('footer');

  return (
    <>
      <div className={styles.background} />
      <footer className={`${styles.footer} container`}>
        <div className={styles.challenge}>
          <div>
            <h1>{t('title')}</h1>
            <p>
              <Trans i18nKey='footer:text' components={[<br />]} />
            </p>
          </div>
          <button
            className={`accent-btn icon-btn ${styles['talk-btn']}`}
            onClick={onContactClick}
          >
            {t('talk-link')}
            <MdEmail />
          </button>
        </div>
        <div className={styles.sep} />
      </footer>
    </>
  );
};

export default Footer;
