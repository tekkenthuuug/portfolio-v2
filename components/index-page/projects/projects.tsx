import ProjectCard from '../../project-card/project-card';
import styles from './projects.module.scss';

const Projects = () => {
  return (
    <section
      className={`container ${styles['projects-container']}`}
      id='projects'
    >
      <h1 className={styles.title}>My latest works</h1>
      <div className={styles.projects}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
