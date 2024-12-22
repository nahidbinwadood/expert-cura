import SocialButton from '@/components/Common/SocialButton';
import {
  EmailSvg,
  FacebookSvg,
  InstagramSvg,
  LinkedinSvg,
  PhoneSvg,
  YoutubeSvg,
} from '@/components/Svg/SvgContainer';

const TopNav = () => {
  const socialInfo = [
    { id: 1, icon: <FacebookSvg />, path: 'https://www.facebook.com' },
    { id: 2, icon: <InstagramSvg />, path: 'https://www.instagram.com' },
    { id: 3, icon: <YoutubeSvg />, path: 'https://www.youtube.com' },
    { id: 4, icon: <LinkedinSvg />, path: 'https://www.linkedin.com' },
  ];
  return (
    <div className="bg-primary py-4 font-mulish text-white">
      <div className="container mx-auto w-full flex items-center justify-between">
        {/* mobile */}
        <div className="flex items-center gap-2">
          <PhoneSvg />
          <div>
            <span>
              Phone :
              <a
                className="ml-1"
                href="tel:02039165072"
                aria-label="Call us at 02039165072"
              >
                02039165072
              </a>
            </span>
          </div>
        </div>
        {/* email */}
        <div className="flex items-center gap-40">
          <div className="flex items-center gap-2">
            <EmailSvg />
            <div>
              <span>
                Arrange A Carer :
                <a
                  className="ml-1"
                  href="mailto:contact@expertcura.co.uk"
                  aria-label="Arrange A Carer: contact@expertcura.co.uk"
                >
                  contact@expertcura.co.uk
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <EmailSvg />
            <div>
              <span>
                become A Carer :
                <a
                  className="ml-1"
                  href="mailto:support@expertcura.co.uk"
                  aria-label="become A Carer: support@expertcura.co.uk"
                >
                  support@expertcura.co.uk
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* social links */}
        <div className="flex items-center gap-4">
          {socialInfo?.map((item) => (
            <SocialButton key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
