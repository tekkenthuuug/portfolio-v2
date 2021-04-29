import HeroBackground from '../components/index-page/hero-background/hero-background';
import Hero from '../components/index-page/hero/hero';
import Projects from '../components/index-page/projects/projects';
import Layout from '../components/layout/layout';

const Home = () => {
  return (
    <Layout>
      <HeroBackground />
      <Hero />
      <Projects />
    </Layout>
  );
};

export default Home;
