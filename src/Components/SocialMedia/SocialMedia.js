import React from "react";
import { Link } from "react-router-dom";
import linkDinIcon from "../Assets/Images/iconImg/Frame 87.png";

import instaIcon from "../Assets/Images/iconImg/Group 112.png";
import whatsappIcon from "../Assets/Images/iconImg/Group 113.png";
import fbIcon from "../Assets/Images/iconImg/Group 114.png";
import TwitterIcon from "../Assets/Images/iconImg/Group 115.png";

export const SocialMedia = () => {
  return (
    <>
      <div className="container mx-auto pt-6 ">
        <ul className="flex gap-5 justify-end ">
          <li>
            <Link to="https://www.instagram.com/nimminorganic/">
              <img src={instaIcon} alt="" />
            </Link>
          </li>

          <li>
            <Link to="https://twitter.com/Nimmin221021">
              <img src={TwitterIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/nimmin-598686298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={linkDinIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={whatsappIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={fbIcon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
