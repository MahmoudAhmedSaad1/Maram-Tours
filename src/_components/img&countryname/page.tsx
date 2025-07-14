import React from "react";
type country = {
  imageUrl: string;
  title: string;
};
export default function Img_Countryname({ imageUrl, title }: country) {
  return (
    <>
      <div className="px-10  text-center relative md:p-[0] ">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full  border-[10px] border-white rounded-[10px] "
        />
        <p className="absolute bottom-[10%] left-[15%] md:bottom-[10%] md:left-[10%]  font-[900] text-[18px]  text-white uppercase L-spacing">
          {title}
        </p>
      </div>
    </>
  );
}
