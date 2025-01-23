// SliderComponent.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const SliderComponent = ({ images }: { images: string | string[] }) => {
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        {imageArray.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative h-[10rem]  md:h-[15rem] lg:h-[20rem]"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-contain w-full h-full rounded-lg"
              style={{ maxHeight: "100%", maxWidth: "100%" }} // Add max-width and max-height
            />
            {/* Optional: Add overlay or text if you want */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 rounded-lg"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
