import React from "react";

import  { Sliders2 } from "../Swipers/Sliders";
import { Sliders3 } from "../Swipers/Sliders"; 
import { slidesDataheader1 } from "./SliderData";

export const Homepage = () =>{
    return(
        <>
      <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-6"
         style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/heroImg.png`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}>
         <div className="container mx-auto">
         <div className="text-white text-xl text font-semibold tracking-widest border-b-2 border-yellow-500 w-[160px] max-sm:px-4 ">Header 1</div>
         <Sliders3 slides2={slidesDataheader1} />

         </div>
      </div>

      <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-6"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bgslider.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        }}>
         <div className="container mx-auto">
         <div className="text-white text-xl text font-semibold tracking-widest border-b-2 border-yellow-500 w-[160px] max-sm:px-4 ">Header 1</div>
         <Sliders2 slides2={slidesDataheader1} />

         </div>
      </div>

      <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-6"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bgslider.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        }}>
         <div className="container mx-auto">
         <div className="text-white text-xl text font-semibold tracking-widest border-b-2 border-yellow-500 w-[160px] max-sm:px-4 ">Header 1</div>
         <Sliders2 slides2={slidesDataheader1} />

         </div>
      </div>

      <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-6"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bgslider.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        }}>
         <div className="container mx-auto">
         <div className="text-white text-xl text font-semibold tracking-widest border-b-2 border-yellow-500 w-[160px] max-sm:px-4 ">Header 1</div>
         <Sliders2 slides2={slidesDataheader1} />

         </div>
      </div>
        </>
    )
} 
