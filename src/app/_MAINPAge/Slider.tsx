import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { roboto2 } from "./header";
import { Roboto } from "next/font/google";
import { useSliderStore } from "../Store/store";
import { useRef } from "react";

const robot1 = Roboto({
  subsets: ["latin"],
  weight: "400",
});

interface Slider {
  heading: string;
  img: string;
  link: string;
  types?: object;
}

export default function Slider() {
  const [json, setJson] = useState<Slider[]>([]);
  const rangeElement = useSliderStore((state) => state.rangeElement);
  const left = useSliderStore((state) => state.left);
  const position = useSliderStore((states) => states.position);
  const clickArrowRight = useSliderStore((state) => state.clickArrowRight);
  const leftArrowRight = useSliderStore((state) => state.clickleftArrow);
  const transition = useSliderStore((state) => state.transition);

  const setLeftForLi = useSliderStore( state => state.setLeftForLi);
  const dots = useRef<(HTMLLIElement | null)[]>([]); // Allow   individual elements to be null


  useEffect(() => {
    fetch("/Slider.json")
      .then((res) => res.json())
      .then((data) => setJson(data));
  }, []);

  const ulDots = [
    "black",
    "rgba(246, 230, 253, 1)",
    "rgba(246, 230, 253, 1)",
    "rgba(246, 230, 253, 1)",
  ];

  return (
    <>
      <section className="relative flex flex-col w-[100vw] h-[500px] text-[black]">
        <div
          className={`flex absolute w-[3350px] h-[465px]`}
          style={{ left: left, transition: `${transition}` }} // використовуємо стиль для динамічного оновлення
          // я то ту поставлю 
        >
          {json.map((value, index) => (
            <div className="w-[814px] h-[465px] p-[24px] mr-[20px]" key={index}>
              <h2
                className={`${robot1.className} h-[34px] box-border pb-[10px] text-[22px] border-b-2 border-[rgb(238,238,238)] mb-[20px]`}
              >
                {value.heading}
              </h2>
              <img
                src={value.img}
                alt="slider-img"
                width={782}
                height={313}
                style={{ width: "782px", height: "313px", display: "block" }}
              />
              <Link
                target="_blank"
                className="text-green-700 mt-[20px] block underline decoration-green-700 hover:text-green-800"
                href="https://nodejs.org/uk/learn/modules/backpressuring-in-streams"
              >
                See more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="w-[80%] h-[60px] m-auto flex justify-between items-center">
        <Image
          onClick={() => leftArrowRight()}
          className="w-[40px] h-[40px]"
          src="/back (2).png"
          alt=""
          width={40}
          height={40}
        />

        <ul className="flex w-[150px]">
          {ulDots.map((value, index) => (
            <li
            onClick={() => {
              if (dots.current[index] && setLeftForLi ) {  // Додаємо перевірку на clickLi
                setTimeout(() => {
                 setLeftForLi(index);
                });
              }
            }}
            key={index}
            ref={(el) => {
              dots.current[index] = el;
            }}
            className={`bg-[black] rounded-[50%] m-[5px] w-[16px] h-[16px] ${value}`}
          />
          ))}
        </ul>

        <Image
          onClick={() => clickArrowRight()}
          className="w-[40px] h-[40px] rotate-180"
          src="/back (2).png"
          alt="hello world"
          width={40}
          height={40}
        />
      </div>
    </>
  );
}
