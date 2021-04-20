import { useEffect, useState } from 'react';
import useIsInView from '../../hooks/useIsInView';
import styles from './project-card.module.scss';

const ProjectCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, isInView] = useIsInView<HTMLDivElement>({
    threshold: 0.15,
  });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  let containerClassName = styles['card-container'];

  if (isVisible) containerClassName += ` ${styles.visible}`;

  return (
    <article className={containerClassName} ref={ref}>
      <div className={styles.description}>
        <h2>Trello clone</h2>
        <ul className={styles.tags}>
          <li>React</li>
          <li>Next.js</li>
          <li>GraphQL</li>
          <li>Typescript</li>
          <li>Express</li>
          <li>Apollo</li>
        </ul>
        <button className={`accent-btn ${styles['live-btn']}`}>
          View live
        </button>
      </div>
      <div className={styles.picture}></div>
    </article>
  );
};

export default ProjectCard;
