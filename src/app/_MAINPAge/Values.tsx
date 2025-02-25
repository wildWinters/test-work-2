"use client"
import { useEffect, useState } from "react";
import { poppinsFont } from "./xceedBlog";
import Image from "next/image";
import CardsModal from "./CardModal";
import { useModals } from "../Store/store";


type ValueItem = {
    title: "Courageous" | "Cheerfulness" | "Empowerment";
    description: string;
    button: string;
    img: string;
};

type ValuesGrid = ValueItem[];

export default function Values() {

    const [indexElement, setIndexElement] = useState<number>(-1);  // Використовуємо лише цей стан
    const [json, setJson] = useState<ValuesGrid>([]);
    
    const activateCards = useModals((state) => state.activateCards );

    useEffect(() => {
        fetch("/Values.json")
            .then(res => res.json())
            .then(data => setJson(data));
    }, []);

    return (
        <>
            <h2 className={`${poppinsFont.className} text-[black] text-center text-3xl font-bold my-6`}>Our Values</h2>

            <div className="grid grid-cols-3 gap-6 w-[1280px] mx-auto text-[black]">
                {json.map((value, index) => (
                    <div key={index} className="flex flex-col justify-around items-center bg-white shadow-md p-4 rounded-[16px] w-[400px] h-[500px]">
                        <h2 className="text-[32px] font-semibold">{value.title}</h2>
                        <Image src={value.img} alt={value.title} width={368} height={200} />
                        <p className="text-[14px] text-center">{value.description}</p>
                        <button className="bg-black text-white flex items-center justify-center rounded-[16px] w-[135px] h-[56px]" onClick={() => { 
                            setIndexElement(index);
                            activateCards();     

                        }}>
                            {value.button}
                        </button>
                        {/*  тут ще треба написати якщо true тоді можна буде просто рахуватти тоді дані */}
                        {index === indexElement && <CardsModal src={value.img} heading={value.title} paragraph={value.description} />}
                        {/* */}
                    </div>
                ))}
            </div>
        </>
    );
}
        