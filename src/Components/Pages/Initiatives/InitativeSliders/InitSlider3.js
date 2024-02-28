import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { slidesData2 } from "../../../Swipers/Sliders";

import slide1 from "../../../../Components/Assets/Images/mainImg/__after.png";
import slide2 from "../../../../Components/Assets/Images/mainImg/heroImg.png";
import slide3 from "../../../../Components/Assets/Images/mainImg/mobilebg.jpg";
import joinHands from "../../../../Components/Assets/Images/iconImg/Vector (6).png";
// import bgint from "../../Components/Assets/Images/mainImg/Vector (11).png";

export const InitSlider3 = ({ slides2 = slidesData2 }) => {
    return (
      <>
        <section className=" sm:relative  max-sm:relative lg:top-[-200px] sm:top-[-340px] max-sm:top-[-340px] ">
          <div className="">
          <img className="w-full h-[600px] xl:invisible xl:h-0 " src={slide2} alt="" />
          </div>
        <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8 xl:invisible  sm:absolute max-lg:absolute top-0 " >

        <div className="flex justify-center mb-3 " >
        <button className="textgr text-base text-white rounded py-2 px-8 ">
                    Headline #0x{" "}
                  </button>
        </div>
          <div>
            <Swiper
            spaceBetween={5}
            loop={true}
            loopFillGroupWithBlank={true}
            centeredSlides={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: true,
            }}
            // navigation={true}
            navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
           
            pagination={{
              clickable: true,
              type: 'custom', 
              renderCustom: (swiper, current, total) => {
                const progressWidth = (current / total) * 100; 
                
                return `
                  <div class="custom-pagination">
                    <div class="swiper-pagination-fraction" style="color: #ffff;">${current} / ${total}</div>
                    <div class="swiper-pagination-progressbar" style="background: #00ff00; width: ${progressWidth}%;"></div>

                  </div>
                `;
              },
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
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
              // onSlideChangeTransitionEnd={(swiper) => handleSlideChangeTransitionEnd(swiper)}
            >
              {slides2.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="rounded max-sm:rounded-xl py-6 min-h-[400px] max-h-28 bg-black  bg-opacity-30	"
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
  
                      <div className="px-10 top-[90px]">
                        <h1 className="text-xl text-white">{slide.title}</h1>
                        <h1 className="text-sm font-thin text-white mt-2">
                          {slide.description}
                        </h1>
                        <p className="border-b font-semibold text-white w-[122px] m-auto mt-2 tracking-wider cursor-pointer">
                          Read more >>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center mt-5">
            <div>
            <div className="button-next relative top-[-5px] text-2xl text-white left-12 bg-green-700 " ><i class="bi bi-chevron-right"></i>  </div>
        
        <div className="button-prev relative top-[-40px] right-12 text-2xl text-white bg-green-700 " >
         <i class="bi bi-chevron-left"></i>
         </div>
            </div>
         </div>
          </div>
        </div>
        </section>

      </>
    );
  };