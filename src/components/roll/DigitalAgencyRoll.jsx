import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import {useTranslations} from "next-intl";

const swiperText = [
  "Development",
  "Strategy",
  "Design",
  "E-commerce",
  "Apps",
  "Websites",
  "SEO",
  "Content",
  "Branding",
  "Marketing",
  "AI",
  "Solutions",
  "Graphics",
  "Responsive",
  "Frontend",
  "Development",
  "Strategy",
  "Design",
  "E-commerce",
  "SEO",
];
const breakpoints = {
  640: {
    slidesPerView: 3,
  },
  800: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1300: {
    slidesPerView: 5,
  },
  1900: {
    slidesPerView: 8,
  },
}
const DigitalAgencyRoll = () => {

  return (
    <>
      <section className="roll__area">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            breakpoints={breakpoints}
          >
            { swiperText.map((el,index) => (
                <SwiperSlide key={index}>
                  <div className="roll__slide" >
                    <h2>{el}</h2>
                  </div>
                </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyRoll;
