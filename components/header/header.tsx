import { MdEmail } from 'react-icons/md';
import styles from './header.module.scss';

interface Props {
  onContactClick: () => any;
}

const Header = ({ onContactClick }: Props) => {
  return (
    <header className={`${styles.header}`}>
      <div className='container'>
        <nav className={styles.nav}>
          <button className='accent-btn icon-btn' onClick={onContactClick}>
            Contact
            <MdEmail />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
