import { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const openSidebar = () => setIsSidebarOpened(true);
  const closeSidebar = () => setIsSidebarOpened(false);

  return (
    <>
      <Header onContactClick={openSidebar} />
      <Sidebar isOpened={isSidebarOpened} onClose={closeSidebar} />
      {children}
      <Footer onContactClick={openSidebar} />
    </>
  );
};

export default Layout;
