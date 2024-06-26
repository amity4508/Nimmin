import React from "react";
import joinHands3 from "../../Assets/Images/iconImg/Vector (11).png";
import intiComp3img1 from "../../../Components/Assets/Images/mainImg/Group 83.png";
import intiComp3Img2 from "../../../Components/Assets/Images/mainImg/Group 99.png";

import setting1 from "../../../Components/Assets/Images/mainImg/Group 91.png";
import setting2 from "../../../Components/Assets/Images/mainImg/Group 91 (1).png";
import setting3 from "../../../Components/Assets/Images/mainImg/Group 91 (2).png";
import setting4 from "../../../Components/Assets/Images/mainImg/Group 91 (3).png";
export const Initiativescompo3 = () => {
    return (
      <>
          
        <div className=" ini mt-0 xl:px-0 py-6  max-sm:hidden sm:hidden xl:block ">
          <div className="xl:relative xl:top-[260px] sm:top-[400px]">
            <div>
              <div className="flex xl:visible sm:invisible max-sm:invisible ">
                <img className="w-[100%] h-full  " src={intiComp3img1} alt="" />
              </div>
  
              {/* sec1  */}
              <div className="container px-20 flex justify-between absolute top-0 gap-16 max-sm:w-[0px]  max-sm:h-[0px]">
                <div className="w-2/6">
                  <img className="h-[170px]" src={intiComp3Img2} alt="" />
                </div>
  
                <div className="w-1/6 justify-between relative xl:top-[-130px] right-[150px]">
                  <button className="textgr text-base text-white rounded py-2 px-8 ">
                    Headline #0x{" "}
                  </button>
                  <h1 className="text-sm text-gray-500 mt-2 ">
                     High quality soil enrichment organic matter for all your vegetation needs
                  </h1>
                  <div className="relative top-[90px] sm:left-[0px] max-sm:-left-[0px] xl:left-[230px]">
                    <img className="h-[140px]" src={setting1} alt="" />
                  </div>
                </div>
  
                <div className="w-2/6 justify-between relative top-[-40px] px-6">
                  <h1 className="text-sm text-gray-500 ">
                    Soil Enhancer-: Enhances Soil quality, Structure, and texture.
                  </h1>
                  <div className="flex justify-end cursor-pointer">
                    <div className="flex items-center w-[100px] border border-green-600  flex-col rounded-full py-1 px-2">
                      <h1 className="text-green-800 text-sm text-start">
                        Join Hands
                      </h1>
                      <img
                        className="h-[15px] w-[23px]"
                        src={joinHands3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
  
              {/* sec2  */}
  
              <div className="container px-20 flex justify-between absolute top-[500px] gap-16 max-sm:w-[0px] max-sm:h-[0px] ">
                <div className="w-1/6 justify-between relative top-[-180px] right-[0px]">
                  <button className="textgr2 text-base text-white rounded py-2 px-8 ">
                    Headline #0x{" "}
                  </button>
                  <h1 className="text-sm text-gray-500 mt-2 ">
                   Natural Catalyst-: Improves the aeration and water-holding capacity
                  </h1>
                </div>
  
                <div className="w-2/6 relative top-[-130px] sm:left-[0px] max-sm:-left-[0px] xl:left-[250px]">
                  <img className="h-[140px]" src={setting2} alt="" />
                  <div className="relative top-[9px] sm:left-[0px] max-sm:-left-[0px] xl:left-[-300px]">
                    <img className="h-[140px]" src={setting3} alt="" />
                  </div>
                </div>
  
                <div className="w-1/6 justify-between relative top-[-180px] right-[0px]">
                  <button className="textgr2 text-base text-white rounded py-2 px-8 ">
                    Headline #0x{" "}
                  </button>
                  <h1 className="text-sm text-gray-500 mt-2 ">
                    Growth Promoters-: Encourages optimal plant growth by offering vital nutrients.
                  </h1>
                </div>
              </div>
  
              {/* sec3  */}
              <div className="container px-20 flex justify-between absolute top-[800px] gap-16 max-sm:w-[0px]  max-sm:h-[0px]">
                <div className="w-1/6 justify-between relative top-[-180px] right-[0]">
                  <h1 className="text-sm text-gray-500 mt-2 ">
                    Yield Multiplier -Adis in plant output and seed germination.
                  </h1>
                  <div className="relative top-[120px] sm:left-[0px] max-sm:-left-[0px] xl:left-[430px]">
                    <img className="h-[140px]" src={setting4} alt="" />
                  </div>
                </div>
  
                <div className="w-1/6 justify-between relative top-[0px] sm:left-[0px] max-sm:-left-[0px] xl:left-[340px]">
                  <button className="textgr2 text-base text-white rounded py-2 px-8 ">
                    Headline #0x{" "}
                  </button>
                  <h1 className="text-sm text-gray-500 mt-2 ">
                       Immunity Booster
                  </h1>
                  <p className="text-sm text-gray-500 mt-2">Reduces prevalence of agricultureal illnessess</p>
                </div>
  
                <div className="w-2/6 relative top-[-200px] sm:left-[0px] max-sm:-left-[0px] xl:left-[120px] ">
                  <img className="h-[160px]" src={intiComp3Img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
  
      </>
    );
  };