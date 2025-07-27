"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "../custombutton/page";
import CustomCard from "../customcard/page";
import Customdiv from "../customp&h&img/page";
import axios from "axios";



export default function Contact_Us() {
  const [packages, setPackages] = useState([] );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.dubaidaytrips.com/v1/packages/?tenant_id=58&language_id=51&viewInHome=1&paginate=6&status=active"
      )
      .then((res) => {
       

        const formatted = res.data?.rows
       

        setPackages(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="grid md:grid-cols-2 gap-8 px-4 py-8">
  {packages.map((i) => (
    <div
      key={i}
      className="animate-pulse bg-white shadow rounded-lg overflow-hidden"
    >
      <div className="h-[300px] bg-gray-300 w-full" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-300 rounded w-1/2" />
        <div className="h-3 bg-gray-300 rounded w-full" />
        <div className="h-3 bg-gray-300 rounded w-5/6" />
        <div className="h-4 bg-gray-300 rounded w-32" />
      </div>
    </div>
  ))}
</div>
;

  return (
    <div className="mt-20">
      <div className="text-center">
        <Customdiv
          pharagraph="Contact us"
          heading_3="Buscas tu Destino"
          imageUrl="imgs/Vector.png"
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[32px] py-5 mt-5 md:mt-4">
        {packages.map((item, index) => (
          <CustomCard
            key={index}
            title={item.title}
            price={item.start_price.toString() + " $"}
            location={item.destination.title}
            imageUrl={item.image.image_url}
            duration={item.duration}
          />
        ))}
      </div>

      <div className="text-center mb-16">
        <CustomButton title="See more" />
      </div>
    </div>
  );
}
