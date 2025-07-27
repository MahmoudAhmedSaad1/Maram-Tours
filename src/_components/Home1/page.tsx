"use client";
import CustomButton from "@/_components/custombutton/page";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Home1() {
  const [slid, setslid] = useState([]);
  const [loading, setLoading] = useState(true);
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function get_image() {
    axios
      .get(
        `https://api.dubaidaytrips.com/v1/sliders?tenant_id=58&language_id=51&status=active`
      )
      .then((res) => {
        setslid(res.data.rows);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  useEffect(() => {
    get_image();
  }, []);
  if (loading)
    return (
      <div className="flex items-center justify-center h-[400px] md:h-[600px] w-full">
        <div className="w-16 h-16 border-4 border-[#C49A6C] border-dashed rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  return (
    <>
      <Slider {...settings}>
        <div className="h-[400px] md:h-[600px] relative mt-[17%] md:mt-0">
          {slid.map((slider, id) => (
            <div key={id}>
              <div className="bg-amber-600 absolute inset-0">
                <Image
                  src={slider?.image?.image_url}
                  width={100}
                  height={100}
                  className="home h-full w-screen"
                  alt={slider?.image?.image_alt}
                />
              </div>
              <div className="flex justify-center items-center w-full h-full text-white text-center absolute top-0">
                <div className="absolute z-40 mb-10">
                  <h1 className="text-[44px] md:text-[70px] font-[600] w-[75%] mx-auto">
                    {slider?.title}
                  </h1>
                  <p className="text-[20px] font-[500] py-2">
                    {slider?.image?.image_title}
                  </p>
                  <CustomButton title={slider?.button} />
                </div>
                <div className="bg-[#00000040] w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </Slider>
    </>
  );
}
