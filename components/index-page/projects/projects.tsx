import ProjectCard from '../../project-card/project-card';
import styles from './projects.module.scss';
import { projectsData } from './projects.data';

const Projects = () => {
  return (
    <section
      className={`container ${styles['projects-container']}`}
      id='projects'
    >
      <h1 className={styles.title}>My latest works</h1>
      <div className={styles.projects}>
        {projectsData.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
