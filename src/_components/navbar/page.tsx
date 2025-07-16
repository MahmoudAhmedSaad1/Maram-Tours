"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoMenuSharp } from "react-icons/io5";
import CustomLinks from "../customLinks/page";
import SocialIcon from "./socialicon/SocialIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex ">
        <div className="p-4 md:hidden absolute z-50">
        <button onClick={toggleMenu} className="text-amber-700">
          <IoMenuSharp className="w-6 h-6 text-gray-700 hover:text-[#C19A6B] transition duration-200" />
        </button>
      </div>

      <nav
        className={`${isOpen ? "block" : "hidden"
          } container mx-auto px-4  md:flex md:justify-center gap-[2px] md:items-center   my-5 md:my-0 w-full bg-white text-black z-50 top-0 text-center border border-[#C19A6B] md:static md:border-none uppercase`}
      >
        <div className="md:flex gap-4 py-[22px] px-[10px]">
          <div className="md:flex justify-center items-center md:ms-auto flex-col md:flex-row gap-4">

           
            <CustomLinks fLink="inicio" sLink="sobre MARam" l_Link="Destinos" /> 
           

            <Image
              src="/Link.svg"
              alt="Maram Tours Logo"
              priority fetchPriority='high' width={100} height={100}
              className="object-contain w-[150px] mx-auto md:w-[210px]"
            />

             
            <CustomLinks fLink="experiencias" sLink="Inspiraciones" l_Link="Contactar" /> 
           
          </div>
        </div>

        
      </nav>
      <div className="flex gap-4 justify-center py-5 items-center w-fit  pe-8">
          <SocialIcon/>
        </div>
      </div>
    </>
  );
}
