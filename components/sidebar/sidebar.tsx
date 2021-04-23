import React, { useEffect, useRef, useState } from 'react';
import { MdClose, MdEmail } from 'react-icons/md';
import usePrev from '../../hooks/usePrev';
import ExternalLink from '../external-link/external-link';
import Portal from '../portal/portal';
import AboutTab from './about-tab/about-tab';
import ContactTab from './contact-tab/contact-tab';
import styles from './sidebar.module.scss';

interface Props {
  isOpened?: boolean;
  onClose?: () => any;
}

const tabsMap = {
  contact: ContactTab,
  'about-me': AboutTab,
};

const Sidebar = ({ isOpened, onClose }: Props) => {
  const [selectedTab, setSelectedTab] = useState<keyof typeof tabsMap>(
    'contact'
  );

  useEffect(() => {
    document.body.style.overflowY = isOpened ? 'hidden' : 'visible';

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  const getTabClassName = (tabName: keyof typeof tabsMap) => {
    return tabName === selectedTab ? styles.active : undefined;
  };

  let overlayClassName = styles.overlay;

  return (
    <Portal>
      <div className={overlayClassName}>
        <div className={styles.container}>
          <MdClose className={styles.close} onClick={onClose} />
          <ul className={styles.nav}>
            <li
              className={getTabClassName('contact')}
              onClick={() => setSelectedTab('contact')}
            >
              Contact
            </li>
            <li
              className={getTabClassName('about-me')}
              onClick={() => setSelectedTab('about-me')}
            >
              About me
            </li>
          </ul>
          {tabsMap[selectedTab]()}
          <div className={styles.footer}>
            <ExternalLink href='https://www.linkedin.com/in/maksim-pautsina/'>
              <img src='/linkedin.svg' />
            </ExternalLink>
            <ExternalLink href='https://github.com/tekkenthuuug'>
              <img src='/github.svg' />
            </ExternalLink>
            <ExternalLink href='https://www.fiverr.com/tekkenthg'>
              <img src='./fiverr.svg' />
            </ExternalLink>
            <ExternalLink href='mailto:maksim.pautsina@gmail.com'>
              <MdEmail />
            </ExternalLink>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Sidebar;