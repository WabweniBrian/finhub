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

const Offers = () => {
  return (
    <>
      <Swiper
        className="swiper-container h-[300px]"
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="absolute top-1/2 left-2 p-3 rounded-full bg-white -translate-y-1/2 z-50 custom-swiper-button-prev cursor-pointer">
          <FiArrowLeft />
        </div>
        <div className="absolute top-1/2 right-2 p-3 rounded-full bg-white -translate-y-1/2 z-50 custom-swiper-button-next cursor-pointer">
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
          <div className="absolute right-0 top-0 p-3 bg-black/50 backdrop-blur-sm text-white w-1/2 z-50">
            Convinient onboarding with OTP
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/photo (92).jpg"
              alt=""
            />
          </div>
          <div className="absolute right-0 top-0 p-3 bg-black/50 backdrop-blur-sm text-white w-1/2 z-50">
            100% Refundable
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/photo (49).jpg"
              alt=""
            />
          </div>
          <div className="absolute right-0 top-0 p-3 bg-black/50 backdrop-blur-sm text-white w-1/2 z-50">
            Free cancellation
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              className="w-full h-full object-cover"
              src="/images/photo (57).jpg"
              alt=""
            />
          </div>
          <div className="absolute right-0 top-0 p-3 bg-black/50 backdrop-blur-sm text-white w-1/2 z-50">
            Special Discount on group tickets
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Offers;
