import Blobs from '../components/index-page/blobs/blobs';
import Hero from '../components/index-page/hero/hero';
import Projects from '../components/index-page/projects/projects';
import Layout from '../components/layout/layout';
import styles from '../styles/index.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={styles['hero-background']}></div>
      <Hero />
      <Projects />
    </Layout>
  );
};

export default Home;
