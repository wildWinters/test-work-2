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
  isUserLoggedIn: boolean;
  setUserLogged: () => void;
}

export const useStoree = create<StoreState>((set) => ({
  inOrUp: "in",
  police: false,
  isUserLoggedIn: false,
  registration: false,
  registerIn: () => set({ registration: true, inOrUp: "in" }),
  unregister: () => set({ registration: false }),
  registerUp: () => set({ registration: true, inOrUp: "up" }),
  activePolice: () => set((state) => ({ police: !state.police })),
  setUserLogged: () => set((state) => ({ isUserLoggedIn: true })),
}));

interface Modals {
  isCards: boolean;
  activateCards: () => void;
  disactivateCards: () => void;
}

export const useModals = create<Modals>((set) => ({
  isCards: false,
  activateCards: () => set({ isCards: true }),
  disactivateCards: () => set({ isCards: false }),
}));

interface Slider {
  rangeElement: number;
  currentElement: number;
  position: "absolute";
  transition: "all 1s ease";
  left: `${number}%`;
  leftLi:["35%","-12%","-59%","-106%","-153%"];
  clickArrowRight: (defaultI?: number) => void;
  clickleftArrow: (defaultI?: number) => void;
  clickLi?:(index:number) => void,
  setLeftForLi?:(index:number) => void,

  // left тут буде по суті стабільним і ти чітко множиш lleft на клікнути інеекст все супер просто 
}

// просто збекрегти дані від поточного li о такі то справи прописати таку логіку влівоі вправо від того що ти там маєш і рухаєшся від того і все супер просто тут все насрпавді 
export const useSliderStore = create<Slider>((set, get) => ({
  rangeElement: 4,
  left: "35%",
  position: "absolute",
  currentElement: 0,
  leftLi:["35%","-12%","-59%","-106%","-153%"],
  transition: "all 1s ease",
  clickArrowRight: (defaultI?: number) =>
    set((state) => {
      const newLeft = parseInt(state.left) - (typeof defaultI === "number" ? defaultI : 47);
      return { left: `${newLeft}%`,click:"Image"};
    }),

  clickleftArrow: (defaultI: number = 35) =>
    set((state) => {
      const newLeft = parseInt(state.left) + (typeof defaultI === "number" ? defaultI : 47);
      return { left: `${newLeft}%`,click:"Image"};
    }),

  clickLi: (index: number) => set((state) => ({
    left: `${35 * (index ) -  47}%`,
  })),
  setLeftForLi: (index:number) => { set((state) =>({left:state.leftLi[index]}))},

}));



//  за раз можна зробити лише один клік і прикол в тому чи по суті буде ту  значення 