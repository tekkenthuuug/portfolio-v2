import React from 'react';
import { MdEmail } from 'react-icons/md';
import styles from './footer.module.scss';

interface Props {
  onContactClick: () => any;
}

const Footer = ({ onContactClick }: Props) => {
  return (
    <>
      <div className={styles.background} />
      <footer className={`${styles.footer} container`}>
        <div className={styles.challenge}>
          <div>
            <h1>Interested in Collaboration?</h1>
            <p>
              Challenge me <br /> I want to work with you to create innovation
            </p>
          </div>
          <button
            className={`accent-btn icon-btn ${styles['talk-btn']}`}
            onClick={onContactClick}
          >
            Lets talk
            <MdEmail />
          </button>
        </div>
        <div className={styles.sep} />
      </footer>
    </>
  );
};

export default Footer;
