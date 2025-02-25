"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { useEffect, useState } from "react";

const sans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: "400",
});

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const popins400 = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function AvoidMistakes() {
  const [currentData, setCurrentData] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData(new Date());
    }, 60000); // Змінено на setInterval, як потрібно для оновлення кожну хвилину

    return () => clearInterval(interval); // Очищення інтервалу
  }, []); // Порожній масив залежностей

  // Виправлено форматування дати (додано нуль перед числом, якщо <10)
  let addOrNotAddZero = (num:number) => (num < 10 ? "0" + num : num);
  let PmOrAm = currentData.getHours() < 12 ? "AM" : "PM";

  return (
    <>
      <div className="max-w-[90vw] relative h-[450px] m-[auto] flex justify-around items-center">
        <div className={`flex flex-col justify-between h-[386px] max-w-[548px] ${popins400.className}`}>
          <p className="text-[#616161] text-[16px]">Xceed Blog</p>
          <h1 className={`text-[50px] font-[700] text-[black] ${poppinsFont.className}`}>
            10 Web Design Mistakes and How to Avoid Them
          </h1>
          <p className={`h-[93px] text-[black] ${sans3.className}`}>
            Looking for more daily inspiration? Download Muzli extension — your go-to source for discovering design ideas
            from world’s top creators!
          </p>
          <p className="text-[16px] text-[#484848]">
            {`${addOrNotAddZero(currentData.getDate())}.${addOrNotAddZero(
              currentData.getMonth() + 1
            )}, ${currentData.getFullYear()} · ${addOrNotAddZero(currentData.getHours())}:${addOrNotAddZero(
              currentData.getMinutes()
            )} ${PmOrAm} · `}
            <Link className="underline"
              href="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4"
              target="_blank"
            >
              medium.muz.li
            </Link>
          </p>
        </div>
        
        <Image src="/image 54 (9).png" alt="RobotTouchButton" width={592} height={386} />
      </div>
    </>
  );
}
