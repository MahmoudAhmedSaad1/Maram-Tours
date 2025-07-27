"use client"
import React, { useEffect, useState } from "react";
import Img_Countryname from "../img&countryname/page";
import Customdiv from "../customp&h&img/page";
import axios from "axios";


export default function Destionations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(
      "https://api.dubaidaytrips.com/v1/destinations/?tenant_id=58&language_id=51&paginate=5&status=active"
    )
     
      .then((res) => {

        const stor = res.data?.rows ; 
        setDestinations(stor)
       
       
        setLoading(false);
      })
      .catch(() => {
        setDestinations([]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className=" bg-[#F7F2EE] py-5  ">
        <div className="container mx-auto  grid md:grid-cols-2  lg:grid-cols-3 gap-[32px] md:py-5 ">
          <div className="py-8 text-center flex flex-col justify-center">
            {<Customdiv pharagraph="Destinations" heading_3="Escoje tu Destino" imageUrl="imgs/Vector.png" />}
          </div>
          {  (destinations.slice(0).map((item, id) => (
              <Img_Countryname
                key={id}
                imageUrl={item.image?.image_url}
                imagealt={item.image?.image_alt}
                
                title={item?.title}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
