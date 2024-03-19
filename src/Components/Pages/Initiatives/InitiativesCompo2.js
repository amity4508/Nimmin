import React from "react";
import {  InitiativeSlider2 } from "../../Swipers/Sliders";
import { InitiativesSlide2 } from "../SliderData";

export const Initiativescompo2 = () => {
    return (
      <>
        <div>

        <div className="pb-5 px-10">
            <h1 className="text-2xl text-gray-800 font-bold pt-3">  Why Choose IWT</h1>
            <p className="w-[50px] border-yellow-500 border-b-4 mt-2"></p>
          </div>
      
          {/* Init for Small screen  max-sm */}
          <InitiativeSlider2 slides2={InitiativesSlide2} />

        </div>
      </>
    );
  };