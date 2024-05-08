
import React, { useState, useEffect } from 'react';
import img1 from '../Assets/Images/mainImg/Group 2circlelogo.png'
import img2 from '../Assets/Images/mainImg/teacher cool (1).png'



export const Loader = () => {
  return (
    
     <div className="fixed flex-col top-0 left-0 w-full h-full flex gap-8 items-center justify-center bgcont bg-opacity-9 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-white-700">
      </div>
    
      <div className='px-3'>
      <img   src={img2} alt="Loading..." className=" h-[250px] max-sm:h-[250px]" />
      </div>

    </div>

  );
}

