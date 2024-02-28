import React from "react";
import initImg from "../../Assets/Images/mainImg/Pexels Photo by Katarzyna Modrzejewska.png";
import joinHands2 from "../../Assets/Images/iconImg/Vector (7).png";

import { CompainedSlide} from "../../Swipers/Sliders";
import {
    CompainedSlide1,
  } from "../SliderData";
  
export const Initiativescompo1 = () => {
    return (
      <>
        <div
          className=" container mt-0  md:px-24 sm:px-5 py-6"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bgslider.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backdropFilter: "80%",
          }}
        >
          <div className=" flex  lg:flex-row sm:flex-col ">
            <div className="initComp1Left relative lg:w-1/3 sm:w-full max-sm:w-full ">
              <div>
                {" "}
                <img className="lg:h-[450px] sm:w-[full] " src={initImg} alt="" />
              </div>
  
              <div className="flex justify-end absolute bottom-[60px] right-[30px]">
                <div className="flex flex-col items-center bg-blue-600 py-1 px-2 rounded ">
                  <h1 className="text-white text-sm text-start">Join Hands</h1>
                  <img className="h-[15px] w-[23px]" src={joinHands2} alt="" />
                </div>
              </div>
            </div>
            <div className="initComp1Right lg:w-2/3 sm:w-full max-sm:w-full  items-center bg-black bg-opacity-70 px-10 rounded ">
              <div className="">
                <div className=" text-white  text-justify mt-6 ">
                  <h1 className="text-white text-center text-3xl mb-5">
                    Heading H2
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris viverra tortor dolor, vel tempor lectus tempor ut.
                    Vivamus et ornare neque, id tincidunt ante. Suspendisse eget
                    bibendum massa. Fusce neque sapien, porta et eros ut, bibendum
                    varius tortor. Donec efficitur dolor in est venenatis, at
                    egestas dolor fringilla. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris viverra tortor dolor, vel
                    tempor lectus tempor ut. Vivamus et ornare neque, id tincidunt
                    ante. Suspendisse eget bibendum massa. Fusce neque sapien,
                    porta et eros ut, bibendum varius tortor. Donec efficitur
                    dolor in est venenatis, at egestas dolor fringilla.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Mauris viverra
                    tortor dolor, vel tempor lectus tempor ut. Vivamus et ornare
                    neque, id tincidunt ante. Su
                  </p>
                </div>
                <div className="compained">
                  <p className="text-white mt-6">Accompanied By:</p>
  
                  <CompainedSlide slides2={CompainedSlide1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };