import React from "react";


export default function Destionations() {
  return (
    <>
      <div className=" bg-[#F7F2EE] py-5  ">
        <div className="container mx-auto  grid md:grid-cols-2  lg:grid-cols-3 gap-[32px] md:py-5 ">
          <div className="py-8 text-center flex flex-col justify-center">
            <p className="font-[400]">Destinations</p>
            <h3 className="font-[600] text-[32px] py-1">Escoje tu Destino</h3>
            <img src="/imgs/Vector.png" alt="" className="mx-auto" />
          </div>

          <div className="px-10  text-center relative md:p-[0] ">
            <img src="/imgs/Figure.png" alt="" className="w-full h-full  border-[10px] border-white rounded-[10px] " />
            <p className="absolute bottom-[10%] left-[15%] md:bottom-[10%] md:left-[10%]  font-[900] text-[18px]  text-white uppercase L-spacing">Egypt</p>
          </div>
          <div className="px-10 text-center relative md:p-[0] ">
            <img src="/imgs/Figure (1).png" alt="" className="w-full h-full  border-[10px] border-white rounded-[10px] " />
            <p className="absolute bottom-[10%] left-[15%] md:bottom-[10%] md:left-[10%] font-[900] text-[18px]  text-white uppercase L-spacing">Saudi Arabia</p>
          </div>
          <div className="px-10 text-center relative md:p-[0] ">
            <img src="/imgs/Figure (2).png" alt="" className="w-full h-full  border-[10px] border-white rounded-[10px] " />
            <p className="absolute bottom-[10%] left-[15%] md:bottom-[10%] md:left-[10%] font-[900] text-[18px]  text-white uppercase L-spacing">Türkiye</p>
          </div>
          <div className="px-10 text-center relative md:p-[0] ">
            <img src="/imgs/Figure (3).png" alt="" className="w-full h-full  border-[10px] border-white rounded-[10px] " />
            <p className="absolute bottom-[10%] left-[15%] md:bottom-[10%] md:left-[10%] font-[900] text-[18px]  text-white uppercase L-spacing">Jordan</p>
          </div>
          <div className="px-10 text-center relative md:p-[0] ">
            <img src="/imgs/Figure (4).png" alt="" className="w-full h-full  border-[10px] border-white rounded-[10px] " />
            <p className="absolute bottom-[10%] left-[15%] md:bottom-[10%] md:left-[10%]  font-[900] text-[18px]  text-white uppercase L-spacing">Other places</p>
          </div>
        </div>
      </div>
    </>
  );
}
