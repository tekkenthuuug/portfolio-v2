import styles from './header.module.scss';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className='container'>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href='/about-me'>About Me</Link>
            </li>
          </ul>
          <Link href='/#contact'>
            <button className='accent-btn icon-btn'>
              Contact
              <MdEmail />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
