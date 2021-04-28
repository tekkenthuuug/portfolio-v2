import { MdEmail } from 'react-icons/md';
import styles from './header.module.scss';
import useTranslation from 'next-translate/useTranslation';

import LanguageSelector from './language-selector/language-selector';

interface Props {
  onContactClick: () => any;
}

const Header = ({ onContactClick }: Props) => {
  const { t } = useTranslation();

  return (
    <header className={`${styles.header}`}>
      <div className='container'>
        <nav className={styles.nav}>
          <button className='accent-btn icon-btn' onClick={onContactClick}>
            {t('common:contact')}
            <MdEmail />
          </button>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
};

export default Header;
