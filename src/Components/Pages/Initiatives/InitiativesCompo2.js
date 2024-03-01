import React from "react";
import {  InitiativeSlider2 } from "../../Swipers/Sliders";
import { InitiativesSlide2 } from "../SliderData";

export const Initiativescompo2 = () => {
    return (
      <>
        <div
          className="mt-0   sm:px-5 xl:px-0 py-6"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Vector (11).png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backdropFilter: "80%",
          }}
        >
          {/* Init for Small screen  max-sm */}
          <div className="initComp1">
            <div className="compained">
              <p className="text-white mt-6">Accompanied By:</p>
              <InitiativeSlider2 slides2={InitiativesSlide2} />
            </div>
          </div>
        </div>
      </>
    );
  };