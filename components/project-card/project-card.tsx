import { useState } from 'react';
import { MdCallMade } from 'react-icons/md';
import useIsInView from '../../hooks/useIsInView';
import { IProject } from '../../types';
import ExternalLink from '../external-link/external-link';
import styles from './project-card.module.scss';

interface Props {
  project: IProject;
}

const ProjectCard = ({ project }: Props) => {
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
        <h2>{project.name}</h2>
        <ul className={styles.tags}>
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <ExternalLink
          href={project.link}
          className={`accent-btn icon-btn ${styles['live-btn']}`}
        >
          View live
          <MdCallMade />
        </ExternalLink>
      </div>
      <div
        className={styles.picture}
        style={{ background: project.background }}
      >
        <img src={project.logo} />
      </div>
    </article>
  );
};

export default ProjectCard;
