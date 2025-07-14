import Link from 'next/link';
import React from 'react'

type data = {
    fLink : string,
    sLink : string,
    l_Link : string,
};

export default function CustomLinks({fLink ,sLink , l_Link } : data) {
  return <>
  
   <ul className="md:flex gap-4 text-[14px] font-[500] text-black">
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">{fLink}</Link>
              </li>
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">{sLink}</Link>
              </li>
              <li className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
                <Link href="">{l_Link}</Link>
              </li>
            </ul>
  
  
  
  
  </>
}
