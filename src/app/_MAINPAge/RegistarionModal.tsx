import Values from "./Values.jsx";
import { createPortal } from "react-dom";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useStoree } from "../Store/store";
import { useRef } from "react";
import { useStore } from "zustand";

const popins = Poppins({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const popins700 = Poppins({
    subsets: ["latin"],
    weight: "700",
    display: "swap",
});

interface ModalMode {
    inOrUp: string | null;
}

interface Field {
    heading: string;
    placeholder: string;
}

export default function RegistrationModal({ inOrUp }: ModalMode) {
    const setUserLoggedd = useStoree((state)=>  state.setUserLogged);
    const registartion = useStoree(state => state.registration);
    const registerUp = useStoree(state => state.registerUp);
    const unregister = useStoree(state => state.unregister);
    const registerIn = useStoree(state => state.registerIn);
    const activePolice = useStoree(state => state.activePolice);
    const police = useStoree( state => state.police )
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const keyRefs = useRef<HTMLParagraphElement[]>([]);
    const buttonInUp :  any = useRef<HTMLButtonElement>(null);
    let fields: Field[] = [
        { heading: "Full Name", placeholder: "Name Surname" },
        { heading: "Your Email", placeholder: "Mail" },
        { heading: "Password", placeholder: "Password" },
        { heading: "Your Phone", placeholder: "Phone" },
    ];
  
    let modalHeight = inOrUp === "in" ? "h-[564px]" : "h-[373px]";

    return (
        <section className=" text-[black]  w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-50 flex justify-center items-center">
            <div
                className={`relative pt-[0px] pb-[20px] rounded-[24px] shadow-black w-[670px] p-[24px] box-border ${modalHeight} bg-white flex flex-col items-center ${popins.className} transition-all duration-300 overflow-hidden`}
            >
                <div className="w-[90%] h-[61px] flex items-center justify-between">
                    <h2 className={`text-[48px] text-center flex-1 ${popins700.className}`}>
                        {inOrUp === "in" ? "Sign in" : "Sign Up"}
                    </h2>
                    <button className="ml-auto" onClick={unregister}>
                        <Image src="/x-circle (2).png" alt="exit" width={24} height={24} />
                    </button>
                </div>

                <div className="w-full flex flex-col items-center gap-2">
                    {fields.map((value, index) =>       
                        inOrUp === "in" || (index >= 1 && index <= 2) ? (
                            <div className="w-[90%] text-left my-[5px]" key={index}>
                                <p ref={(el) => { keyRefs.current[index] = el!; }} className="mb-1">
                                    {value.heading}
                                </p>
                                <input
                                    ref={(el) => { inputRefs.current[index] = el!; }}
                                    className="w-full text-left border-b-2 outline-none border-black py-1 px-2"
                                    type="text"
                                    placeholder={value.placeholder}
                                />
                            </div>
                        ) : null
                    )}
                </div>

                {inOrUp === "in" && (
                    <div className="w-[90%] flex items-center mt-2">
                        <input className="w-[15px] h-[15px] mr-[10px]" type="checkbox" id="checkbox" onClick = {activePolice} />
                        <label htmlFor="checkbox" className="text-sm">
                            Yes, I have read and agree to Privacy Policy
                        </label>
                    </div>
                )}

                <button 
                    ref = {buttonInUp}
                    className = "w-[150px] min-h-[48px] mr-[auto] ml-6 mt-4 bg-black text-white rounded-[24px] flex items-center justify-center focus:outline-none"
                    onClick = {() => {
                            fields.forEach((_, index) => {
                                if (keyRefs.current[index] && inputRefs.current[index] && police  ) {

                                    if(buttonInUp.current.textContent === "Sign in") {                
                                        localStorage.setItem(
                                        keyRefs.current[index].textContent || `field-${index}`,
                                        inputRefs.current[index].value
                                    );
                                    unregister();
                                }
                                else { 
                                    if(inputRefs.current[1]?.value === localStorage?.getItem("Your Email") && 
                                        inputRefs.current[2]?.value === localStorage?.getItem("Password")) {
                                        setUserLoggedd();
                                        unregister();
                                    }
                                }
                                }
                            });        
                    }}
                >
                    {inOrUp === "in" ? "Sign in" : "Sign Up"}
                </button>

                <div className="w-[80%] h-[16px] flex justify-center mt-3">
                    <p className="text-start mr-[10px]">
                        {inOrUp === "in" ? "Already have an account?" : "Don’t have an account?"}
                    </p>
                    <Link
                        className="text-[#008FE0] underline"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (inOrUp === "in") 
                                registerUp();
                            else 
                                alert("hello world");

                        }}
                    >
                        {inOrUp === "in" ? "Log in" : "Sign Up"}
                    </Link>
                </div>
            </div>
        </section>
    );
}
