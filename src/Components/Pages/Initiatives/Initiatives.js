import React from "react";
import { Initiativescompo1 } from "./InitiativesCompo1";
import { Initiativescompo2 } from "./InitiativesCompo2";
import { Initiativescompo3 } from "./InitiativesCompo3";
import {
  InitiativeSlide1,
} from "../SliderData";
import {
  Sliders4,
} from "../../Swipers/Sliders";
export const Initiatives = () => {
  return (
    <section className="initiative">
      <div className="container mx-auto">
        <Sliders4 slides2={InitiativeSlide1} />
        <Initiativescompo1 />
        <Initiativescompo2 />
        <Initiativescompo3 />

        
      </div>
    </section>
  );
};



