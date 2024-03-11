import React from "react";

import slide3 from "../../Assets/Images/mainImg/heroImg.png";

export const GalleryContent = () => {
    const handleButtonClick = () => {
      // Your button click logic here
      console.log("Button Clicked!");
    };
    const InitCard1Data = [
     
                { 
                    key: 1,
                     imageSrc: slide3, 
                     title: "initiveCard",
                     desc: "m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                 },
                 { 
                    key: 1,
                     imageSrc: slide3, 
                     title: "initiveCard",
                     desc: "m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                 },
                 { 
                    key: 1,
                     imageSrc: slide3, 
                     title: "initiveCard",
                     desc: "m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                 },
                 { 
                    key: 1,
                     imageSrc: slide3, 
                     title: "initiveCard",
                     desc: "m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                 },
                 { 
                    key: 1,
                     imageSrc: slide3, 
                     title: "initiveCard",
                     desc: "m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                 },
                 


    ];
  
    return (
  <section className="container mx-auto px-5">
     <div className="py-5">
     <h1 className=" text-2xl   ">Header 1</h1>
            <p className="w-[100px] border-yellow-500 border-b-2 "></p>
     </div>
    
        <div className=" grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mx-auto mt-5  ">
    
    {InitCard1Data.map((card) => (
      <div key={card.id} className="col-span-1 cursor-pointer">

        <div className="flex flex-col items-start   ">
        <div className="overflow-hidden">
        <img
            src={card.imageSrc}
            alt="Card"
            className=" max-sm:w-[100vw] mb-4 sm:w-[100%]  3-[200px] transition duration-300 hover:scale-150 rounded-md"
          />
        </div>
          <h1
            onClick={handleButtonClick}
            className="flex  cursor-pointer text-xl font-semibold " >
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
  