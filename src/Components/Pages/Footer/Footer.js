import React from "react";
import middLogo from "../../../Components/Assets/Images/mainImg/Group 2circlelogo.png";
import linkDinIcon from "../../../Components/Assets/Images/iconImg/Frame 87.png";
import { Link } from "react-router-dom";

import instaIcon from "../../../Components/Assets/Images/iconImg/Group 112.png";
import whatsappIcon from "../../../Components/Assets/Images/iconImg/Group 113.png";
import fbIcon from "../../../Components/Assets/Images/iconImg/Group 114.png";
import TwitterIcon from "../../../Components/Assets/Images/iconImg/Group 115.png";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdTextsms } from "react-icons/md";

export const Footer = () => {
  const WhatsAppIcon = ({ phoneNumber, message }) => {
    const handleClick = () => {
      const whatsappMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappURL, "_blank");
    };

    return (
      <div
        onClick={handleClick}
        style={{ cursor: "pointer", marginRight: "10px" }}
      >
        <FaWhatsapp size={32} />
      </div>
    );
  };

  const EmailIcon = ({ emailAddress, subject, body }) => {
    const handleClick = () => {
      const emailSubject = encodeURIComponent(subject);
      const emailBody = encodeURIComponent(body);
      const emailURL = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
      window.open(emailURL);
    };

    return (
      <div
        onClick={handleClick}
        style={{ cursor: "pointer", marginRight: "10px" }}
      >
        <MdEmail size={32} />
      </div>
    );
  };

  const SMSIcon = ({ phoneNumber, message }) => {
    const handleClick = () => {
      const smsMessage = encodeURIComponent(message);
      const smsURL = `sms:${8595903939}?body=${smsMessage}`;
      window.open(smsURL);
    };

    return (
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <MdTextsms size={32} />
      </div>
    );
  };

  return (
    <footer className="footerbg footertext  py-4">
      <div className="container mt-4 mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center">
           <Link to="/" >   <img
            src={middLogo}
            alt=""
            className="h-12 mr-2"
            style={{ width: "100%" }}
          /></Link>
          {/* <div className="text-sm">NIMMIN</div> */}
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0  ">
          <Link to="#" className="mx-2 pl-4 hover:text-gray-300">
            Home
          </Link>
          <Link to="/about-us" className="mx-2 hover:text-gray-300">
            About Us
          </Link>
          <Link to="/offering" className="mx-2 hover:text-gray-300 ">
            Offering
          </Link>
          <Link to="/initiatives" className="mx-2 hover:text-gray-300">
            Initiatives
          </Link>
          <Link to="/contact" className="mx-2 hover:text-gray-300">
            Contact Us
          </Link>
        </nav>
        <div className="flex mt-4 md:mt-0 ">
          <ul className="flex gap-5 justify-end text-3xl ">
            <li className="hover:text-blue-400">
              <Link to="https://www.instagram.com/nimminorganic/">
                <FaInstagram />
              </Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="https://twitter.com/Nimmin221021">
                <FaTwitter />
              </Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="https://www.linkedin.com/in/nimmin-598686298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin />
              </Link>
            </li>

            {/* <li className="hover:text-blue-400">
              <Link to="/">
                <img src={fbIcon} alt="" />
              </Link>
            </li> */}
            <li className="hover:text-blue-400">
              <WhatsAppIcon
                phoneNumber="+8595903939"
                message="Your message for WhatsApp here"
              />
            </li>
            <li className="hover:text-blue-400">
              <EmailIcon
                emailAddress="example@example.com "
                subject="Subject for email"
                body="Body for email"
              />
            </li>
            <li className="hover:text-blue-400">
              <SMSIcon
                phoneNumber="+8595903939"
                message="Your message for SMS here"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto  my-4 text-center">
        <p>&copy; copyright and legal notice 2024</p>
      </div>
    </footer>
  );
};
export default Footer;
