import React from "react";
import initImg from "../../Assets/Images/mainImg/Pexels Photo by Katarzyna Modrzejewska.png";
import joinHands2 from "../../Assets/Images/iconImg/Vector (7).png";

import { CompainedSlide } from "../../Swipers/Sliders";
import { CompainedSlide1 } from "../SliderData";

export const Initiativescompo1 = () => {
  return (
    <>
      <div
        className=" mt-0  md:px-24 sm:px-5 py-12"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8, 41, 35, 0.8), rgba(38, 175, 124, 0.8)), url(${process.env.PUBLIC_URL}/bgImg11.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className=" flex  lg:flex-row sm:flex-col max-sm:flex-col">
          <div className="initComp1Left relative lg:w-1/3 sm:w-full max-sm:w-full ">
            <div>
              {" "}
              <img className=" lg:h-[450px] sm:w-[full] " src={initImg} alt="" />
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
                <h1 className="text-white text-center text-3xl mb-5">Nimmin</h1>
                <p className="text-sm">
                  Nimmin “believes in crafting sustainable solution” with
                  priorities of greener and healthier planet. We bring a essence
                  of transforming agricultural waste into valuable resource.
                  With our commitment to environmental stewardship, we harness
                  discarded banana byproduct to create innovative solution.
                </p>
                <br></br>
                <p>
                We introduce ourselves as an organization where every person, product and process exists to accentuate sustainable living. In other words, we make products and services which are “Basic Needs”, “Healthier”, “Safer”, “Smarter”, “Desirable” and most of all “ Highly Sustainable” for future generations. 
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
