import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import slide3 from "../Assets/Images/mainImg/mobilebg.jpg";

export const OfferingsCompo1 = () => {
  const handleButtonClick = () => {
    // Your button click logic here
    console.log("Button Clicked!");
  };
  const card1Data = [
    { key: 1, imageSrc: slide3, buttonText: "LoremIpsum" },
    { key: 2, imageSrc: slide3, buttonText: "LoremIpsum" },
    { key: 2, imageSrc: slide3, buttonText: "LoremIpsum" },
    { key: 2, imageSrc: slide3, buttonText: "LoremIpsum" },
    { key: 2, imageSrc: slide3, buttonText: "LoremIpsum" },
    { key: 2, imageSrc: slide3, buttonText: "LoremIpsum" },
  ];

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 mx-auto">
      {card1Data.map((card) => (
        <div key={card.id} className="col-span-1">
          <div className="flex flex-col items-center p-4 rounded ">
            <img
              src={card.imageSrc}
              alt="Card"
              className=" max-w-xs rounded-full mb-4 w-[160px] h-[160px] "
            />
            <button
              onClick={handleButtonClick}
              className="flex items-center px-4 py-1 text-gray-700 rounded-full border-2  cursor-pointer btn-bg"
            >
              {card.buttonText}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// ---------------------

// export const Gallery = () => {
//   const handleButtonClick = () => {
//     // Your button click logic here
//     console.log("Button Clicked!");
//   };
//   const InitCard1Data = [
//     { key: 1, imageSrc: slide3, buttonText: "initiveCard" },
//     { key: 2, imageSrc: slide3, buttonText: "initiveCard" },
//     { key: 2, imageSrc: slide3, buttonText: "initiveCard" },

//   ];

//   return (
//     <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4 mx-auto">
//       {InitCard1Data.map((card) => (
//         <div key={card.id} className="col-span-1">
//           <div className="flex flex-col items-center p-4 rounded ">
//             <img
//               src={card.imageSrc}
//               alt="Card"
//               className=" max-w-xs rounded-full mb-4 w-[300px] h-[300px] "
//             />
//             <button
//               onClick={handleButtonClick}
//               className="flex items-center px-4 py-1 text-gray-700 rounded-full border-2  cursor-pointer btn-bg"
//             >
//               {card.buttonText}
//               <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

