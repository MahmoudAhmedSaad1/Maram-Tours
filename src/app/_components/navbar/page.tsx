"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-4 md:hidden absolute z-50">
        <button onClick={toggleMenu} className="text-amber-700">
          <IoMenuSharp className="w-6 h-6 text-gray-700 hover:text-[#C19A6B] transition duration-200" />
        </button>
      </div>

      <nav
        className={`${isOpen ? "block" : "hidden"
          } md:flex md:justify-between md:items-center my-5 md:my-0 w-full bg-white text-black z-50 top-0 text-center border border-[#C19A6B] md:static md:border-none uppercase`}
      >
        <div className="md:flex gap-4 py-[22px] px-[10px] container md:ms-auto">
          <div className="md:flex justify-center items-center md:ms-auto flex-col md:flex-row gap-4">

            <ul className="md:flex gap-4 text-[14px] font-[500] text-black">
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">inicio</Link>
              </li>
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">SOBER MARAM</Link>
              </li>
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">DESTINOS</Link>
              </li>
            </ul>

            <Image
              src="/Link.svg"
              alt="Maram Tours Logo"
              width={50}
              height={100}
              className="object-contain w-[150px] mx-auto md:w-[210px]"
            />

            <ul className="md:flex gap-4 text-[14px] font-[500] text-black">
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">experiencia</Link>
              </li>
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">Inspiraciones</Link>
              </li>
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">Contactar</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 justify-center py-5 items-center md:mx-auto">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-[#10221B] text-[12.31px] hover:text-yellow-600 transition duration-200" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#10221B] text-[12.31px] hover:text-yellow-600 transition duration-200" />
          </a>
        </div>
      </nav>
    </>
  );
}
