"use client";

import Image from 'next/image';
import React, { useState } from 'react';

export default function Frequently() {
    const [openItems, setOpenItems] = useState(Array(10).fill(false));

    const toggleItem = (index: any) => {
        setOpenItems((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };

    return (
        <>
            <div className="header text-center my-10">
                <h2 className="font-[600] text-[32px] pb-[10px]">Frequently Questions</h2>
                <img className="mx-auto w-[170px]" src="/imgs/Vector.png" alt="vector" />
            </div>

            <div className="body container mx-auto md:grid lg:grid-cols-2 lg:gap-6 lg:w-[1178px] px-3 lg:px-0 my-7">

                <div className="font-[700] mx-auto text-[18px] w-[398px] md:w-[589px]">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-[4px] shadow shadow-[#00000014] my-7 relative z-20"
                        >
                            <div
                                className="flex justify-between items-center py-3 px-6 cursor-pointer rounded-[4px]"
                                onClick={() => toggleItem(i)}
                            >
                                <p className="text-[12.16px] md:text-[18px]">
                                    {i === 1 ? 'Conversation Summarization' : 'Identify Complex Problem & Resolve Quickly'}
                                </p>
                                <button className="text-xl font-bold">
                                    {openItems[i] ? '-' : '+'}
                                </button>
                            </div>
                            {openItems[i] && (
                                <>
                                    <p className="conv font-[400] text-[10.14px] md:text-[15px] text-[#4F545A] px-10 py-3">
                                        Support reps often have to write summaries before handing profess
                                        conversations over to teammates. With the summarization and
                                        feature, a support rep can now simply click reliable printing
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


                <div className="hidden lg:block font-[700] text-[18px] w-[398px] md:w-[589px]">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i + 5}
                            className="rounded-[4px] shadow shadow-[#00000014] my-7 relative z-20"
                        >
                            <div
                                className="flex justify-between items-center py-3 px-6 cursor-pointer rounded-[4px]"
                                onClick={() => toggleItem(i + 5)}
                            >
                                <p className="text-[12.16px] md:text-[18px]">
                                    {i === 0 ? 'Conversation Summarization' : 'Identify Complex Problem & Resolve Quickly'}
                                </p>
                                <button className="text-xl font-bold">
                                    {openItems[i + 5] ? '-' : '+'}
                                </button>
                            </div>
                            {openItems[i + 5] && (
                                <>
                                    <p className="conv font-[400] text-[10.14px] md:text-[15px] text-[#4F545A] px-10 py-3">
                                        Support reps often have to write summaries before handing profess
                                        conversations over to teammates. With the summarization and
                                        feature, a support rep can now simply click reliable printing
                                    </p>
                                    <img
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
