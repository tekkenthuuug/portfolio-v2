import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import ExternalLink from '../../external-link/external-link';
import styles from './about-tab.module.scss';

const AboutTab = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Trans i18nKey='sidebar:about-me.title' components={[<br />]} />
      </h1>
      <p className={styles.info}>{t('sidebar:about-me.text')}</p>
      <p className={styles.info}>{t('sidebar:about-me.tech')}</p>
      <ExternalLink className={styles.resume} href='/'>
        {t('common:resume')}
      </ExternalLink>
    </div>
  );
};

export default AboutTab;
