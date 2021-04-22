import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className='container'>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li>
              <Link href='/about-me'>About Me</Link>
            </li>
          </ul>
          <Link href='/#contact'>
            <button className='accent-btn'>Contact</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
