import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { slidesData2 } from "../../../Swipers/Sliders";
export const InitSlider4 = ({ slides2 = slidesData2 }) => {
    return (
      <>
        <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8 xl:relative xl:mt-[-300px] max-sm:invisible sm:invisible xl:visible sm:h-[0]">
          <div>
            <Swiper
              // slidesPerView={3}
              spaceBetween={5}
              loop={true}
              loopFillGroupWithBlank={true}
              centeredSlides={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                667: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              className="mySwiper"
              // onSlideChangeTransitionEnd={(swiper) => handleSlideChangeTransitionEnd(swiper)}
            >
              {slides2.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="rounded max-sm:rounded-xl py-6 min-h-[400px] max-h-28   bg-opacity-30	"
                >
                  <div className="card container items-center justify-center">
                    <div className="items-center text-center text-white">
                      <div className="m-auto items-center flex justify-center">
                        <img
                          className="h-[200px] w-[200px] object-fill rounded-full mb-2"
                          src={slide.image}
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
  
                      <div className="container  top-[90px]  items-center justify-center ">
                        <h1 className="text-xl text-gray-600">{slide.title}</h1>
                        <h1 className="text-sm font-thin text-gray-600 mt-2">
                          {slide.description}
                        </h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
    );
  };