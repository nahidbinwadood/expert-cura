import footerLogo from '@/assets/images/logo-light.png';
import SocialButton from '@/components/Common/SocialButton';
import { FacebookSvg, InstagramSvg, LinkedinSvg, YoutubeSvg } from '@/components/Svg/SvgContainer';
import { Link } from 'react-router-dom';
const navigationItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'How We Works',
    path: '/how-we-works',
  },
  {
    title: 'Services',
    path: '/services',
  },
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Carer',
    path: '/carer',
  },
];

const informationItems = [
  {
    title: 'Cookie policy',
    path: '/cookie-policy',
  },
  {
    title: 'Privacy policy',
    path: '/privacy-policy',
  },
  {
    title: 'Terms & Condition',
    path: '/terms-and-conditions',
  },
];

const getInTouchInfo = [
  {
    title: 'Phone :',
    link: '02039165072',
    oneLine: true,
    tel: true,
  },
  {
    title: 'Arrange A Carer Email :',
    link: 'contact@expertcura.co.uk',
    oneLine: false,
    tel: false,
  },
  {
    title: 'Arrange A Carer Email :',
    link: 'support@expertcura.co.uk',
    oneLine: false,
    tel: false,
  },
  {
    title: 'Head Office Address: 71-75 Shelton ',
    address: 'Street, London, WC2H 9JQ',
    isAddress: true,
    oneLine: false,
  },
];

const socialInfo = [
  { id: 1, icon: <FacebookSvg />, path: 'https://www.facebook.com' },
  { id: 2, icon: <InstagramSvg />, path: 'https://www.instagram.com' },
  { id: 3, icon: <YoutubeSvg />, path: 'https://www.youtube.com' },
  { id: 4, icon: <LinkedinSvg />, path: 'https://www.linkedin.com' },
];
const Footer = () => {
  return (
    <footer className="bg-darkBlue pt-40 rounded-t-2xl font-mulish text-white">
      {/* footer top */}
      <section className="flex justify-between container mx-auto pb-10 gap-40">
        {/* logo section */}
        <div className="flex-1">
          {/* logo */}
          <div>
            <img src={footerLogo} alt="" />
          </div>
          {/* description */}
          <p className="mt-4 w opacity-60 text-lg font-light">
            “Expert Cura – Providing compassionate and reliable care services to
            enhance quality of life.”
          </p>
        </div>

        {/* navigation */}
        <div className="flex-1">
          {/* title */}
          <h4 className="font-semibold text-xl pb-1">Navigation</h4>
          {/* items */}
          <ul className="space-y-3">
            {navigationItems.map((item) => (
              <li key={item?.title} className="mt-4 opacity-60 font-light">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* information */}
        <div className="flex-1">
          {/* title */}
          <h4 className="font-semibold text-xl pb-1">Information</h4>
          {/* items */}
          <ul className="space-y-3">
            {informationItems.map((item) => (
              <li key={item?.title} className="mt-4 opacity-60 font-light">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="flex-1">
          {/* title */}
          <h4 className="font-semibold text-xl pb-1">Get In Touch</h4>
          {/* items */}
          <ul className="space-y-3 font-light">
            {getInTouchInfo?.map((item) => (
              <li key={item?.title} className="mt-4 opacity-60 ">
                {item?.isAddress ? (
                  <>
                    <span>{item?.title}</span>
                    <p>{item?.address}</p>
                  </>
                ) : (
                  <span>
                    {item?.title}{' '}
                    <Link
                      to={`${
                        item?.tel ? `tel:${item?.link}` : `mailto:${item?.link}`
                      }`}
                    >
                      {item?.link}
                    </Link>{' '}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* bottom footer */}
      <section className="pt-10 pb-8 border-t border-white/20 container mx-auto w-full flex items-center justify-between">
        <div>
          <p className="opacity-60">
            Copyright 2024 Expert Cura. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialInfo?.map((item) => (
            <SocialButton key={item?.id} item={item} />
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
