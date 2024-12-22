import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';
import TopNav from '@/Shared/TopNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <main className='font-mulish'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
