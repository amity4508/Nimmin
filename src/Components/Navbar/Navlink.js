
          {/* <div className="container mx-auto">
          <div className=" hidden md:flex space-x-4 text-white list-none text-xl">
              <li onClick={() => setMenu("home")}>
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={closeSidebar}
                >
                  Home
                </Link>
                {menu === "home" ? <hr /> : <></>}{" "}
              </li>
              <li onClick={() => setMenu("about-us")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/about-us"
                  onClick={closeSidebar}
                >
                  About Us
                </Link>
                {menu === "about-us" ? <hr /> : <></>}
              </li>
              <li onClick={() => setMenu("offerings")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/offerings"
                  onClick={closeSidebar}
                >
                Offerings
                </Link>
                {menu === "offerings" ? <hr /> : <></>}
              </li>
              <li onClick={() => setMenu("initiatives")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/initiatives"
                  onClick={closeSidebar}
                >
                  Initiatives
                </Link>
                {menu === "initiatives" ? <hr /> : <></>}
              </li>
           

              <li onClick={() => setMenu("gallery")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/gallery"
                  onClick={closeSidebar}
                >
                 Gallery
                </Link>
                {menu === "gallery" ? <hr /> : <></>}
              </li>

              <li onClick={() => setMenu("contact-us")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/contact-us"
                  onClick={closeSidebar}
                >
                  Contact Us
                </Link>
                {menu === "contact-us" ? <hr /> : <></>}
              </li>

            </div>
          </div> */}




          // ... (previous imports)

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCrossIcon, setIsCrossIcon] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

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
      setIsMobileView(screenWidth < 768);
      if (screenWidth >= 768 && isSidebarOpen) {
        closeSidebar();
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]);



  return (
    <>
      {/* ... (rest of your code) */}
      <div className="NavRight hidden md:flex space-x-4 text-white list-none text-base text-center font-medium">
        <li className="bg-green-700 py-1 rounded w-[114px] cursor-pointer" onClick={() => setMenu("shop")}>
          {" "}
          <Link style={{ textDecoration: "none" }} to="" onClick={closeSidebar}>
            {isMobileView ? "Sign in" : "Login"}
          </Link>
        </li>
        {/* ... (rest of your code) */}
      </div>
      {/* ... (rest of your code) */}
    </>
  );
};

export default Navbar;




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import middLogo from "../Assets/Images/Nimmin logo emblem with circle.png"
import logo1 from "../Assets/Images/NIMMIN.png"


const navLinks = [
  { key: "home", to: "/", label: "Home" },
  { key: "about-us", to: "/about-us", label: "About Us" },
];

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCrossIcon, setIsCrossIcon] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

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
      setIsMobileView(screenWidth < 768);
      if (screenWidth >= 768 && isSidebarOpen) {
        closeSidebar();
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]);



  return (
    <>
      <nav className="navbar">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto flex  items-center justify-between ">
           <div className="navLeft">
           <div className="text-white font-bold text-6xl mb-4 ">
            {/* NIMMIN  */}
            <img className="h-16" src={logo1} alt="" />
            </div>
           </div>

            {/* NavMiddle side */}
            <div className="NavRight hidden md:flex  gap-10 text-white list-none">
              <div>  <li onClick={() => setMenu("shop")}>
                {" "}
                <Link
                  style={{ textDecoration: "none" }} to="/" onClick={closeSidebar}>
                   <img className="h-24" src={middLogo} alt="" />
                </Link>
              </li></div>

              <div className=" flex flex-col text-start justify-center    font-semibold">
                <h1 className="text-[23px] leading-7	"><span className="text-green-900" >Prakriti </span>Nahi</h1>
                <h1 className=" text-[23px] leading-7	 "> <span className="text-green-900 ml-4" >Pravriti</span> Badlen!</h1>
              </div>
            </div>
            
           {/* NavRight right side */}
           <div className="NavRight hidden md:flex space-x-4 text-white list-none text-base text-center font-medium">
        <li className="bg-green-700 py-1 rounded w-[114px] cursor-pointer" onClick={() => setMenu("shop")}>
          {" "}
          <Link style={{ textDecoration: "none" }} to="" onClick={closeSidebar}>
            {isMobileView ? "Sign in" : "Login"}
          </Link>
        </li>
        {/* ... (rest of your code) */}
      </div>


{/* ---------------------  Mobile Menu start------------------- */}
            <div className="md:hidden">
              {/* Mobile Menu Icon */}
              <button className="text-white" onClick={toggleSidebar}>
                {isCrossIcon ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
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
                    className="w-6 h-6"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

     {/*----------------- navbar-bottom -------------------------*/}

     

    <div className="container mx-auto">
          <div className="hidden md:flex space-x-4 text-white list-none text-xl">
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => setMenu(link.key)}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={link.to}
                  onClick={closeSidebar}
                >
                  {link.label}
                </Link>
                {menu === link.key ? <hr /> : <></>}
              </li>
            ))}
          </div>
        </div>
        </motion.div>
      </nav>


      {/* Sidebar ------------------------------------------------*/}
      <motion.div
        className="fixed inset-y-0 right-0 w-64 bg-gray-900 p-4 mt-16"
        initial={{ x: 300 }}
        animate={{ x: isSidebarOpen ? 0 : 300 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="text-white">
        <li onClick={() => setMenu("home")}>
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={closeSidebar}
                >
                  Home
                </Link>
                {menu === "home" ? <hr /> : <></>}{" "}
              </li>
              <li onClick={() => setMenu("about-us")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/about-us"
                  onClick={closeSidebar}
                >
                  About Us
                </Link>
                {menu === "about-us" ? <hr /> : <></>}
              </li>
              <li onClick={() => setMenu("offerings")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/offerings"
                  onClick={closeSidebar}
                >
                Offerings
                </Link>
                {menu === "offerings" ? <hr /> : <></>}
              </li>
              <li onClick={() => setMenu("initiatives")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/initiatives"
                  onClick={closeSidebar}
                >
                  Initiatives
                </Link>
                {menu === "initiatives" ? <hr /> : <></>}
              </li>
           

              <li onClick={() => setMenu("gallery")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/gallery"
                  onClick={closeSidebar}
                >
                 Gallery
                </Link>
                {menu === "gallery" ? <hr /> : <></>}
              </li>

              <li onClick={() => setMenu("contact-us")}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/contact-us"
                  onClick={closeSidebar}
                >
                  Contact Us
                </Link>
                {menu === "contact-us" ? <hr /> : <></>}
              </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;






