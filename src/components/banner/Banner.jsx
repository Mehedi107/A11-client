import bannerImg1 from '../../assets/b1.webp';
import bannerImg2 from '../../assets/b2.webp';
import bannerImg3 from '../../assets/b3.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const slideContents = [
    {
      bg: bannerImg1,
      title: 'Unearth the Timeless Treasures of History',
      subTitle:
        "Discover the world's most fascinating artifacts and their incredible stories.",
    },
    {
      bg: bannerImg2,
      title: 'Preserve the Past, Shape the Future',
      subTitle:
        'Join a global community of history enthusiasts sharing and celebrating artifacts.',
    },
    {
      bg: bannerImg3,
      title: 'Explore, Contribute, and Connect with History',
      subTitle:
        'Browse ancient relics, add your discoveries, and track your contributions.',
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        slidesPerView={1}
      >
        {slideContents.map((content, i) => (
          <SwiperSlide key={i}>
            <div
              style={{ backgroundImage: `url(${content.bg})` }}
              className={`hero min-h-[calc(100vh-68px)]`}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                  <h1
                    data-aos="zoom-in"
                    className="mb-5 lg:text-5xl md:text-4xl text-3xl  font-bold text-white text-opacity-90"
                  >
                    {content.title}
                  </h1>
                  <p>{content.subTitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
