import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { source3 } from "./lastNews";
import Link from "next/link";

export default function Footer() {
    const listFooter: string[] = [
        "Success Stories", "Home", "Services", "Blog", "About us", "Careers"
    ];   

    const images: string[] = [  
        "/Dribbble Fill (1).png",
        "/linkedin (1).png",
        "/Instagram Fill (1).png",
        "/Facebook Fill (1).png",
        "/Vector (9).png"
    ];

    return (
        <footer className="flex flex-col items-center bg-black w-full py-6 gap-6">  

          
            <div className="flex flex-col items-center">
                <Image src="/Group 166 (7).png" alt="Company Logo" width={71} height={57} />
                <p className="bg-gradient-to-r from-[#FF3E80] to-[#5B68DC] text-transparent bg-clip-text text-lg">
                    Company Name
                </p>
            </div>

            {/* Навігація */}
            <nav className="flex justify-center gap-6">
                {listFooter.map((value, index) => (
                    <Link key={index} href="#" className={`text-white text-sm ${source3.className}`}>
                        {value}
                    </Link>
                ))}
            </nav>

            {/* Соцмережі */}
            <ul className="flex justify-center gap-4">
                {images.map((src, i) => (
                    <li key={i}>
                        <Link target="_blank" href="https://www.w3schools.com/">
                            <Image src={src} alt="Social Media" width={20} height={20} />
                        </Link>
                    </li>
                ))}
            </ul>

        </footer>
    );
}
