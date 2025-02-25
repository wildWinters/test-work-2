"use client"

import Header from "./_MAINPAge/header";
import AvoidMistakes from "./_MAINPAge/xceedBlog";
import LastNews from "./_MAINPAge/lastNews";
import Values from "./_MAINPAge/Values";
import Slider from "./_MAINPAge/Slider";
import Footer from "./_MAINPAge/Footer";
import RegistrationModal from "./_MAINPAge/RegistarionModal";

import { useStoree } from "./Store/store";


export default function Home() {


  const registration = useStoree((state) => state.registration); 
  const inOrUps = useStoree((state) => state.inOrUp); 
    

  return (
    <>
      <Header/>
      <AvoidMistakes />
      <LastNews />
      <Values />
      <Slider />
      <Footer/>\
       
      {registration  &&   <RegistrationModal inOrUp={inOrUps} />  } 

    </>
  );
}
