import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      
    }
  ];
  return (
    <header className="container mx-auto py-6">
      <nav className="w-full flex items-center justify-between">
        {/* logo */}
        <Link>
          <img src={logo} alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
