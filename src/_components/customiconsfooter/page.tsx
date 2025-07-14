import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoEarth } from "react-icons/io5";
import { TbLetterV } from "react-icons/tb";
export default function CustomiconFooter() {
  return <>
  
  
  <div className="container mx-auto pt-5 border-t-[2px] my-3 border-[#383938] md:flex justify-between items-center ">
                      <p className="text-[14px] font-[400] lato py-2 text-white">© 2024 MARAMTOURS</p>
                      <ul className="flex gap-5 text-white py-4 md:py-0">
                          <li className="hover:text-[#C19A6B] duration-200"><FaTwitter /> </li>
                          <li className="hover:text-[#C19A6B] duration-200"><FaFacebookF /></li>
                          <li className="hover:text-[#C19A6B] duration-200"><ImInstagram /></li>
                          <li className="hover:text-[#C19A6B] duration-200"><CiLinkedin /></li>
                          <li className="hover:text-[#C19A6B] duration-200"><FaPinterestP /></li>
                          <li className="hover:text-[#C19A6B] duration-200"><TbLetterV /> </li>
                          <li className="hover:text-[#C19A6B] duration-200"><IoEarth /></li>
                      </ul>
                  </div>
  
  
  </>
}
