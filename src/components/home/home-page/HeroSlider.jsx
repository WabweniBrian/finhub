import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import BookingFilters from "../../common/BookingFilters";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        className="swiper-container h-screen"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        grabCursor={true}
      >
        <div className="absolute top-1/2 left-1 sm:left-2 p-3 rounded-full bg-white border sm:!border-none -translate-y-1/2 z-50 custom-swiper-button-prev cursor-pointer">
          <FiArrowLeft />
        </div>
        <div className="absolute top-1/2 right-1 sm:right-2 p-3 rounded-full bg-white border sm:!border-none -translate-y-1/2 z-50 custom-swiper-button-next cursor-pointer">
          <FiArrowRight />
        </div>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/Background1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/Bus.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/Background1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <div className="absolute h-2/3 rounded-lg md:rounded-none w-[94%] md:h-full md:w-1/2 p-4 md:p-0 center-center md:right-0 md:translate-x-0  bg-white/50 backdrop-blur-sm z-30 flex-center-center">
          <BookingFilters buttonText={"Search Buses"} />
        </div>
      </Swiper>
    </>
  );
};

export default HeroSlider;
