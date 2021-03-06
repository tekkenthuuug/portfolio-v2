import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useRef, useState } from 'react';
import useGA from '../../hooks/useGA';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const hasBeenOpened = useRef(false);
  const GA = useGA();
  const { t } = useTranslation('layout');

  const openSidebar = () => {
    setIsSidebarOpened(true);
    if (!hasBeenOpened.current && GA) {
      hasBeenOpened.current = true;

      GA.gtag('event', 'sidebar_opened');
    }
  };
  const closeSidebar = () => setIsSidebarOpened(false);

  const title = t('title');
  const metaDescriptionContent = t('description');
  const metaImageUrl =
    'https://maksimdev.com/maksim-pautsina-socials-preview.png';

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>{title}</title>

        <link rel='alternate' href='https://maksimdev.com' hrefLang='en' />
        <link rel='alternate' href='https://maksimdev.com/ru' hrefLang='ru' />
        <link rel='alternate' href='https://maksimdev.com/pl' hrefLang='pl' />

        <meta name='description' content={metaDescriptionContent} />
        <meta name='author' content='Maksim Pautsina' />
        <meta name='copyright' content='Maksim Pautsina' />
        <meta name='robots' content='index, follow' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='https://maksimdev.com' />
        <meta property='og:image' content={metaImageUrl} />
        <meta property='og:image:secure_url' content={metaImageUrl} />
        <meta property='og:description' content={metaDescriptionContent} />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:site' content='@tekkenthuuug' />
        <meta name='twitter:description' content={metaDescriptionContent} />
        <meta name='twitter:image' content={metaImageUrl} />
        <meta name='twitter:image:alt' content={title} />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header onContactClick={openSidebar} />
      <Sidebar isOpened={isSidebarOpened} onClose={closeSidebar} />
      {children}
      <Footer onContactClick={openSidebar} />
    </>
  );
};

export default Layout;
