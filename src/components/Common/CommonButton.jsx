/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const CommonButton = ({ primary, to, text }) => {
  return (
    <Link
      to={to}
      className={`text-lg inline-block font-medium px-10 py-3.5 border border-primary rounded-full transition-all duration-500 ${
        primary
          ? 'bg-primary text-white hover:bg-transparent hover:text-primary'
          : 'bg-transparent text-primary'
      }`}
    >
      {text}
    </Link>
  );
};

export default CommonButton;
