import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { slidesData2 } from "../../../Swipers/Sliders";

import slide2 from "../../../../Components/Assets/Images/mainImg/heroImg.png";
// import bgint from "../../Components/Assets/Images/mainImg/Vector (11).png";

export const InitSlider1 = ({ slides2 = slidesData2 }) => {
    return (
      <>
        <section className=" sm:relative  max-sm:relative lg:top-[-200px] sm:top-[-340px] max-sm:top-[-340px] ">
          <div className="">
          <img className="w-full max-sm:h-[650px] h-[750px] xl:invisible xl:h-0  z-0" src={slide2} alt="" />
          </div>
        <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8 xl:invisible  sm:absolute max-lg:absolute top-0 top-[-70px] " >
        <div className="py-5">
     <h1 className=" text-2xl   ">Header 1</h1>
            <p className="w-[100px] border-yellow-500 border-b-2 "></p>
     </div>

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
                <div class="   z-50 relative top-2">
                <div class="swiper-pagination-fraction" style="color: #ffff;">${current} / ${total}</div>
                <div class="swiper-pagination-progressbar" style="background: #00ff00; width: ${progressWidth}%;"> </div>
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
                  className="slidehover rounded max-sm:rounded-xl  min-h-[400px] max-h-28 bg-black  bg-opacity-30 	"
                >
                  <div className="card container items-center justify-center">
                    <div className="items-center text-center text-white">
                      <div className="m-auto items-center flex justify-center relative overflow-hidden ">
                        <img
                          className="h-[200px] w-[200px] object-fill rounded-full mb-2 transition duration-300 hover:scale-150"
                          src={slide.image}
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
  
                      <div className="px-3 top-[90px]">
                        <h1 className="text-xl text-white">{slide.title}</h1>
                        <h1 className="text-sm font-thin text-white mt-2">
                          {slide.description}
                        </h1>
                       
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center mt-10">
            <div>
            <div className="button-next bgSlideBtn relative top-[-5px] text-base text-white left-14  " ><i class="bi bi-chevron-right"></i>  </div>
        <div className="button-prev bgSlideBtn relative top-[-37px] right-14 text-base text-white  " >
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