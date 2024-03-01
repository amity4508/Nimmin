import React from "react";
import { Initiativescompo1 } from "./InitiativesCompo1";
import { Initiativescompo2 } from "./InitiativesCompo2";
import { Initiativescompo3 } from "./InitiativesCompo3";
import {
  InitSlide4Data,
  InitiativeSlide1,
} from "../SliderData";
import {
  Sliders4,
} from "../../Swipers/Sliders";
import { InitSlider4 } from "./InitativeSliders/InitSlider4";
export const Initiatives = () => {
  return (
    <section className="initiative ">
      <div className="container mx-auto">
        <Sliders4 slides2={InitiativeSlide1} />
        <Initiativescompo1 />
        </div>
        <Initiativescompo2 />
        <div className="container mx-auto relative top-[-130px]">
        <Initiativescompo3 />
            </div>
            <InitSlider4 slides2={InitSlide4Data}/>

    </section>
  );
};



