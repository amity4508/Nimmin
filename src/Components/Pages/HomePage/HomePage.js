import React from "react";

import { Sliders2 } from "../../Swipers/Sliders";
import { Sliders3 } from "../../Swipers/Sliders";
import {
  slidesDataheader1,
  slidesDataheader2,
  slidesDataheader3,
  slidesDataheader4,
  slidesDataheader5,
  slidesDataheaderLiquid1,
  slidesDataheaderLiquid2,
  slidesDataheaderVormi2,
  slidesDataheaderVormi3,
} from "../SliderData";

export const Homepage = () => {
  return (
    <>
      {/* vermiCompost  */}
      <div
        className="mt-0 xl:px-24 md:px-24 sm:px-5 py-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8, 41, 35, 0.8), rgba(38, 175, 124, 0.8)), url(${process.env.PUBLIC_URL}/bgImg2.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="py-5 px-5 ">
            <h1 className=" text-2xl heading1  ">Vermicompost</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
          </div>
          <Sliders3 slides2={slidesDataheader1} />
        </div>
      </div>

      <div
        className="mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8, 41, 35, 0.8), rgba(38, 175, 124, 0.8)), url(${process.env.PUBLIC_URL}/bgImg2.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Your content goes here */}
        <div className="container mx-auto">
          <Sliders3 slides2={slidesDataheaderVormi2} />
        </div>
      </div>

      <div
        className="mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8, 41, 35, 0.8), rgba(38, 175, 124, 0.8)), url(${process.env.PUBLIC_URL}/bgImg2.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Your content goes here */}
        <div className="container mx-auto">
          <Sliders3 slides2={slidesDataheaderVormi3} />
        </div>
      </div>

      {/* Sliders2 ---- Brooms---------------------------------------*/}
      <div
        className="mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg3.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="py-5 px-5">
            <h1 className="text-2xl heading1">Housekeeping Brush Fiber</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2"></p>
          </div>
          <Sliders2 slides2={slidesDataheader2} />
        </div>
      </div>
      {/* broom2 */}

      <div
        className="mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg3.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <Sliders2 slides2={slidesDataheader3} />
        </div>
      </div>
      {/* -- */}

      <div
        className="mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg3.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <Sliders2 slides2={slidesDataheader4} />
        </div>
      </div>

      <div
        className="mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg3.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <Sliders2 slides2={slidesDataheader5} />
        </div>
      </div>

      {/* Slider header 3  Liquid -----------------Liquidf Poshan---------------------------------------------------*/}

      <div
        className=" mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg4.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="py-5 px-5 ">
            <h1 className=" text-2xl heading1  ">Liquid Poshan</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
          </div>
          <Sliders2 slides2={slidesDataheaderLiquid1} />
        </div>
      </div>
      {/* liquid 2 */}
      <div
        className=" mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg4.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="py-5 px-5 ">
            <h1 className=" text-2xl heading1  ">Liquid Potion</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
          </div>
          <Sliders2 slides2={slidesDataheaderLiquid2} />
        </div>
      </div>

      <div
        className=" mt-0 xl:px-24 md:px-24 sm:px-5 pb-6 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8, 41, 35, 0.7), rgba(38, 175, 124, 0.3)), url(${process.env.PUBLIC_URL}/bgImg5.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="py-5 px-5 ">
            <h1 className=" text-2xl heading1 ">Wormin</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
          </div>

          <Sliders2 slides2={slidesDataheader1} />
        </div>
      </div>
    </>
  );
};
