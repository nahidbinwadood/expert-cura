/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const SocialButton = ({ item }) => {
  return (
    <Link
      to={item?.href}
      target="_blank"
      className="size-8 group hover:bg-white transition duration-300 flex items-center justify-center border border-white rounded-full"
    >
      {item?.icon}
    </Link>
  );
};

export default SocialButton;
