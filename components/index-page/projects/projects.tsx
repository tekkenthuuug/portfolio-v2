import ProjectCard from '../../project-card/project-card';
import styles from './projects.module.scss';
import { projectsData } from './projects.data';
import useTranslation from 'next-translate/useTranslation';

const Projects = () => {
  const { t } = useTranslation('projects');

  return (
    <section
      className={`container ${styles['projects-container']}`}
      id='projects'
    >
      <h1 className={styles.title}>{t('title')}</h1>
      <div className={styles.projects}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
