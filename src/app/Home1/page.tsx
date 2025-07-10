import React from "react";

export default function Home1() {
  return (
    <>
      <div id="home" className=" h-[400px] md:h-[600px] ">
        <div className="flex justify-center items-center w-full h-full text-white text-center relative">
          <div className="absolute z-40 mb-10" >
            <h1 className="text-[44px]  md:text-[70px] font-[600] ">Adventure Travel</h1>
            <p className="text-[20px] font-[500] py-2">Your best Adventure Deals with nature.</p>
            <button className=" bg-[#C49A6C] py-4 px-5 rounded-sm hover:bg-white hover:text-[#C49A6C] duration-300 uppercase text-[14px] font-[700]"> View Package</button>
          </div>
          <div className="bg-[#00000040] w-full h-full  "></div>
        </div>
      </div>
    </>
  );
}
