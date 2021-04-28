import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
// @ts-ignore
import { locales } from '../../../i18n.js';
import styles from './language-selector.module.scss';

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
