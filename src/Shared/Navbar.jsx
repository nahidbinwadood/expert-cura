import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import CommonButton from '@/components/Common/CommonButton';

const Navbar = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'How We Work', path: '/how-we-works' },
    { title: 'Services', path: '/services' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Contact', path: '/contact' },
    { title: 'Become A Carer', path: '/become-a-career' },
  ];

  return (
    <header className="w-full sticky top-0 left-0 z-[50] bg-white">
      <nav className="w-full flex items-center justify-between container mx-auto py-6 font-mulish">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-5 ml-[100px]">
          {navLinks?.map((navLink) => (
            <li key={navLink?.path}>
              <NavLink
                to={navLink?.path}
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-primary transition duration-300 ${
                    isActive ? 'text-primary' : 'text-black'
                  }`
                }
              >
                {navLink?.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-8">
          <CommonButton to="/login" text="Log in" />
          <CommonButton
            primary={true}
            to="/arrange-a-carer"
            text="Arrange A Carer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
