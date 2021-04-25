import { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const openSidebar = () => setIsSidebarOpened(true);
  const closeSidebar = () => setIsSidebarOpened(false);

  const title = 'Maksim Pautsina | Warsaw Web Development';
  const metaDescriptionContent =
    'Maksim Pautsina is a freelance web developer &amp; full stack website developer in Warsaw. Portfolio of web projects.';
  const metaImageUrl =
    'https://maksimdev.com/maksim-pautsina-socials-preview.png';

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
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
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
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
