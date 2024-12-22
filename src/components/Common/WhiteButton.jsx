/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const WhiteButton = ({ to, text }) => {
  return (
    <Link
      className="py-3.5 px-12 inline-block border border-white bg-white text-primary font-semibold rounded-full transition-all duration-500 hover:bg-transparent hover:text-white "
      to={to}
    >
      {text}
    </Link>
  );
};

export default WhiteButton;
