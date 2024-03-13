import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import slide3 from "../Assets/Images/mainImg/mobilebg.jpg";
import { OfferingsCompo1 } from "../Cards/card1";
import offringImg from "../../Components/Assets/Images/mainImg/Group 19.png"
import offringImg2 from "../../Components/Assets/Images/mainImg/image 43.png"
import offringImg3 from "../../Components/Assets/Images/mainImg/Group 19 (1).png"
import offringImg4 from "../../Components/Assets/Images/mainImg/Group 20.png"
import product1 from "../../Components/Assets/Images/mainImg/hero1.png"
import product1left from "../../Components/Assets/Images/mainImg/offerProd1.png"
import product2left from "../../Components/Assets/Images/NimminProduct/broomType1-8.png"
import  product2 from "../../Components/Assets/Images/NimminProduct/broom5.png"
import product3left from "../../Components/Assets/Images/NimminProduct/Liquid Potion3.jpeg"
import  product3 from "../../Components/Assets/Images/mainImg/hero3.png"







export const Offerings = () => {
  useEffect(() => {
    console.log("Component mounted, scrolling to top");
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mb-16">
        <OfferingsCompo1 />

        <OfferingCompo2 />
        <OfferingCompo3/>
        <OfferingCompo4/>
        <OfferingCompo5/>


      </div>
    </>
  );
};

export const OfferingCompo2 = () => {
  useEffect(() => {
    console.log("Component mounted, scrolling to top");
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className=" py-10 "
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to right, rgba(12, 187, 123, 1), rgba(8, 41, 35, 1))",
        // }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(35, 85, 77, 0.7), rgba(35, 85, 77, 0.5)), url(${process.env.PUBLIC_URL}/bgImg1.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed", 
      }}
      >
        <div className="container mx-auto">
          <div className="container  ">
            <div className="aboutComp2 flex max-lg:flex-col  gap-5   ">
              <div className="w-2/6 max-lg:w-full   max-sm:order-1 ">
                <div className=" z-10 ">
                  <img
                    className=" max-sm:w-[250px] h-[400px] rounded-xl mx-auto "
                    src={slide3}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full z-0 max-sm:w-full  max-sm:px-5 text-white  max-sm:order-2 ">
                <div className="xl:mb-6 max-sm:mb-16 max-md:mb-16 max-lg:mb-16  lg:mt-10   ">
                  <h1 className="text-white text-xl text font-semibold tracking-widest  max-sm:px-4 lg:text-start max-sm:text-center max-md:text-center max-lg:text-center ">
                    Header H2
                  </h1>
                </div>

                <div className="relative lg:left-[-120px] md:left-[0px] xl:p-4 rounded-3xl xl:pl-[150px] lg:pl-[130px]  md:pl[0px]  shadow-md bg-green-200 bg-opacity-5  max-sm:pt-[80px]  max-md:pt-[80px] md:mt-0  max-md:top-[-140px] max-lg:top-[-140px] md:pt-[80px] pb-[20px] ">
                  <h1 className="mt-4  px-4 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris viverra tortor dolor, vel tempor lectus tempor ut.
                    Vivamus et ornare neque, id tincidunt ante. Suspendisse eget
                    bibendum massa. Fusce neque sapien, porta et eros ut,
                    bibendum varius tortor. Donec efficitur dolor in est
                    venenatis, at egestas dolor fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Mauris viverra tortor
                    dolor, vel tempor lectus tempor ut. Vivamus et ornare neque,
                    id tincidunt ante. Suspendisse eget bibendum massa. Fusce
                    neque sapien, porta et eros ut, bibendum varius tortor.
                    Donec efficitur dolor in est venenatis, at egestas dolor
                    fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Mauris viverra tortor dolor, vel tempor lectus tempor
                    ut. Vivamus et ornare neque, id tincidunt ante. Suspendisse
                    eget bibendum massa. Fusce neque sapien, porta et eros ut,
                    bibendum varius tortor. Donec efficitur dolor in est
                    venenatis, at egestas dolor fringilla.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Mauris viverra tortor
                    dolor, vel tempor lectus tempor ut. Vivamus et ornare neque,
                    id tincidunt ante. Suspendisse eget bibendum massa.
                  </h1>
                  <button className="flex items-center px-4 py-1 mt-5   bg-green-700 text-white rounded-full border-2  cursor-pointer btn-bg mx-auto  ">
                    LoremIpsum
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// -------------1------------------
export const OfferingCompo3 = () =>{
  return(
   <div className="flex justify-center" >
      <div className="container offringCompo3  bg-white flex max-lg:flex-col  mt-10 px-4 max-sm:gap-8 sm:gap-8" >
      <div className="compo3-left lg:w-1/2 sm:w-full  max-md:w-full justify-center">
       <div className="flex justify-center">
       <img className="md:h-[400px] md:w-[400px]   xl:h-[400px] xl:w-[400px] rounded-full max-sm:h-[380px] max-sm:w-[380px] max-md:h-[350px] max-md:w-[350px]" src={product1left} alt="" />       </div>
        </div>

        <div className="container compo3-right lg:w-1/2 max-sm:w-full max-md:w-full max-lg:w-full">
          <div className="flex gap-0 items-center xl:justify-start lg:justify-center md:justify-center   max-md:flex-col ">
            <div className=" z-10  " >
              <img className="h-[300px] sm:w-[100%] md:max-w-[330px] rounded" src={product1} alt="" />
              </div>
            <div className=" text-gray-700 max-sm:py-3 md:w-[220px] md:h-[220px] rounded-full outline2  relative right-[30px]   flex md:items-center  max-sm:items-center [50px]"> 
            <h2 className="pName max-sm:text-3xl sm:text-3xl max-sm:mt-3 sm:mt-3 md:mt-0 md:text-base z-10 ml-[35px] font-semibold"> Vermicompost </h2>
            </div>
          </div>

          <div className="flex   max-sm:justify-center sm:justify-center md:justify-start mt-5">
         <div className="flex gap-5 max-sm:flex-wrap"
         > <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  </div>
                
               
                 
          </div>
          <div className="py-2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae libero repellendus minima itaque, est debitis rem voluptate sunt maiores, voluptatibus facere voluptates fugit voluptatem deleniti magni. Nulla et vel nemo?</p>
            <h1 className="text-green-600 lg:text-end max-sm:text-start font-semibold" >Learn More >></h1>
          </div>

        </div>

     </div>
   </div>
  );
}

// --------------------------------

export const OfferingCompo4 = () =>{
  return(
   <div className="flex justify-center">
      <div className="container offringCompo3  bg-white flex max-lg:flex-col  mt-10 px-4 max-sm:gap-8 sm:gap-8">
      <div className="compo3-left lg:w-1/2 sm:w-full  max-md:w-full justify-center">
       <div className="flex justify-center">
       <img className="md:h-[400px] md:w-[400px]   xl:h-[400px] xl:w-[400px] rounded-full max-sm:h-[380px] max-sm:w-[380px] max-md:h-[350px] max-md:w-[350px]" src={product2left} alt="" />
       </div>
        </div>

        <div className="container compo3-right lg:w-1/2 max-sm:w-full max-md:w-full max-lg:w-full">
        <div className="flex gap-0 items-center xl:justify-start lg:justify-center md:justify-center   max-md:flex-col ">
            <div className=" z-10  " ><img className="h-[300px] sm:w-[100%] md:max-w-[330px] rounded" src={product2} alt="" /></div>
            <div className=" text-gray-700 max-sm:py-3 md:w-[220px] md:h-[220px] rounded-full outline2  relative right-[30px]   flex md:items-center  max-sm:items-center [50px]"> 
            <h2 className="pName max-sm:text-3xl sm:text-3xl max-sm:mt-3 sm:mt-3 md:mt-0 md:text-base z-10 ml-[35px] font-semibold"> Vermicompost </h2>
            </div>
          </div>

          <div className="flex   max-sm:justify-center sm:justify-center md:justify-start mt-5">
         <div className="flex gap-5 max-sm:flex-wrap"
         > <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  </div>
                
               
                 
          </div>
          <div className="py-2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae libero repellendus minima itaque, est debitis rem voluptate sunt maiores, voluptatibus facere voluptates fugit voluptatem deleniti magni. Nulla et vel nemo?</p>
            <h1 className="text-green-600 lg:text-end max-sm:text-start font-semibold" >Learn More >></h1>
          </div>

        </div>

     </div>
   </div>
  );
}

// ----------------------

export const OfferingCompo5 = () =>{
  return(
  <div className="flex justify-center">
       <div className="container offringCompo3  bg-white flex max-lg:flex-col  mt-10 px-4 max-sm:gap-8 sm:gap-8">
      <div className="compo3-left lg:w-1/2 sm:w-full  max-md:w-full justify-center">
       <div className="flex justify-center">
       <img className="md:h-[400px] md:w-[400px]   xl:h-[400px] xl:w-[400px] rounded-full max-sm:h-[380px] max-sm:w-[380px] max-md:h-[350px] max-md:w-[350px]" src={product3left} alt="" />       </div>
        </div>

        <div className="container compo3-right lg:w-1/2 max-sm:w-full max-md:w-full max-lg:w-full">
          <div className="flex gap-0 items-center xl:justify-start lg:justify-center md:justify-center   max-md:flex-col ">
          <div className=" z-10  " ><img className="h-[300px] sm:w-[100%] md:max-w-[330px] rounded" src={product3} alt="" /></div>
            <div className=" text-gray-700 max-sm:py-3 md:w-[220px] md:h-[220px] rounded-full outline2  relative right-[30px]   flex md:items-center  max-sm:items-center [50px]"> 
            <h2 className="pName max-sm:text-3xl sm:text-3xl max-sm:mt-3 sm:mt-3 md:mt-0  md:text-base z-10 ml-[30px] font-semibold "> Product Name </h2>
            </div>
          </div>

          <div className="flex   max-sm:justify-center sm:justify-center md:justify-start mt-5">
         <div className="flex gap-5 max-sm:flex-wrap"
         > <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  <button className="flex   px-4  py-1 text-gray-600 hover:bg-green-700 hover:text-white rounded-full border-2  cursor-pointer btn-bg  ">
                    Use it 
                    <i class="bi bi-cart"></i>
                  </button>
                  </div>
                
               
                 
          </div>
          <div className="py-2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae libero repellendus minima itaque, est debitis rem voluptate sunt maiores, voluptatibus facere voluptates fugit voluptatem deleniti magni. Nulla et vel nemo?</p>
            <h1 className="text-green-600 lg:text-end max-sm:text-start font-semibold" >Learn More >></h1>
          </div>

        </div>

     </div>
  </div>
  );
}
