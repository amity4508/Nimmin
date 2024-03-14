import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import joinHands from "../../Components/Assets/Images/iconImg/Vector (6).png";
import bgint from "../../Components/Assets/Images/mainImg/Vector (11).png";

import hero1 from "../../Components/Assets/Images/mainImg/hero1.png"
import hero2 from "../../Components/Assets/Images/mainImg/hero2.png"
import hero3 from "../../Components/Assets/Images/mainImg/hero3.png"
import hero4 from "../../Components/Assets/Images/mainImg/hero4.jpg"
import hero6 from "../../Components/Assets/Images/mainImg/hero6.png"



export const slidesData = [
  {
    image: hero1,
    title:
      "Our missions is to create sustainable solutions for everyday life. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, libero non convallis iaculis, neque ",
  },
  {
    image: hero2,
    title:
      "Our missions is to create sustainable solutions for everyday life. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, libero non convallis iaculis, neque ",
  },
  {
    image: hero3,
    title:
      "Our missions is to create sustainable solutions for everyday life. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, libero non convallis iaculis, neque ",
  },
  {
    image: hero4,
    title:
      "Our missions is to create sustainable solutions for everyday life. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, libero non convallis iaculis, neque ",
  },
  {
    image: hero6,
    title:
      "Our missions is to create sustainable solutions for everyday life. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, libero non convallis iaculis, neque ",
  },

];

// slider for header

export const Slider1 = ({ slides = slidesData }) => {
  return (
    <>
      <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px]">
        <div>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            // navigation={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper "
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="card container items-center justify-center slide1 ">
                  <div className="relative heroImg">
                    <img
                      className="w-full h-[350px] max-sm:h-[82vh] object-fill rounded-md    "
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                    />
                    <div className="absolute px-10 top-[30%] xl:w-[40%] md:w-[60%]  object-center xl:left-[20%] md:left-[15%] sm:left-[10%] z-40">
                      <h1 className="text-2xl text-white">{slide.title}</h1>
                      <h1 className="text-sm font-thin text-white mt-5">
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

// --------------------------------

export const slidesData2 = [
  {
    image: "",
    title: "",
    description: "",
  },
];

// Slide for Homepage slide2
export const Sliders2 = ({ slides2 = slidesData2 }) => {
  const handleSlideChangeTransitionEnd = (swiper) => {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;
    slides.forEach((slide) => {
      slide.style.backgroundColor = "rgba(0, 0, 0, 0.28)";
    });

    slides[activeIndex].style.backgroundColor = "rgba(35, 85, 77, 1)";
  };
  return (
    <>
      <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8">
        <div className="">
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
            // navigation={true}
            pagination={{
              clickable: true,
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
            onSlideChangeTransitionEnd={(swiper) =>
              handleSlideChangeTransitionEnd(swiper)
            }
          >
            {slides2.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="rounded max-sm:rounded-xl py-6 min-h-[400px] max-h-28  "
              >
                <div className="card container items-center justify-center">
                  <div className="items-center text-center text-white">
                    <div className="m-auto items-center flex justify-center">
                      <img
                        className="h-[230px] w-[230px] object-fill rounded-full mb-2"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>

                    <div className="px-10 top-[90px]">
                      <h1 className="text-xl text-white">{slide.title}</h1>
                      <h1 className="text-sm font-thin text-white mt-2">
                        {slide.description}
                      </h1>
                      {/* <p className="border-b font-semibold text-white w-[122px] m-auto mt-2 tracking-wider cursor-pointer">
                        Read more >>
                      </p> */}
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

// AboutUs 3 Slide ---------------------------

export const Sliders3 = ({ slides2 = slidesData2 }) => {

  return (
    <>
      <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8">
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
            // navigation={true}
            pagination={{
              clickable: true,
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
                className="rounded max-sm:rounded-xl py-6 min-h-[400px] max-h-28 bg-black  bg-opacity-30 slilder2"
              >
                <div className="card container items-center justify-center">
                  <div className="items-center text-center text-white">
                    <div className="m-auto items-center flex justify-center">
                      <img
                        className="h-[230px] w-[230px] object-fill rounded-full mb-2"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>

                    <div className="px-10 top-[90px]">
                      <h1 className="text-xl text-white">{slide.title}</h1>
                      <h1 className="text-sm font-thin text-white mt-2">
                        {slide.description}
                      </h1>
                      {/* <p className="border-b font-semibold text-white w-[122px] m-auto mt-2 tracking-wider cursor-pointer">
                        Read more >>
                      </p> */}
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

export const Sliders4 = ({ slides2 = slidesData2 }) => {
  return (
    <>
      <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8">
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
            // navigation={true}
            // pagination={{
            //   clickable: true
            // }}

            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              667: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
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
                <div className="card container items-center justify-center ">
                  <div className="items-center text-center text-white ">
                    <div className="m-auto items-center flex justify-center overflow-hidden ">
                    <img
                        className="h-[300px] w-[300px] hover:scale-110  object-fill rounded-full mb-2 overflow-hidden  ease-in duration-200	"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>

                    <div className="container  top-[90px] flex items-center justify-center ">
                      {/* <h1 className='text-xl text-white'>{slide.title}</h1> */}
                      {/* <h1 className='text-sm font-thin text-white mt-2'>{slide.description}</h1> */}
                      <div className="flex border-2 rounded-full justify-between">
                        <div className="flex">
                          <p className="flex items-center px-4 py-1 rounded-full  cursor-pointer bg-green-800 text-white text- ">
                            Initiative Name{" "}
                          </p>
                          <span className=" px-4 py-1 rounded-full  bg-white w-[150px]">
                            {" "}
                            <img className="ml-[28px]" src={joinHands} alt="" />
                            <h1 className="text-gray-400 text-base text-start">
                              Join Hands
                            </h1>
                          </span>
                        </div>
                      </div>
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

export const CompainedSlide = ({ slides2 = slidesData2 }) => {
  return (
    <>
      <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8">
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
            // navigation={true}

            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              667: {
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper"
          >
            {slides2.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="rounded max-sm:rounded-xl   bg-opacity-30	"
              >
                <div className="card container items-center justify-center">
                  <div className="items-center text-center text-white">
                    <div className="m-auto items-center flex justify-center">
                      <img
                        className="h-[80px] w-[80px] object-fill rounded-full mb-2"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>

                    <div className="px-10 top-[90px]">
                      <h1 className="text-xl text-white">{slide.title}</h1>
                      <h1 className="text-sm font-thin text-white mt-2">
                        {slide.description}
                      </h1>
                      {/* <p className='border-b font-semibold text-white w-[122px] m-auto mt-2 tracking-wider cursor-pointer'>Read more >></p> */}
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

export const InitiativeSlider2 = ({ slides2 = slidesData2 }) => {
  return (
    <>
      <div className="justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] max-sm:px-0 sm:px-8 relative ">
        <div>
       
          <div className="flex lg:visible sm:invisible max-sm:invisible">
            <img
              className="w-[100%] xl:h-[230px] lg:h-[300]  "
              src={bgint}
              alt=""
              />
          </div>
          <Swiper
             spaceBetween={30}
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
                 <div class="   z-50 relative top-[-100px] sm:invisible ">
                 <div class="swiper-pagination-fraction" style="color: dark-gray; font-weight:500;">${current} / ${total}</div>
                 <div class="swiper-pagination-progressbar" style="background: black; width: ${progressWidth}%;"> </div>
               </div>
                 `;
               },
             }}
            // navigation={true}

            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              642: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 3,
              },
              1023: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper  absolute lg:top-[-160px] sm:top-[-250px] max-sm:top-[-280px] "
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/Vector (11).png)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backdropFilter: "80%",
            }}
            
          >
            
            {slides2.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="rounded max-sm:rounded-xl  bg-opacity-0"
              >
                  <div className="flex justify-center relative top-[-30px] ">
                  <div className=" w-[100vw] max-sm:h-[260px] h-[160px] halfcircle">
                  </div>
                  </div>
                <div className="card container relative max-sm:top-[-160px] sm:top-[-180px]">
                  <div className=" text-center text-gray-700">
                 
                    <div className=" flex justify-center ">
                      <img
                        className="h-[115px] mt-5 w-[115px] max-sm:h-[165px] max-sm:w-[165px] object-fill rounded-full mb-2"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>

                    <div className="px-2 top-[90px] lg:mt-[50px]">
                      <h1 className="text-xl text-gray-700">{slide.title}</h1>
                      <h1 className="text-sm font-thin text-gray-700 mt-2">
                        {slide.description}
                      </h1>
                      {/* <p className="border-b font-semibold text-white w-[122px] m-auto mt-2 tracking-wider cursor-pointer">
                        Read more >>
                      </p> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center relative max-sm:top-[-410px] sm:invisible z-50">
            <h1></h1>
            <div>
            <div className="button-next  bgSlideBtn relative top-[-5px] text-base text-white left-12 " ><i class="bi bi-chevron-right"></i>  </div>
        <div className="button-prev bgSlideBtn relative top-[-40px] right-12 text-base text-white  " >
         <i class="bi bi-chevron-left"></i>
         </div>
            </div>
         </div>
        
        </div>
      </div>
    </>
  );
};

export const InitiativeSlider4 = ({ slides2 = slidesData2 }) => {
  return (
    <>
      <div className="container mx-auto justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8">
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

// ---------Complained slide 3
