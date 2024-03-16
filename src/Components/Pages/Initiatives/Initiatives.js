import React from "react";
import { Initiativescompo1 } from "./InitiativesCompo1";
import { Initiativescompo2 } from "./InitiativesCompo2";
import { Initiativescompo3 } from "./InitiativesCompo3";
import {
  InitSlide1,
  InitSlide2,
  InitSlide4Data,
  InitiativeSlide1,
} from "../SliderData";
import { Sliders4 } from "../../Swipers/Sliders";
import { InitSlider4 } from "./InitativeSliders/InitSlider4";
import { InitSlider1 } from "./InitativeSliders/InitSlider1";
import { InitSlider2 } from "./InitativeSliders/InitSlider2";
export const Initiatives = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Sliders4 slides2={InitiativeSlide1} />
      </div>

      <Initiativescompo1 />
      <Initiativescompo2 />
      {/*  for small screen slider  Initiative */}
      <div className=" relative max-sm:top-[280px] xl:hidden">
        <div
          className=""
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg5.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <InitSlider1 slides2={InitSlide1} />
        </div>
        {/* ----------------------------------------------------------- */}

        <div className=""
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg5.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="pb-5 px-10">
            <h1 className="text-2xl heading1">Housekeeping Brush Fiber</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2"></p>
          </div>
          <InitSlider2 slides2={InitSlide2} />
        </div>

        <div
          className=""
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg8.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="py-5 px-10">
            <h1 className="text-2xl heading1">Housekeeping Brush Fiber</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2"></p>
          </div>
          <InitSlider2 slides2={InitSlide2} />
        </div>
      </div>
      <div className="container mx-auto relative top-[-130px] max-sm:hidden">
        <Initiativescompo3 />
      </div>
      <div className="sm:hidden max-sm:hidden xl:block mt-[400px]  ">
        <InitSlider4 slides2={InitSlide4Data} />
      </div>
    </div>
  );
};
