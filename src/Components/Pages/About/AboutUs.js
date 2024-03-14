import React from "react";
import { Sliders3 } from "../../Swipers/Sliders";
import { AboutUsSlide1 } from "./AboutUsData";
import about9 from "../../../Components/Assets/Images/mainImg/about9.png"
import about10 from "../../../Components/Assets/Images/mainImg/about10.png"
import broo5 from "../../../Components/Assets/Images/NimminProduct/broom5.png"
import liquidType3_1 from "../../../Components/Assets/Images/NimminProduct/liquidType3.1.png"


export const AboutUs = () => {
  return (
    <>
      <section className="AboutUs mb-10">
        <div
          className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-6"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 85, 77, 0.5), rgba(35, 85, 77, 0.3)), url(${process.env.PUBLIC_URL}/bgImg9.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed", 
        }}>
        
          <div className="container mx-auto">
          <div className="py-5 " >
            <h1 className=" text-2xl heading1  ">About Us</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>  
            <Sliders3 slides2={AboutUsSlide1} />
          </div>
        </div>

        <div
          className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-8 relative"
          // style={{backgroundImage:"linear-gradient(to right, rgba(35, 85, 77, 1) , rgba(38, 178, 146, 1))",}}>
    
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 85, 77, 0.5), rgba(35, 85, 77, 0.3)), url(${process.env.PUBLIC_URL}/bgImg5.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed", 
        }}>
          <div className="container mx-auto">
            <div className=" absolute left-0 bottom-[0px]">
              <div class="half-circle	 rotate-[210deg]  mb-[80px]"></div>
            </div>
            <div>
              <AboutCompo2 />
            </div>
          </div>
        </div>

        {/* compo 3  */}
        <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-8 bg-white relative "
           style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${process.env.PUBLIC_URL}/bgImg8.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed", 
        }}>
          <div className="container  mx-auto">
            <div>
              <AboutCompo3 />
            </div>
          </div>
        </div>

        <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-8 bg-white relative "
           style={{
            backgroundImage: `linear-gradient(to bottom, rgba(35, 85, 77, 0.5), rgba(35, 85, 77, 0.3)), url(${process.env.PUBLIC_URL}/bgImg12.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed", 
        }}>
          <div className="container  mx-auto">
            <div>
              <AboutCompo4 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const AboutCompo2 = () => {
  return (
    <>
      <div className="container mx-auto  ">
      <div className="py-5 " >
            <h1 className=" text-2xl heading1  ">About US</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>  

        <div className="aboutComp2 flex max-sm:flex-col items-center gap-5  ">
          <div className="w-4/6 max-sm:w-full max-sm:px-5 text-white  max-sm:order-2 ">
            <h1 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              viverra tortor dolor, vel tempor lectus tempor ut. Vivamus et
              ornare neque, id tincidunt ante. Suspendisse eget bibendum massa.
              Fusce neque sapien, porta et eros ut, bibendum varius tortor.
              Donec efficitur dolor in est venenatis, at egestas dolor
              fringilla.
            </h1>
          </div>
          <div className="w-3/6 max-sm:w-full max-sm:order-1 ">
            <div>
              <img
                className="xl:h-[390px] xl:w-[400px] max-sm:h-[300px] max-sm:w-[300px]  rounded mx-auto"
                src={about9}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const AboutCompo3 = () => {
  return (
    <>
      <div className="container mx-auto text-black ">
        <div className="flex justify-end">
        <h1 className=" text-2xl heading1 py-5 ">About US</h1>
        <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>

        </div>


        <div className="aboutComp2 flex max-sm:flex-col items-center gap-5  ">
          <div className="w-3/6 max-sm:w-full max-sm:order-1 ">
            <div>
              <img
                className="xl:h-[390px] xl:w-[400px] max-sm:h-[300px] max-sm:w-[300px] rounded mx-auto "
                src={broo5}
                alt=""
              />
            </div>
          </div>
          <div className="w-4/6 max-sm:w-full max-sm:px-5   max-sm:order-2 ">
            <div className=" absolute right-[28px] xl:top-[0px] ">
              <div class="half-circle	 max-sm:rotate-[130deg] "></div>
            </div>
            <h1 className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              viverra tortor dolor, vel tempor lectus tempor ut. Vivamus et
              ornare neque, id tincidunt ante. Suspendisse eget bibendum massa.
              Fusce neque sapien, porta et eros ut, bibendum varius tortor.
              Donec efficitur dolor in est venenatis, at egestas dolor
              fringilla.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};


export const AboutCompo4 = () => {
  return (
    <>
      <div className="container mx-auto  ">
      <div className="py-5 " >
            <h1 className=" text-2xl heading1  ">About US</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>  

        <div className="aboutComp2 flex max-sm:flex-col items-center gap-5  ">
          <div className="w-4/6 max-sm:w-full max-sm:px-5 text-white  max-sm:order-2 ">
            <h1 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              viverra tortor dolor, vel tempor lectus tempor ut. Vivamus et
              ornare neque, id tincidunt ante. Suspendisse eget bibendum massa.
              Fusce neque sapien, porta et eros ut, bibendum varius tortor.
              Donec efficitur dolor in est venenatis, at egestas dolor
              fringilla.
            </h1>
          </div>
          <div className="w-3/6 max-sm:w-full max-sm:order-1 ">
            <div>
              <img
                className="xl:h-[390px] xl:w-[400px] max-sm:h-[300px] max-sm:w-[300px]  rounded mx-auto"
                src={liquidType3_1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
