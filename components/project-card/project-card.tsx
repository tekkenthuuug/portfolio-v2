import useTranslation from 'next-translate/useTranslation';
import { useRef, useState } from 'react';
import { MdCallMade } from 'react-icons/md';
import useIsInView from '../../hooks/useIsInView';
import useTilt from '../../hooks/useTilt';
import { IProject } from '../../types';
import ExternalLink from '../external-link/external-link';
import styles from './project-card.module.scss';

interface Props {
  project: IProject;
}

const ProjectCard = ({ project }: Props) => {
  const { t } = useTranslation('project-card');
  const [isVisible, setIsVisible] = useState(false);
  const cardContainerRef = useRef<null | HTMLDivElement>(null);

  useTilt(cardContainerRef, { multiplierX: 0.2, multiplierY: 0.4 });

  useIsInView(
    cardContainerRef,
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
    <article className={containerClassName} ref={cardContainerRef}>
      <div className={styles.description}>
        <h2>
          <ExternalLink href={project.link}>{project.name}</ExternalLink>
        </h2>
        <ul className={styles.tags}>
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <ExternalLink
          href={project.link}
          className={`accent-btn icon-btn ${styles['live-btn']}`}
        >
          {t('project-link')}
          <MdCallMade />
        </ExternalLink>
      </div>
      <div
        className={styles.picture}
        style={{ background: project.background }}
      >
        <img src={project.logo} alt={project.name} />
      </div>
    </article>
  );
};

export default ProjectCard;
