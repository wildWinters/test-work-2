import { Roboto } from "next/font/google";
import Image from "next/image";

// Move the font loader outside the component function

const roboto = Roboto({
    subsets: ["latin"],
    weight: "700",
});

interface isUserLogged {
    isUserLogged : boolean;
}


export default function Header( {isUserLogged}: isUserLogged ) {
    const menuItems = ["Home", "Success Stories", "Services", "Blog", "About us", "Career"];


    return (
        <div className = {`w-[100vw] h-[100px] bg-[white] flex justify-evenly items-center  text-[black] ${roboto.className} `}>
            <div className = "w-[129px] h-[84px] flex flex-col justify-center items-center">
                <Image src = {`/Group 166 (7).png`} alt="Hello world friend my dear" width = {71} height = {57} className = "text-center" />
                <p className = "bg-[linear-gradient(90deg,#FF3E80,#5B68DC)] text-[transparent] bg-clip-text text-[18px]">
                    Company Name
                </p>
            </div>  

            <div className = "w-[628px] h-[37px] flex justify-between items-center">
                {menuItems.map((item, index) => <p key={index}>{item}</p>)}
            </div>

            <div className = "w-[145px] h-[37px] flex">
              {(isUserLogged === true)  ? 
                <> 
                    <Image className = "rounded-[50%] self-center" 
                            src = {"/jonas-kakaroto-KIPqvvTOC1s-unsplash 1 (3).png"}
                            alt = "userPicture"
                            width={32}
                            height={32}
                    />

                    <p className = {`${roboto.className} text-[black] self-center`}>Adam lambert</p> 
                </> 
                    : 
                <>
                    <p>Sign Up</p>
                        <div className = "w-[2px] m-[0px] h-[80%] bg-black mr-3 ml-3" />
                    <p>Sign In</p>
                </>
            }

            </div>
        </div>
    );
}
