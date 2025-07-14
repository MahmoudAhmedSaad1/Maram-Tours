import React from 'react'
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import Image from 'next/image';

type data = { 
    image_Url : string,
    heading_2: string, 
    phara_1:string,
    phara_2:string

}

export default function CustomMajor({image_Url,heading_2,phara_1, phara_2} : data) {
  return <>
  
  <div className=" border border-[#A28867] rounded-[4px]  shadow-md py-5 bg-white max-w-xs text-center px-5 text-center">
              
                <Image
                  src={image_Url}
                  alt="Amanda Fisher"
                  width={300} height={200}
                  className="  h-[150] w-[full] pt-0  object-cover  ]"
                />
            
              <h2 className="text-lg font-semibold pt-2 Poppins font-[600] text-[19px]">{heading_2}</h2>
              <p className="text-sm text-[#A28867] my-2 font-[400] text-[15px] linenews-2">{phara_1}</p>
              <p className="text-[#5F6980] font-[400] text-[15px] mb-4 linenews-2">
                {phara_2}
              </p>
              <div className="flex justify-center gap-3 my-4 ">
                <span
                  
                  className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                >
                  <FaFacebookF />
                </span>
                 <span
                  
                  className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                >
                  <FaTiktok />
                </span>
                 <span
                  
                  className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                >
                  <CiLinkedin />
                   </span>
                  <span
                  
                  className="w-9 h-9 border rounded-full flex justify-center items-center  bg-black text-[white] hover:bg-white hover:text-black duration-200"
                >
                  <IoIosMail />
                </span>
              </div>
            </div>
  </>
}
