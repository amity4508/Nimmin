import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import slide1 from "../Assets/Images/mainImg/__after.png";
import slide2 from "../Assets/Images/mainImg/heroImg.png";
import slide3 from "../Assets/Images/mainImg/mobilebg.jpg";
import joinHands from "../Assets/Images/iconImg/Vector (6).png";
import bgint from "../../Components/Assets/Images/mainImg/Vector (11).png";
export const slidesData = [
  {
    image: slide1,
    title:
      "Our missions is to create sustainable solutions for everyday life. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, libero non convallis iaculis, neque ",
  },
  {
    image: slide2,
    title:
      "Our missions is to create sustainable solutions for everyday life. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, libero non convallis iaculis, neque ",
  },

  {
    image: slide3,
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
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper "
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="card container items-center justify-center  ">
                  <div className="relative">
                    <img
                      className="w-full h-[350px] max-sm:h-[82vh] object-fill"
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
                className="rounded max-sm:rounded-xl py-6 min-h-[400px] max-h-28"
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
        </div>
      </div>
    </>
  );
};

// AboutUs 3 Slide ---------------------------

export const Sliders3 = ({ slides2 = slidesData2 }) => {
  // const handleSlideChangeTransitionEnd = (swiper) => {
  //   const slides = swiper.slides;
  //   const activeIndex = swiper.activeIndex;
  //   slides.forEach((slide) => {
  //     slide.style.backgroundColor = 'rgba(0, 0, 0, 0.28)';
  //   });

  //   slides[activeIndex].style.backgroundColor = 'rgba(35, 85, 77, 1)';
  // };
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
                <div className="card container items-center justify-center">
                  <div className="items-center text-center text-white">
                    <div className="m-auto items-center flex justify-center">
                      <img
                        className="h-[300px] w-[300px] object-fill rounded-full mb-2"
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

export const CompainedSlider2 = ({ slides2 = slidesData2 }) => {
  return (
    <>
      <div className="container  justify-center py-[40px] max-sm:py-[90px] max-md:py-[90px] max-lg:py-[90px] px-8 relative">
        <div>
          <div className="flex lg:visible sm:invisible max-sm:invisible">
            <img
              className="w-[100%] xl:h-[230px] lg:h-[300]  "
              src={bgint}
              alt=""
            />
          </div>

          <Swiper
            // slidesPerView={3}
            spaceBetween={5}
            loop={true}
            loopFillGroupWithBlank={true}
            // centeredSlides={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: true,
            }}
            // navigation={true}

            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 3,
              },
              1023: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper  absolute lg:top-[-160px] sm:top-[-250px] max-sm:top-[-250px] "
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/Vector (11).png)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backdropFilter: "80%",
            }}
          >
            {slides2.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="rounded max-sm:rounded-xl	 bg-red-600 bg-opacity-0"
              >
                <div className="card container ">
                  <div className=" text-center text--gray-700">
                    <div className=" flex justify-center">
                      <img
                        className="h-[125px] w-[125px] object-fill rounded-full mb-2"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>

                    <div className="px-2 top-[90px] lg:mt-[50px]">
                      <h1 className="text-xl text-gray-700">{slide.title}</h1>
                      <h1 className="text-sm font-thin text-gray-700 mt-2">
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
