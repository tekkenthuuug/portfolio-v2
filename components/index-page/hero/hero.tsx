import { useEffect, useRef, useState } from 'react';
import styles from './hero.module.scss';

const Hero = () => {
  const [displayScrollMessage, setDisplayScrollMessage] = useState(false);
  const timeoutHandle = useRef<null | NodeJS.Timeout>(null);

  const handleScroll = () => {
    timeoutHandle.current !== null && clearTimeout(timeoutHandle.current);

    document.removeEventListener('scroll', handleScroll);
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

  return (
    <section className={`container ${styles['hero-container']}`}>
      <div>
        <div className={styles['greeting-container']}>
          <h3 className={styles.greeting}>Hi! I'm Maksim Pautsina</h3>
          <div className={scrollMessageClassName}>
            Please scroll down
            <div />
          </div>
        </div>
        <h1 className={styles.title}>
          Enthusiastic Fullstack <br />
          Web Developer
        </h1>
        <p className={styles.short}>
          High level of personal and professional integrity with the ability to
          easily adapt to changing environments
        </p>
        <button
          onClick={handleProjectsClick}
          className={`accent-btn ${styles['projects-btn']}`}
        >
          See My Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
