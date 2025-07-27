"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";


export default function Frequently() {
  const [openItems, setOpenItems] = useState(Array(10).fill(false));
  const [faqs, setFaqs] = useState([]); 
  const [loading, setLoading] = useState(true);
  const toggleItem = (index: Faq) => {
    setOpenItems((prev) => prev.map((item, i) => (i === index   ? !item : item)));
  };

  useEffect(() => {
    axios
      .get(
        "https://api.dubaidaytrips.com/v1/faqs?tenant_id=58&language_id=51&viewInHome=1&status=active&paginate=1000"
      )
      .then((res) => {
        const filtered = res.data?.rows;
        setFaqs(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="header text-center my-10">
        <h2 className="font-[600] text-[32px] pb-[10px]">
          Frequently Questions
        </h2>
        <Image
          className="mx-auto w-[170px]"
          src="/imgs/Vector.png"
          alt="vector"
          width={50}
          height={50}
        />
      </div>

      <div className="body container mx-auto md:grid lg:grid-cols-2 lg:gap-6 lg:w-[1178px] px-3 lg:px-0 my-7">
        <div className="font-[700] mx-auto text-[18px] w-[398px] md:w-[589px]">
          {faqs.map((faq, ke) => (
            <div
              key={ke}
              className="rounded-[4px] shadow shadow-[#00000014] my-7 relative z-20"
            >
              <div
                className="flex justify-between items-center py-3 px-6 cursor-pointer rounded-[4px]"
                onClick={() => toggleItem(ke)}
              >
                <p className="text-[12.16px] md:text-[18px]">
                  {ke === faq.id
                    ? `${faq.title}`
                    : `${faq.title}`}
                </p>
                
                <button className="text-xl font-bold">
                  {openItems[ke] ? "-" : "+"}
                </button>
              </div>
              {openItems[ke] && (
                <>
                  <p className="conv font-[400] text-[10.14px] md:text-[15px] text-[#4F545A] px-10 py-3">
                    {faq.body} 
                  </p>
                  <Image
                                    width={50} height={50}
                                        className="absolute bottom-0 right-0"
                                        src="/imgs/Rectangle 11.png"
                                        alt="rectangle"
                                    />
                </>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}
