
import React, { useEffect } from "react"
import { GalleryContent } from "./GalaryContent"

export const Gallery = () =>{
    useEffect(() => {
        console.log("Component mounted, scrolling to top");
        window.scrollTo(0, 0);
      }, []);
    return(
        <h1>
         <div className="Gallery ">
         <GalleryContent/>
         </div>
        </h1>
    )
}