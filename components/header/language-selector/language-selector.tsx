import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { locales } from '../../../i18n.js';
import styles from './language-selector.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSelector = () => {
  const { t, lang } = useTranslation('header');
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      {locales.map((lng: string) => {
        if (lang === lng) return null;

        return (
          <Link href={pathname} locale={lng} key={lng}>
            <img
              className={styles.lang}
              src={`/flags/${lng}.svg`}
              title={t('change-language-to', {
                lang: t(`language-name-${lng}`),
              })}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
