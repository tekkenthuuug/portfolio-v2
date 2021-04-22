import { useState } from 'react';
import { MdCallMade, MdLink } from 'react-icons/md';
import useIsInView from '../../hooks/useIsInView';
import styles from './project-card.module.scss';

const ProjectCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref] = useIsInView(
    {
      threshold: 0.15,
    },
    isInView => {
      if (isInView) {
        setIsVisible(true);
      }
    }
  );

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
        <button className={`accent-btn icon-btn ${styles['live-btn']}`}>
          View live
          <MdCallMade />
        </button>
      </div>
      <div className={styles.picture}>
        <img src='/trello.svg' />
      </div>
    </article>
  );
};

export default ProjectCard;
