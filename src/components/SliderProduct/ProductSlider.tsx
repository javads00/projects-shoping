import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Autoplay } from "swiper/modules";

const ProductSlider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-0 z-10 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 py-4 shadow-lg">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
