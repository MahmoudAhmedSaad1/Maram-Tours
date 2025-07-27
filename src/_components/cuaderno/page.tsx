"use client";
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';



export default function Cuaderno() {
  const [formatted, setformatted] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.dubaidaytrips.com/v1/packages/?tenant_id=58&language_id=51&viewInHome=1&paginate=6&status=active")
      .then((res) => {
  

        const formatted = res.data?.rows

        setformatted(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className='container mx-auto'>
      <header>
        <div className="text-center mt-9">
          <h3 className="font-[600] text-[32px] py-1">Cuaderno de bitácora</h3>
          <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Vector.png" alt="Vector" className="mx-auto" />
        </div>
      </header>

      <div className='grid md:grid-cols-2'>
        {formatted.map((item, id) => (
          <div className='my-5' key={id}>
            <div>
              <Image
                src={item.image.image_url}
                width={400}
                height={300}
                alt={item.title}
                className='w-[400px] md:w-[588px] h-[300px] mx-auto rounded-[5px]'
              />
            </div>
            <div className='text-center px-6 md:px-20'>
              <h4 className='text-[14px] font-[400] text-[#5D5D5D] uppercase my-2'>{item.destination.title}</h4>
              
              <p className='lora text-[14px] font-[400] italic text-[#5D5D5D]'>
               {item.slug}
              </p>
              <h5 className='my-2 uppercase font-[700] text-[14px]'>
                <span className='border-b-1'>Keep Reading...</span>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
