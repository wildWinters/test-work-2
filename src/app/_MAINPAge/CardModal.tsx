import { create } from "domain"
import { createPortal} from "react-dom"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { Source_Sans_3 } from "next/font/google"

import { useModals } from "../Store/store"

const ss3 = Source_Sans_3({
    subsets:["latin"],
    weight:"600"
}) // || .classname тут поставити і без того там ту штуку інтеполювати все просто 

const popins700 = Poppins({
    subsets:["latin"],
    weight:"700",
})
const popins400 = Poppins({
    subsets:["latin"],
    weight:"400",
})
interface InfoModal{
    src:string,
    heading:string,
    paragraph:string
}

export default  function  CardsModal({src,heading,paragraph}:InfoModal){

    const Cards : boolean = useModals((state) => state.isCards);
    const disactivateCards: () => void = useModals((state) => state.disactivateCards);
    return (
        <>  
         {(Cards) ?   
             createPortal(
                <>
                    <section className={`${popins700.className} text-[black] w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-50 flex justify-center items-center`}>
                        <div className="flex flex-col  border-2  bg-[white] rounded-[24px] p-[24px] max-w-[560px] w-[560px] h-[540px]">
                            <Image onClick={disactivateCards} className="ml-[auto]" src="/x-circle (2).png"  alt="exit" width={24} height={24} />  
                            <br />
                            <h2 className = "text-[32px] mb-[10px]"> {heading} </h2>
                            <Image src = {src} alt = "min-picture"  width = {512} height = {200} />  {/*useRef useRef */}
                            <p className = {`${ss3.className} mt-0`}> {paragraph}  </p>
                        </div>
                    </section>
                </>,document.body
        ) : null}
        </>
    )
}