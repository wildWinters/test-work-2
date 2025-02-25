import { Roboto } from "next/font/google";
import Image from "next/image";
import { useStoree } from "../Store/store";
// Move the font loader outside the component function

const roboto = Roboto({
    subsets: ["latin"],
    weight: "700",
});

export const roboto2 = Roboto({
    subsets: ["latin"],
    weight: "400",
});




export default function Header() {
    const menuItems = ["Home", "Success Stories", "Services", "Blog", "About us", "Career"];

    const registration = useStoree((state) => state.registration); // доступ до стану
    const registerIn = useStoree((state) => state.registerIn);
    const registerUp = useStoree((state)=>state.registerUp); 
    const unregister = useStoree((state) => state.unregister);
    const inOrUp = useStoree((state)=> state.inOrUp);
    const isUserLogged = useStoree(state => state.isUserLoggedIn);

    return (
        <header className = {`w-full h-[100px] bg-[white] flex justify-evenly items-center  text-[black] ${roboto.className} `}>
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

                    <p className = {`${roboto.className} text-[black] self-center`}>{localStorage.getItem("Full Name")}</p> 
                </> 
                    : 
                <>
                    <p onClick={registerUp}>Sign Up</p>
                        <div className = "w-[2px] m-[0px] h-[80%] bg-black mr-3 ml-3" />
                    <p onClick={registerIn}>Sign In</p>
                </>
            }

            </div>
        </header>
    );
}
