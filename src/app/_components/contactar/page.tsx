import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa6";


export default function Contactar() {
  return <>
    <div id="Contactar" className="     my-5">
      <div className="flex justify-center items-center w-full h-full text-black text-center relative">
        <div className="lineer  w-full h-full ">
          <div className="text-center mt-9">
            <h4 className="font-[600] text-[16px]">Contactar</h4>
            <h3 className="font-[600] text-[32px] py-1">Encuentra tu destino</h3>
            <img src="/imgs/Vector.png" alt="" className="mx-auto" />
          </div>
          <div className='contacter grid md:grid-cols-2 lg:grid-cols-3  text-center my-9 w-[50%] mx-auto gap-[16px] md:gap-[90px] '>

            <div className='bg-white py-10 md:py-8 rounded-[8px]'>
              <MdOutlineMail className='mx-auto text-black text-[64.17px] h-[52.5px] my-2' />
              <p className='uppercase font-[500] text-[14px] pt-2'>Dream with <br />us</p>
            </div>
            <div className='bg-white py-10 md:py-8 rounded-[8px]'>

              <FaHeadset className='mx-auto text-black text-[64.17px] h-[52.5px] my-2' />
              <p className='uppercase font-[500] text-[14px] pt-2 '>Speak with an <br /> Expert</p>
            </div>
            <div className='bg-white py-10 md:py-8 rounded-[8px]'>
              <RiMessage2Line className='mx-auto text-black text-[64.17px] h-[52.5px] my-2' />
              <p className='uppercase font-[500] text-[14px] pt-2'>Live Your <br /> Journey</p>
            </div>

          </div>
          <button className="letter hidden md:block mx-auto bg-[#C49A6C] py-2 px-7 my-3 rounded-sm hover:bg-white hover:text-[#C49A6C] duration-300 uppercase text-[10.95px] font-bold text-white ">Contáctenos</button>
        </div>

      </div>
    </div>
  </>
}
