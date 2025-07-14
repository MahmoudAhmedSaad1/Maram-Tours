import React from "react";
import Img_Countryname from "../img&countryname/page";
import Customdiv from "../customp&h&img/page";

const data = [
  { imageUrl: "/imgs/Figure.png", title: "Egypt" },
  { imageUrl: "/imgs/Figure (1).png", title: "Saudi Arabia" },
  { imageUrl: "/imgs/Figure (2).png", title: "Türkiye" },
  { imageUrl: "/imgs/Figure (3).png", title: "Jordan" },
  { imageUrl: "/imgs/Figure (4).png", title: "Other places" }
];
export default function Destionations() {
  return (
    <>
      <div className=" bg-[#F7F2EE] py-5  ">
        <div className="container mx-auto  grid md:grid-cols-2  lg:grid-cols-3 gap-[32px] md:py-5 ">
          <div className="py-8 text-center flex flex-col justify-center">
            {<Customdiv pharagraph="Destinations" heading_3="Escoje tu Destino" imageUrl="imgs/Vector.png" />}
          </div>
          {
            data.map((item,id) =>(
              <Img_Countryname 
              key={id}
              imageUrl={item.imageUrl}
              title = {item.title}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}
