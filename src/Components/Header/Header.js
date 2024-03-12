
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import bgImg1 from "../Assets/Images/mainImg/heroImg.png";
import bgImg2 from "../Assets/Images/mainImg/mobilebg.jpg";
import { Slider1 } from "../Swipers/Sliders";

import { slidesData } from "../Swipers/Sliders";

export const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const newBackgroundImage = window.innerWidth <= 1024 ? bgImg2 : bgImg1;
      setBackgroundImage(newBackgroundImage);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
 <div
  className="header xl:h-[95vh] items-center justify-center"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(35, 85, 77, 0.9), rgba(35, 85, 77, 0.5)), url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundAttachment:"fixed"
  }}

>
  {/* Your content goes here */}


        <div className="max-lg:hidden">
          <SocialMedia />
        </div>
        <div>
          <Navbar />
        </div>
        <div className=" ">
        <Slider1 slidesData={slidesData} />
        </div>
      </div>
    </>
  );
};


