
import React from 'react';
import middLogo from "../../../Components/Assets/Images/mainImg/Nimmin logo emblem with circle.png";
import linkDinIcon from "../../../Components/Assets/Images/iconImg/Frame 87.png"
import { Link } from "react-router-dom";

import instaIcon from "../../../Components/Assets/Images/iconImg/Group 112.png"
import whatsappIcon from "../../../Components/Assets/Images/iconImg/Group 113.png"
import fbIcon from "../../../Components/Assets/Images/iconImg/Group 114.png"
import TwitterIcon from "../../../Components/Assets/Images/iconImg/Group 115.png"

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mt-4 mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center">
        <img  src={middLogo} alt=""  className="h-12 mr-2" style={{width:"100%"}} />
          {/* <div className="text-sm">NIMMIN</div> */}
          
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 ">
          <Link to="#" className="mx-2 pl-4 hover:text-gray-300">Home</Link>
          <Link to="/about-us" className="mx-2 hover:text-gray-300">About Us</Link>
          <Link to="/offering" className="mx-2 hover:text-gray-300 ">Offering</Link>
          <Link to="/initiatives" className="mx-2 hover:text-gray-300">Initiatives</Link>
          <Link to="/contact" className="mx-2 hover:text-gray-300">Contact Us</Link>
        </nav>
        <div className="flex mt-4 md:mt-0 ">
          
          <ul className="flex gap-5 justify-end ">
        <li><Link to="/" >
              <img src={instaIcon} alt="" />
            </Link></li>

            <li><Link to="/" >
              <img src={TwitterIcon} alt="" />
            </Link></li>
            <li><Link to="/" >
              <img src={linkDinIcon} alt="" />
            </Link></li>
            <li><Link to="/" >
              <img src={whatsappIcon} alt="" />
            </Link></li>
            <li><Link to="/" >
              <img src={fbIcon} alt="" />
            </Link></li>
         
     
        </ul>
        </div>
        
      </div>
      <div className="container  my-4 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
