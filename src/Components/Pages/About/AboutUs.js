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
    {/* about AboutDetails  */}
      <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-16 bg-white relative "
           style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL}/bgAbout.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed", 
        }}>
          <div className="container  mx-auto">
            <div>
              <AboutDetails />
            </div>
          </div>
        </div>

        {/*   About Slider  */}
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
            <h1 className=" text-2xl heading1  ">Nimmin Products</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>  
            <Sliders3 slides2={AboutUsSlide1} />
          </div>
        </div>

        {/* liquid poshan  */}
      <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-8 bg-white relative "
           style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${process.env.PUBLIC_URL}/bgImg12.png)`,
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

 {/* varmi Compost */}
        <div
          className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-8 relative"
          // style={{backgroundImage:"linear-gradient(to right, rgba(35, 85, 77, 1) , rgba(38, 178, 146, 1))",}}>
    
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL}/bgImg5.png)`,
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

        {/* About Brooms */}
        <div className=" mt-0 xl:px-24 md:px-24 sm:px-5 py-8 bg-white relative "
           style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL}/bgImg8.png)`,
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

      


      </section>
    </>
  );
};

export const AboutDetails = () => {
  return (
    <>
      <div className="container mx-auto  ">
      <div className="py-5 " >
            <h1 className=" text-2xl heading1  ">About US</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>  

        <div className="aboutComp2 flex max-sm:flex-col items-center gap-5  ">
          <div className=" max-sm:w-full max-sm:px-5 text-white  max-sm:order-2 ">
            <h1 className="xl:text-2xl max-sm:text-lg sm:text-xl">
            Nimmin “believes in crafting sustainable solution” with priorities of greener and healthier planet. We bring a essence of transforming agricultural waste into valuable resource. With our commitment to environmental stewardship, we harness discarded banana byproduct to create innovative solution. 
            </h1>
          </div>
          {/* <div className="w-3/6 max-sm:w-full max-sm:order-1 ">
            <div>
              <img
                className="xl:h-[390px] xl:w-[400px] max-sm:h-[300px] max-sm:w-[300px]  rounded-full mx-auto"
                src={about9}
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

// Vormin Compose
export const AboutCompo2 = () => {
  return (
    <>
      <div className="container mx-auto  ">
      <div className="py-5 " >
            <h1 className=" text-2xl heading1  ">Vermicompost</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>  

        <div className="aboutComp2 flex max-sm:flex-col sm:flex-col max-md:flex-col lg:flex-row   items-center gap-5  ">
          <div className="lg:w-4/6 sm:w-full md:w-full max-sm:w-full max-sm:px-5   max-sm:order-2 sm:order-2 text-white ">
            <h1 className="text-xl ">
            Nimmin Organic Vermicompost Fertilizer for plants and home gardening 2 Kg - Plant based vermi compost manure - 100% Organic Fertilizer Enriched with all essential nutrients - 2 Pack (1Kg Each)
            </h1>
         <div className="mt-5">
         <ul className=" list-disc px-5">
         <li > Vermicompost for plants home garden</li>
            <li>Prepared using organic waste and dung in a specific proportion</li>
            <li>Soil Enhancer - Enhance soil quality, Structure and texture for optimum absobrtion of nutrients</li>
            <li>Natural catalyst - Improves the Water holding capacity of soil that helps moister retention</li>
            <li>Yield Multiplier - Aids in plant output and seed germination</li>
            <li>Super Organic - Encourage Healthy living by creating chemical free bio organic food</li>
            <li>Growth Promoter - Encourages optimal plant growth by offering vital nutrients</li>
            <li>Growth Promoter - Encourages optimal plant growth by offering vital nutrients</li>
            <li>Immunity Booster - Reduce privalance of agriculture illnesses</li>
         </ul>
         </div>
              </div>
          <div className="sm:w-full md:w-full lg:w-3/6 max-sm:w-full max-sm:order-1">
            <div>
              <img
                className="xl:h-[390px] xl:w-[400px] lg:h-[390px] lg:w-[400px] md:h-[440px] md:w-[450px] max-sm:h-[300px] max-sm:w-[300px] rounded-full mx-auto "
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


// Broom 
export const AboutCompo3 = () => {
  return (
    <>
      <div className="container mx-auto text-black ">
        <div className="flex justify-end">
        <h1 className=" text-2xl heading1 py-5 ">Housekeeping Brush</h1>
        <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
        </div>

        <div className="aboutComp2 flex max-sm:flex-col sm:flex-col max-md:flex-col lg:flex-row   items-center gap-5  ">
        <div className="lg:w-4/6 sm:w-full md:w-full max-sm:w-full max-sm:px-5   max-sm:order-2 ">
            <div className=" absolute right-[28px] xl:top-[0px] ">
              <div class="half-circle	 max-sm:rotate-[130deg] "></div>
            </div>
            <h1 className="text-white text-2xl">
            Nimmin Housekeeping Brush Fiber Wet and Dry Multi use Brush - Flat and Strong Fiber for Best Result - Ergonomic Handle and Light Weight - Pack of 5 (Beige)
            </h1>
           <div className="mt-5 px-5">
           <ul className=" list-disc text-white">
              <li>Works in Dry & Wet Conditions</li>
              <li>High Quality cleaning Brooms & Brushes</li>
              <li>All purpose dusting & cleaning Brushx</li>   
              <li>Cleans Oily and Greasy surfaces with ease</li>    
              <li>100% Decomposable</li>    
            </ul>
           </div>
          </div>
          <div className="sm:w-full md:w-full lg:w-3/6 max-sm:w-full max-sm:order-1 ">
            <div>
              <img
                className="xl:h-[390px] xl:w-[400px] lg:h-[390px] lg:w-[400px] md:h-[440px] md:w-[450px] max-sm:h-[300px] max-sm:w-[300px] rounded-full mx-auto "
                src={broo5}
                alt=""
              />
            </div>
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
            <h1 className=" text-2xl heading1  ">Liquid Poshan</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>  

        <div className="aboutComp2 flex max-sm:flex-col items-center gap-5  ">
          <div className="w-4/6 max-sm:w-full max-sm:px-5 text-white  max-sm:order-2 ">
         
            <h1 className="text-white text-xl">
            Lazy Gardener Liquid Poshan For Plant Food |Growth, Root Boost &amp; Plant Tonic Combo Plant Care Kit for Plant indoor Outdoor Home Garden| Plant Food Fertilizer for Green, Flowering Plants
            </h1>
           <div className="mt-5 px-5">
           <ul className=" list-disc text-white">
              <li>    Contains a unique combination of three specialized liquids that work together to restore and maintain the soil ecosystem for your plants.</li>
              <li>Each liquid is made from natural and eco-friendly ingredients, ensuring that it is safe for your plants and the environment.</li>
              <li>Perfect for all types of gardens, whether you have plants in pots or in the ground.</li>   
              <li>Easy to use - simply mix the liquids as per the instructions and apply to your soil regularly.</li>    
              <li>The Plant Care Kit by Lazy Gardener is a revolutionary solution that helps you create a balanced ecosystem for your plants, just like in nature.</li>    
            </ul>
           </div>
          </div>
          <div className="w-3/6 max-sm:w-full max-sm:order-1 ">
            <div>
              <img
                className="xl:h-[390px] xl:w-[400px] max-sm:h-[300px] max-sm:w-[300px]  rounded-full mx-auto"
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
