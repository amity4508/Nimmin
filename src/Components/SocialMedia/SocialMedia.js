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
            <Link to="/">
              <img src={instaIcon} alt="" />
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={TwitterIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
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
