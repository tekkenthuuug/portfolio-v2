import React from 'react';
import ExternalLink from '../../external-link/external-link';
import styles from './about-tab.module.scss';

const AboutTab = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Attentive
        <br />
        Passionate
        <br />
        Creative
      </h1>
      <p className={styles.info}>
        I'm currently a freelance Fullstack Web Developer, who has an experience
        working with clients from all over the world on many diverse projects.
      </p>
      <p className={styles.info}>
        My wheelhouse is PERN stack with Typescript, but I'm always looking
        forward to master new skills.
      </p>
      <ExternalLink className={styles.resume} href='/'>
        View resume
      </ExternalLink>
    </div>
  );
};

export default AboutTab;
