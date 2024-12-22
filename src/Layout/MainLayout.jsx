import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';
import TopNav from '@/Shared/TopNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
