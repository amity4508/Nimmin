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
        <Initiativescompo1 />
      </div>
      <Initiativescompo2 />
      <div className=" relative max-sm:top-[-150px]">
        <InitSlider1 slides2={InitSlide1} />
        <InitSlider2 slides2={InitSlide2} />
      </div>
      <div className="container mx-auto relative top-[-130px] max-sm:hidden">
        <Initiativescompo3 />
      </div>
      <div className="sm:hidden max-sm:hidden xl:block">
        <InitSlider4 slides2={InitSlide4Data} />
      </div>
    </div>
  );
};
