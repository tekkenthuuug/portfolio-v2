import React from 'react';
import styles from './contact-tab.module.scss';

const ContactTab = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Let's Build
        <br /> Something <br />
        Together
      </h1>
      <div className={styles.info}>
        <p>maksim.pautsina@gmail.com</p>
        <p>Poland, Warsaw</p>
      </div>
    </div>
  );
};

export default ContactTab;
