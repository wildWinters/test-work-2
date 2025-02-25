import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { roboto2 } from "./header";
import { Roboto } from "next/font/google";

const robot1 = Roboto({
  subsets: ["latin"],
  weight: "400",
});

interface Slider {
  heading: string;
  img: string;
  link: string;
}

export default function Slider() {
  const [json, setJson] = useState<Slider[]>([]);

  useEffect(() => {
    fetch("/Slider.json")
      .then((res) => res.json())
      .then((data) => setJson(data));
  }, []);

  return (
    <section className="relative w-full max-w-[130%] h-[505px] flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {json.map((value, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${robot1.className} my-[0px] p-6 bg-[black] flex flex-col items-center justify-between text-[rgba(4,101,8,1)] w-[550px] h-[500px] rounded-2xl gap-4`}
            >
              <p className={`${roboto2.className} text-left`}>{value.heading}</p>
              <div className="w-[350px] h-[250px] flex items-center justify-center">
                <Image
                  className="object-cover rounded-xl"
                  src={value.img}
                  alt="slider element image"
                  width={350}
                  height={250}
                />
              </div>
              <Link href="#" className="text-blue-500 hover:underline">
                {value.link}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <div className="absolute left-0 z-10 custom-prev cursor-pointer">
        <Image src="/back (2).png" alt="left-arrow" width={40} height={40} />
      </div>
      <div className="absolute right-0 z-10 custom-next cursor-pointer">
        <Image  className="rotate-[180deg] relative right-[30px]" src="/back (2).png" alt="right-arrow" width={40} height={40} />
      </div>
    </section>
  );
}
