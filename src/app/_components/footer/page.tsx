import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoEarth } from "react-icons/io5";
import { TbLetterV } from "react-icons/tb";





export default function Footer() {
    return (
        <>
            <footer className=" p-5 bg-[#242625] ">
                <div className="container grid md:grid-cols-2 lg:grid-cols-4 w-[259.4px] md:w-full mx-auto gap-12">
                    <div >
                        <img className="pb-2 w-[105px]" src="/imgs/MARAM-LOGO 1.png" alt="Logo" />
                        <p className="text-[#A7A8A8] text-[12px] font[400]">
                            En Maram estamos comprometidos a brindarte un servicio excepcional, prestando atención a cada detalle para que tu experiencia de viaje sea como ninguna otra.
                        </p>
                        <ul className="text-white lato py-3 text-[12px] font[600]">
                            <li className="flex gap-1 items-center py-[5px]"><BsFillTelephoneInboundFill /> 1-677-124-44227</li>
                            <li className="flex gap-1 items-center py-[5px]"><IoIosMail />Mon - Sat 8.00 - 18.00 Sunday CLOSED</li>
                            <li className="flex gap-1 items-center py-[5px]"><CiLocationOn />184 Main Street West Victoria 8007</li>
                        </ul>
                    </div>
                    <div className="quick-links my-3 ps-5 border-l-[2px] border-[#383938]">

                        <h3 className="text-[#FFFFFFCC] text-[20px] font-[600]">Quick Link</h3>
                        <ul className="text-[#FFFFFF99] font-[400] ">
                            <li className="py-2">About Us</li>
                            <li className="py-2">Home</li>
                            <li className="py-2">Destinations</li>
                            <li className="py-2">Experiences</li>
                            <li className="py-2">Inspirations</li>
                        </ul>
                    </div>
                    <div className="gallary  ps-5 border-l-[2px] my-3 border-[#383938]">
                        <h3 className="text-[#FFFFFFCC] text-[20px] font-[600] py-2">Gallery</h3>
                        <div className="images grid grid-cols-3 gap-2">
                            <img src="/imgs/Link → brazil-image-gallery-9-300x300.jpg.png" alt="footer image" />
                            <img src="/imgs/Link → brazil-image-gallery-11-300x300.jpg.png" alt="footer image" />
                            <img src="/imgs/Link → japan-image-gallery-9-300x300.jpg.png" alt="footer image" />
                            <img src="/imgs/Link → japan-image-gallery-6-300x300.jpg.png" alt="footer image" />
                            <img src="/imgs/Link → japan-image-gallery-11-300x300.jpg.png" alt="footer image" />
                            <img src="/imgs/Link → lisbon-image-gallery-7-300x300.jpg.png" alt="footer image" />
                        </div>
                    </div>
                    <div className="ps-5 border-l-[2px] my-3 border-[#383938]">
                        <h3 className="text-[#FFFFFFCC] text-[20px] font-[600] py-2">Support</h3>
                        <ul className="text-[#FFFFFF99] font-[400] ">
                            <li className="py-2">Contact us</li>
                            <li className="py-2">sochial Media</li>
                            <li className="py-2">Team</li>

                        </ul>
                    </div>


                </div>
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
            </footer>

        </>
    );
}
