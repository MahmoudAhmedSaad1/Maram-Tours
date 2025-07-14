import React from "react";
import CustomButton from "../custombutton/page";
import CustomCard from "../customcard/page";
import Customdiv from "../customp&h&img/page";
const data = [
  {
    title: " Vinales Valley",
    price: "59 ",
    location: " Cuba",
    imageUrl: "/imgs/Destination-Image-10-1.jpg.png",
  },
  {
    title: " Vinales Valley",
    price: "59 ",
    location: "  New Zeland",
    imageUrl: "/imgs/Destination-Image-08-1.jpg.png",
  },
  {
    title: " Vinales Valley",
    price: "59 ",
    location: "  New Zeland",
    imageUrl: "/imgs/Destination-Image-09-1.jpg.png",
  },
  {
    title: " Vinales Valley",
    price: "59 ",
    location: " Cuba",
    imageUrl: "/imgs/Destination-Image-10-1.jpg.png",
  },
  {
    title: " Vinales Valley",
    price: "59 ",
    location: "  New Zeland",
    imageUrl: "/imgs/Destination-Image-08-1.jpg.png",
  },
  {
    title: " Vinales Valley",
    price: "59 ",
    location: "  New Zeland",
    imageUrl: "/imgs/Destination-Image-09-1.jpg.png",
  },
];
export default function Contact_Us() {
  return (
    <>
      <div>
        <div className=" mt-20">
          <div className="text-center">
            {
              <Customdiv
                pharagraph="Contact us"
                heading_3="Buscas tu Destino"
                imageUrl="imgs/Vector.png"
              />
            }
          </div>
          <div className="container mx-auto  grid md:grid-cols-2  lg:grid-cols-3 gap-[32px]  py-5 mt-5 md:mt-4 ">
            {data.map((item, id) => (
              <CustomCard
                key={id}
                title={item.title}
                price={item.price}
                location={item.location}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <div className=" text-center mb-15">
            {<CustomButton title="See more" />}
          </div>
        </div>
      </div>
    </>
  );
}
