import { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const openSidebar = () => setIsSidebarOpened(true);
  const closeSidebar = () => setIsSidebarOpened(false);

  return (
    <>
      <Head>
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
