import React, { useRef } from 'react';
import useParallax from '../../../hooks/useParallax';
import styles from './hero-background.module.scss';

const HeroBackground = () => {
  const blobsContainerRef = useRef<null | HTMLDivElement>(null);
  useParallax(blobsContainerRef, { multiplier: 0.1 });

  return (
    <div className={styles['hero-background']}>
      <div ref={blobsContainerRef} className={styles['blobs-container']}>
        <div className={styles.blob} />
        <div className={styles.blob} />
        <div className={styles.blob} />
        <div className={styles.blob} />
      </div>
    </div>
  );
};

export default HeroBackground;
