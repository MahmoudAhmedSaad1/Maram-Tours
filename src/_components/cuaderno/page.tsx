import Image from 'next/image';
import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Cuaderno() {
    return <>
        <div className='container mx-auto'>
            <header>
                <div className="text-center mt-9">
                    <h3 className="font-[600] text-[32px] py-1">Cuaderno de bitácora</h3>
                    <Image priority fetchPriority='high' width={100} height={100} src="/imgs/Vector.png" alt="" className="mx-auto" />
                </div>
            </header>
            <div className='grid md:grid-cols-2'>
                <div className='my-5' >
                    <div className=''>
                        <Image src="/imgs/single-post-1-img-2-1.jpg.png" priority fetchPriority='high' width={100} height={100} className='w-[400px] md:w-[588px] h-[300px] mx-auto rounded-[5px]' alt="" />
                    </div>
                    <div className='text-center px-20'>
                        <h2 className='inter text-[21px] font-[400] mt-3'>Egypt</h2>
                        <h4 className='text-[14px] font-[400] text-[#5D5D5D] uppercase my-2'>The Giza Pyramids timeless</h4>
                        <p className='lora text-[14px] font-[400] line-h-lora italic text-[#5D5D5D]'><span>The Giza Pyramids, built over 4,500 years ago, are a</span> testament to ancient Egypt’s engineering brilliance. They stand as iconic symbols of history, attracting visitors<br /> worldwide.</p>
                        <h5 className='my-2 uppercase font-[700] text-[14px] line-reading' ><span className='border-b-1'>Keep Reading...</span></h5>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-2 items-center mt-1'>
                        <div className='my-5'>
                            <Image src="/imgs/Link.png" priority fetchPriority='high' width={100} height={100} alt="" className=" w-[200px] md:w-[282px]  h-[230px] mx-auto rounded-[5px]" />
                        </div>
                        <div className='text-center md:px-15 h-[190px]'>
                            <h2 className='inter text-[21px] font-[400]' >Egypt</h2>
                            <h4 className='text-[14px] font-[400] text-[#5D5D5D] uppercase my-1 lett'>The Giza Pyramids <br /> timeless</h4>
                            <p className='lora text-[14px] font-[400] line-h-lora italic text-[#5D5D5D]'>The Giza Pyramids, built over 4,500 years ago, are a testament to ancient Egypt’s engineering brilliance. </p>
                            <div className='flex gap-10 justify-center my-1 '>
                                <div className='  '>
                                    <FaInstagram className='mx-auto text-[#000000] font-[400] text-[12px]' />
                                    <h6 className='uppercase text-[#959595] font-[600] text-[4px] my-2'>Instagram</h6>
                                </div>
                                <div className='  '>
                                    <FaFacebookF className='mx-auto text-[#000000] font-[400] text-[12px]' />
                                    <h6 className='uppercase text-[#959595] font-[600] text-[4px] my-2'>facebook</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 items-center mt-1'>
                        <div className=''>
                            <Image src="/imgs/Figure (2).png" priority fetchPriority='high' width={100} height={100} alt="" className=" w-[200px] md:w-[282px]  h-[230px] mx-auto rounded-[5px]" />
                        </div>
                        <div className='text-center md:px-15 h-[190px]'>
                            <h2 className='inter text-[21px] font-[400]' >Egypt</h2>
                            <h4 className='text-[14px] font-[400] text-[#5D5D5D] uppercase my-1'>The Giza Pyramids <br /> timeless</h4>
                            <p className='lora text-[14px] font-[400] line-h-lora italic text-[#5D5D5D] lett'>The Giza Pyramids, built over 4,500 years ago, are a testament to ancient Egypt’s engineering brilliance. </p>
                            <div className='flex gap-10 justify-center my-1 '>
                                <div className='  '>
                                    <FaInstagram className='mx-auto text-[#000000] font-[400] text-[12px]' />
                                    <h6 className='uppercase text-[#959595] font-[600] text-[4px] my-2'>Instagram</h6>
                                </div>
                                <div className='  '>
                                    <FaFacebookF className='mx-auto text-[#000000] font-[400] text-[12px]' />
                                    <h6 className='uppercase text-[#959595] font-[600] text-[4px] my-2'>facebook</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    </>
}





