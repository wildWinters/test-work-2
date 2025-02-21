"use client";

import { useState, useEffect } from "react";
import { Poppins, Source_Sans_3 } from "next/font/google";
import Image from "next/image";

const source3 = Source_Sans_3({
    subsets:["latin"],
    weight:"400"
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: "700",
});

// Define the type for the JSON object
interface Post {
    heading: string;
    text: string;
    img: string;
}

export default function LastNews() {

    const [json, setJson] = useState<Post[]>([]);

    useEffect(() => {
        fetch("/Post.json")
            .then((data) => data.json())
            .then((json) => setJson(json));
    }, []);

    return (
        <>
            <h2 className={`ml-[15%] mb-[20px] text-[50px] text-[black]   ${poppins.className}`}>
                Latest Post
            </h2>

            <div className={`flex flex-col w-[958px] h-[851px] m-[auto]   text-[black] ${poppins.className}`}>
                {json.map((value, index) => (
                    <div key = {index} className = {`w-[958px] flex  ${(index < 2) ? 'h-[231px]' : 'h-[293px]'} gap-[48px] text-left mb-10 `}>

                        <div className = {`w-[462px] h-[100%]`}>
                            <h2 className="text-[32px] ">{value.heading}</h2>
                            <p className={` text-[22px]   ${source3.className} `}> {value.text}</p>
                        </div> 

                        <Image
                            className={`${(index === 1) ? 'order-[-5]' : 'order-2'} rounded-[16px]`}
                            src={value.img.trimEnd()} // Remove trailing spaces
                            alt=""
                            width={(index === 1) ? 462 : 448}
                            height={(index < 2) ? 231 : 293}
                        />

                    </div>
                ))}
            </div>
        </>
    );
}
