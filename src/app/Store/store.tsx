import { create } from "zustand";
import { useRef } from "react";
import Slider from "../_MAINPAge/Slider";

interface StoreState {
  police: boolean;
  registration: boolean;
  registerIn: () => void;
  registerUp: () => void;
  unregister: () => void;
  inOrUp: "in" | "up";
  activePolice: () => void;
  isUserLoggedIn:boolean;
  setUserLogged:()=>void;

}
export const useStoree = create<StoreState>((set) => ({
  inOrUp: "in",
  police: false,
  isUserLoggedIn:false,
  registration: false,
  registerIn: () =>   set({ registration: true, inOrUp: "in" }),
  unregister: () =>   set({ registration: false }),
  registerUp: () =>   set({ registration: true, inOrUp: "up" }),
  activePolice:() =>  set((state) => ({ police: !state.police })),
  setUserLogged:() => set((state) => ({ isUserLoggedIn : true }))

}));


interface Modals {
    isCards:boolean;
    activateCards: ()=> void ;
    disactivateCards : ()=> void;
}

export const useModals = create<Modals>((set) => ({
  isCards: false, 
  activateCards: () =>  set({isCards:true}),
  disactivateCards: () => set({isCards:false}),
}));

//  коли я клікаю на  Log in і кнопку якщо в мене  поля не  пусті 
//  і в мене нажато Privacy Policy я заншо це в local Storage

interface Slider  {
  currentElement : number ;
  colorDot:string[];
  limitsStart: 0 ;  
  limitsEnd : 4;
  clickRightArrow:() => void;
  clickLeftArrow:() => void;

}



export const useSlider = create<Slider>((set)=>({
  currentElement:0,
  colorDot:["black","rgba(246, 230, 253, 1)","rgba(246, 230, 253, 1)","rgba(246, 230, 253, 1)","rgba(246, 230, 253, 1)"],
  limitsStart:0,
  limitsEnd:4,
  clickRightArrow: () => set((state)=>({currentElement:state.currentElement + 1})),
  clickLeftArrow: () => { set(state =>({currentElement:state.currentElement - 1})) },
  
}));

//  коли я клікаю на слайдер я заношу туди логіку то  го що елемент з індексом просто йде нафіг за екран в ліву частину 