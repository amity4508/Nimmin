
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import middLogo from "../Assets/Images/mainImg/Nimmin logo emblem with circle.png";
import logo1 from "../Assets/Images/mainImg/NIMMIN.png";
import logo2 from "../Assets/Images/mainImg/logo2.png";
import logoCircle1 from "../Assets/Images/mainImg/Group 2circlelogo.png";

const navLinks = [
  { key: "home", to: "/", label: "Home" },
  { key: "about-us", to: "/about-us", label: "About Us" },
  { key: "offerings", to: "/offering", label: "Offering" },
  { key: "initiatives", to: "/initiatives", label: "Initiatives" },
  { key: "gallery", to: "/gallery", label: "Gallery" },
  { key: "contact", to: "/contact", label: "Contact Us" },
  // Add more links as needed
];

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCrossIcon, setIsCrossIcon] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsCrossIcon(!isCrossIcon);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsCrossIcon(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768 && isSidebarOpen) {
        closeSidebar();
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]);

  return (
    <>
    {/* Navbar1-- */}
      {/* <nav  className={`navbar ${scrolling ? 'scrolling' : ''}`} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 10, marginTop: window.innerWidth >= 768 ? '50px' : '0', backgroundColor: scrolling && window.innerWidth < 1024 ? 'yellow' : 'transparent' }}> */}

      {/* this only for small screen */}

      {/* <nav className={`navbar ${scrolling ? 'scrolling' : ''}`} style={{ position: window.innerWidth < 1024 ? 'fixed' : 'relative', top: 0, width: '100%', zIndex: 10, backgroundColor: scrolling && window.innerWidth < 1024 ? 'white' : 'transparent' }}> */}
   <div className=" container mx-auto ">
   <div 
        className={`navbar  ${scrolling ? "hidden" : ""} mb-4 xl:py-5 max-xl:py-10` }
        style={{
          position: "fixed",
          top: 0,
          // width: "100%",
          marginLeft:"0px",
          zIndex: 10,
          backgroundColor: "transparent",
        }}
    
    >
    <nav
        className={`navbar ${scrolling ? "scrolling" : ""} ${
          window.innerWidth < 1024 ? "border-b" : ""
        }`}
        style={{
          position: window.innerWidth < 1024 ? "fixed" : "relative",
          top: 0,
          width: "100%",
          zIndex: 90,
          backgroundColor:
            scrolling && window.innerWidth < 1024 ? "white" : "transparent",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container  mx-auto flex items-center gap-20 xl:justify-start sm:justify-between max-sm:justify-between">
            <div className="logo navLeft">
              {/* Logo1  */}
              <div className="text-white font-bold text-6xl mb-4 max-lg:hidden">
                <img
                  className="max-lg:h-10 max-xl:h-12 max-2xl:h-16"
                  src={logo1}
                  alt=""
                />
              </div>

              {/* Logo2  sm-screeen */}
              {!scrolling && window.innerWidth < 1024 && (
                <div className="logo2 text-white font-bold text-6xl mb-4 lg:hidden ">
                  <div className="container pt-4 px-3  flex gap-4 items-center ">
                    <img className="h-12" src={logoCircle1} alt="" />
                    <div>
                      <img className="max-sm:h-5 h-6" src={logo1} alt="" />
                      <p className="text-sm text-white mt-1 max-sm:w-[140px]">
                        Prakriti Nhi Prabriti Badlen!
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* logo 3 */}

              <div
                className={`lgo3 text-white font-bold text-6xl mb-4 lg:hidden ${
                  scrolling ? "visible" : "hidden"
                }`}
              >
                <div className="container pt-4 px-3 flex gap-4 items-center ">
                  <img className="h-12" src={middLogo} alt="" />
                  <div>
                    <img className="max-sm:h-5 h-6" src={logo2} alt="" />
                    <p className="text-sm text-gray-700 mt-1 max-sm:w-[140px]">
                      Prakriti Nhi Prabriti Badlen!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Nav  */}
            <div className="hidden lg:flex gap-10 text-white list-none items-center justify-center ">
              <div className="max-xl:hidden" >
                <li>
                  <Link to="/">
                    <img className="h-24" src={middLogo} alt="" />
                  </Link>
                </li>
              </div>

              <div className="flex flex-col text-start justify-center font-semibold max-xl:hidden ">
                <h1 className="text-[23px] leading-7	">
                  <span className="text-green-900">Prakriti </span>Nahi
                </h1>
                <h1 className="text-[23px] leading-7	">
                  {" "}
                  <span className="text-green-900 ml-4">Pravriti</span> Badlen!
                </h1>
              </div>
            </div>

            {/* NavRight  */}
            {/* <div className="hidden lg:flex space-x-4 text-white text-center font-medium list-none ">
              <li className="bg-green-700 py-1 rounded w-[114px] cursor-pointer ">
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to=""
                  onClick={closeSidebar}
                >
                  Sign in
                </Link>
              </li>
              <li className="border-2 border-white py-1 rounded w-[114px] cursor-pointer ">
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to=""
                  onClick={closeSidebar}
                >
                  Login
                </Link>
              </li>
            </div> */}

            {/* Hamburgur Icon */}
            {/* Hamburgur Icon */}
            <div className="lg:hidden items-center">
              <button
                className={`text-${scrolling ? "black" : "white"}`}
                onClick={toggleSidebar}
              >
                {isCrossIcon ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-12 h-10"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-12 h-10"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* BottomNav --------------------- */}
          <div className="container mx-auto">
            <div className="hidden lg:flex space-x-4 text-white list-none text-xl">
              {navLinks.map((link, index) => (
                <li key={index} onClick={() => setMenu(link.key)}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={link.to}
                    onClick={closeSidebar}
                  >
                    {link.label}
                  </Link>
                  {menu === link.key ? <hr className="red" style={{ borderColor:"yellow",width:"55px", height:"8px", }}  /> : <></>}
                </li>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </div>

   </div>

      {/* Navbar2  ---------------------------- */}
    
    
    < motion.nav
        className={`navbar lg:py-5  ${scrolling ? "" : "hidden"}`}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex:"99",
          backgroundColor: "white",
        }}>
        <div
        
        >
          {/* BottomNav --------------------- */}
          <div className="container mx-auto flex  justify-between	">
          <div className="text-white font-bold text-6xl mb-4 max-lg:hidden ">
                <img
                  className="max-lg:h-10 max-xl:h-12 max-2xl:h-8 "
                  src={logo2}
                  alt=""
                />
              </div>

            <div className="hidden lg:flex space-x-4 text-black list-none text-xl">
              {navLinks.map((link, index) => (
                <li className=" hover:text-yellow-500" key={index} onClick={() => setMenu(link.key)}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={link.to}
                    onClick={closeSidebar}
                  >
                    {link.label}
                  </Link>
                  {menu === link.key ? <hr className="red" style={{ borderColor:"yellow",width:"55px", height:"8px", }}  /> : <></>}
                </li>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
 
      

      {/* SidebarNav  */}

      <motion.div
        className="SidebarNav fixed inset-y-0 right-0 w-64 bg-white p-4 mt-24 lg:hidden z-20 rounded-sm shadow-md "
        initial={{ x: 300 }}
        animate={{ x: isSidebarOpen ? 0 : 300 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="text-white">
          {navLinks.map((link, index) => (
            <li
              className="text-black py-2 font-semibold"
              key={index}
              onClick={() => setMenu(link.key)}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={link.to}
                onClick={closeSidebar}
              >
                {link.label}
              </Link>
              {menu === link.key ? <hr className="red" style={{ borderColor: "green", width:"60px", height:"8px" }} /> : <></>}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 pb-10 text-md text-center">
          <h1>All rights reserved to Nimmin owner </h1>
        </div>
      </motion.div>
    </>
  );
};
export default Navbar;

