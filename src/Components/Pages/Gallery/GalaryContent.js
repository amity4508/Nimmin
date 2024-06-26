import React from "react";
import { InitCard1Data } from "./GalleryData"; 
export const GalleryContent = () => {
    const handleButtonClick = () => {
      // Your button click logic here
      console.log("Button Clicked!");
    };
  
    return (
  <section className="container mx-auto px-5">
     <div className="py-5 " >
            <h1 className=" text-3xl font-bold  text-gray-600 ">Vermicompost</h1>
             <p className="w-[50px] border-yellow-500 border-b-4 mt-2  "></p>
            </div>
    
        <div className=" grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  mx-auto mt-5  ">
    
    {InitCard1Data.map((card) => (
      <div key={card.id} className="col-span-1 cursor-pointer mb-5 shadow-lg">

        <div className="flex flex-col items-start w-full p-4">
        <div className="overflow-hidden">
        <img
            src={card.imageSrc}
            alt="Card"
            className=" max-sm:w-[100vw] min-h-[250px] max-h-[250px] w-[100vw]   mb-4 sm:w-[100vw]  3-[200px] transition duration-300 hover:scale-110 rounded-md"
          />
        </div>
          <h1
            onClick={handleButtonClick}
            className="flex  cursor-pointer text-xl font-semibold mb-2" >
            {card.title}

          </h1>
          <p
            onClick={handleButtonClick}
            className="flex items-center  text-sm  text-gray-500"
          >
            {card.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
  </section>
    );
  };
  