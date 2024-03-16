import React from "react";
import {  InitiativeSlider2 } from "../../Swipers/Sliders";
import { InitiativesSlide2 } from "../SliderData";

export const Initiativescompo2 = () => {
    return (
      <>
        <div>
          {/* Init for Small screen  max-sm */}
          <InitiativeSlider2 slides2={InitiativesSlide2} />

        </div>
      </>
    );
  };