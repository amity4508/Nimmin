import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import shadeImg1 from "../../../Components/Assets/Images/mainImg/Vector (12).png";
import shadeImg2 from "../../../Components/Assets/Images/mainImg/Vector (13).png";


export const ContactUs = () => {
  return (
    <>
      <section className=" mx-auto bg-gray-200  ">
        <div>
          <img className="h-[70px]" src={shadeImg1} alt="" />
        </div>
        <div className="container mx-auto max-sm:w-[93%] w-[80%] py-3 px-5 bg-white rounded-md">

        <div className="text-center mb-3">
          <h1 className="text-3xl mb-4 mt-4 font-bold">Contact Us</h1>
          <p className="text-base font text-gray-600">
            Any question or remarks? Just write us a message!
          </p>
        </div>
       <div className="  flex max-sm:flex-col sm:flex-col lg:flex-row justify-between gap-5 text-white  ">
        {/* // */}
      <div className="container w-full max-sm:w-full lg:w-1/3 bgcont text-center px-16 rounded lg:h-[520px]  ">
          <div className="bgcont2 z-50 h-[160px] w-[160] relative right-[65px]"></div>
          <div className="relative bottom-[90px]">
        <h1 className="text-2xl mb-2 font-bold">Contact Information</h1>
        <p className="">Say something to start a live chat!</p>
        <div className="mt-10 ">
          <p className="text-sm mt-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +1012 3456 789
          </p>
          <p className="text-sm mt-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            demo@gmail.com
          </p>
          <p className="text-sm mt-4">
            <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </p>
        </div>
        <div className="contbgoutline  h-[170px] w-[170] relative  top-[40px] md:left-[105px] lg:top-[-60px] lg:left-[85px] sm:left-0 max-sm:left-0">
          <div className="contbgoutline2 z-50 h-[160px] w-[160] "></div>
        </div>
      </div>
        
          </div>

          <div className="container w-full max-sm:w-full lg:w-2/3">
            <div className=" sm:w m-auto p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-4"></h2>

              <div>
                <form>
                  <div className="container Forms grid  max-2xl:grid-cols-2 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 ">
                    <div className=" max-sm:flex-col max-sm:items-start mb-2 items-center">
                      <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstName"
                        className="mt-1 py-1 w-full border-b-2  outline-none text-gray-500"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className=" max-sm:flex-col max-sm:items-start mb-2 items-center">
                      <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="Last name"
                        id="lastName"
                        className="mt-1 py-1 w-full border-b-2  outline-none text-gray-500"
                        placeholder="Last name."
                        required
                      />
                    </div>
                    <div className=" max-sm:flex-col max-sm:items-start mb-2 items-center">
                      <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 py-1 w-full border-b-2  outline-none text-gray-500"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className=" max-sm:flex-col max-sm:items-start mb-2 items-center">
                      <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="pNumber"
                        id="pNumber"
                        className="mt-1 py-1 w-full border-b-2  outline-none text-gray-500"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className=" max-sm:flex-col max-sm:items-start mb-2 items-center w-full">
                      <label className="min-w-[250px] block text-base font-medium text-gray-600 mb-4">
                        Select Subject
                      </label>
                      <div className="radio1 flex sm:flex-col max-sm:flex-col gap-3 xl:flex-row  mt-1  text-gray-500  text-base">
                        <label className="flex gap-2 ">
                          <input
                            type="radio"
                            name="subject"
                            value="math"
                            className="form-radio h-5 w-4 text-gray-500 "
                            required
                          />
                          <span className=" text-gray-500  w-[200px]">General Inquiry</span>
                        </label>
                        <label className="flex gap-2">
                          <input
                            type="radio"
                            name="subject"
                            value="math"
                            className="form-radio h-5 w-4 text-gray-500 "
                            required
                          />
                          <span className=" text-gray-500  w-[200px]">Product Inquiry</span>
                        </label>
                        <label className="flex gap-2 ">
                          <input
                            type="radio"
                            name="subject"
                            value="math"
                            className="form-radio h-5 w-4 text-gray-500 "
                            required
                          />
                          <span className=" text-gray-500  w-[200px]">Advertisement Inquiry</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className=" max-sm:flex-col max-sm:items-start mb-2 items-center mt-5">
                    <label className=" min-w-[140px]  block text-base font-medium text-gray-700">
                     Message
                    </label>
                     <textarea className="mt-1 py-1px-2 w-full border-b-2  outline-none text-gray-500" name="message" id="message" cols="30" rows="3"></textarea>
                  </div>
                  <div className="flex lg:justify-end mt-10 sm:justify-center max-sm:justify-center ">
                  <button className="sendBtn text-white bgcont py-2 px-4 rounded">Send Message</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className="flex justify-end">
          <img className="h-[90px]" src={shadeImg2} alt="" />
        </div>
      </section>
    </>
  );
};
