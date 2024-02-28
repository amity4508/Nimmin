
import React from "react";
import { Homepage } from "../Components/Pages/HomePage";
import { AboutUs } from "../Components/Pages/AboutUs"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "../Components/Header/Header";
import { Offerings } from "../Components/Pages/Offering";
import { Initiatives } from "../Components/Pages/Initiatives/Initiatives";
import { Gallery } from "../Components/Pages/Gallery/Gallery";
import { ContactUs } from "../Components/Pages/ContactUs/ContactUs";

export const UserRoute = () => {
    return (
     <BrowserRouter>
      <Header />
      <Routes>
      <Route path='Nimmin/' element={<Homepage/>} />
      <Route path='about-us' element={<AboutUs/>} />
      <Route path='offering' element={<Offerings/>} />
      <Route path='initiatives' element={<Initiatives/>} />
      <Route path='Gallery' element={<Gallery/>} />
      <Route path='contact' element={<ContactUs/>} />
      </Routes>
      </BrowserRouter>
    );
  };
  