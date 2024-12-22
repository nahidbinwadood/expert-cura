import heroBanner from '@/assets/images/home-banner.png';
import WhiteButton from '@/components/Common/WhiteButton';

const HeroBannerHomepage = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBanner})`,
      }}
      className="min-h-[70vh] relative h-[70vh] max-h-[70vh] bg-cover bg-center rounded-xl container mx-auto mt-5 overflow-hidden flex flex-col px-16 py-20 justify-end mb-20"
    >
      {/* blur */}
      <div
        className="opacity-80 absolute"
        style={{
          borderRadius: '562px',
          background: 'var(--Primary-color-600, #375F92)',
          filter: 'blur(158px)',
          width: '550px',
          height: '550px',
          flexShrink: '0',
          right: '-200px',
          bottom: '-150px',
        }}
      ></div>

      {/* contents */}
      <div className="w-1/2 space-y-4">
        <h1 className="text-7xl font-extrabold italic text-white leading-[90px]">
          Your Peace of <span className="text-[#1DE4E1]">Mind, </span>
          Our <span className="text-[#1DE4E1]">Priority.</span>
        </h1>

        <p className="text-white text-lg">
          Experience the peace of mind that comes with Expert Cura. Our
          comprehensive homecare, live-in care, and dementia care services are
          designed to provide exceptional support and alleviate your worries.
        </p>

        <WhiteButton to="/" text="Get In Touch" />
      </div>
    </section>
  );
};

export default HeroBannerHomepage;
