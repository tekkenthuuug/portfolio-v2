import { useEffect, useRef, useState } from 'react';
import styles from './hero.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

const Hero = () => {
  const [displayScrollMessage, setDisplayScrollMessage] = useState(false);
  const timeoutHandle = useRef<null | NodeJS.Timeout>(null);
  const { t } = useTranslation('hero');

  const handleScroll = () => {
    timeoutHandle.current !== null && clearTimeout(timeoutHandle.current);

    document.removeEventListener('scroll', handleScroll);

    setDisplayScrollMessage(false);
  };

  useEffect(() => {
    timeoutHandle.current = setTimeout(() => {
      setDisplayScrollMessage(true);
    }, 6500);

    document.addEventListener('scroll', handleScroll);

    return () => {
      timeoutHandle.current && clearTimeout(timeoutHandle.current);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProjectsClick = () => {
    const projectsRef = document.getElementById('projects');

    window.scrollTo({ behavior: 'smooth', top: projectsRef?.offsetTop });
  };

  let scrollMessageClassName = styles.scroll;

  if (displayScrollMessage) scrollMessageClassName += ` ${styles.visible}`;

  console.log(scrollMessageClassName);

  return (
    <section className={`container ${styles['hero-container']}`}>
      <div>
        <div className={styles['greeting-container']}>
          <h3 className={styles.greeting}>{t('greeting')}</h3>
          <div className={scrollMessageClassName}>
            {t('scroll')}
            <div />
          </div>
        </div>
        <h1 className={styles.title}>
          <Trans i18nKey='hero:title' components={[<br />]} />
        </h1>
        <p className={styles.short}>{t('short')}</p>
        <button
          onClick={handleProjectsClick}
          className={`accent-btn ${styles['projects-btn']}`}
        >
          {t('projects')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
