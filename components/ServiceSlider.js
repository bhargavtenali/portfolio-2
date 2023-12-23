import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {
  RxPencil2,
  RxDesktop,
  RxAccessibility,
  RxArrowTopRight,
} from "react-icons/rx";

import { FaLaptopCode } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";
import { TfiSupport } from "react-icons/tfi";

//VanillaTilt
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

// service data
export const serviceData = [
  {
    description:
      "Bhargav is one of the fine engineers I have worked with. He impressed me with his intelligence, sense of ownership and commitment. He is a versatile team player who has contributed in all layers of the product architecture, often working directly with overseas counterparts and ensuring the products or features are delivered on time with the right quality. He would be an asset to any product development team, and I would highly recommend him.",
    author: "Sreejith Viswanathan",
    desgination: "Managing Director & Head of India Operations",
    logo: "/kayrros.png",
  },
  {
    description:
      "Bhargav is a very capable software engineer who is also very resourceful in getting necessary information and learning new skills required to complete any tasks assigned to him. He has learnt new programming languages in short time necessary for certain tasks and proved to be a fast learner.He has also taken up end-to-end (Frontend and backend) features that required communications with overseas counterparts and completed them to everyone's satisfaction. Overall I would highly recommend him as part of any team.",
    author: "Chaitanya Siddeshwar",
    desgination: "Technical Director",
    logo: "/kayrros.png",
  },
];

const ServiceSlider = () => {
  // initialize Vanilla Tilt.js on each slide element
  useEffect(() => {
    Array.from(document.querySelectorAll(".tilt-slide")).forEach((slide) => {
      VanillaTilt.init(slide, {
        max: 5,
        speed: 10,
      });
    });
  }, []);
  const openWebsite = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-full sm:h-[390px] md:h-[340px] lg:h-[315px] xl:h-[460px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            onClick={() =>
              openWebsite(
                "https://www.linkedin.com/in/bhargavtenali/details/recommendations/"
              )
            }
          >
            <div className="h-auto sm:h-full md:h-[310px] lg:h-[270px] xl:h-[360px] shadow-lg shadow-blue-500 rounded-xl px-4 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-100 relative  tilt-slide">
              {/* title&describtion */}
              <div className="h-full flex flex-col justify-between mb-4 font-bold md:px-10">
                <p className="mt-4 max-w-[1000px] font-sans font-semibold">
                  {item.description}
                </p>
                <div className="flex flex-col justify-end items-end h-auto">
                  <p className="text-right max-w-[400px] font-sans font-semibold">
                    - {item.author}
                  </p>
                  <p className="text-right max-w-[400px] font-sans font-semibold">
                    {item.desgination}
                  </p>
                  <Image
                    src={item.logo}
                    width={130}
                    height={80}
                    alt="logo image"
                    className="mt-2"
                  />
                </div>
              </div>
              {/* arrow */}
              <div className="text-2xl">
                <RxArrowTopRight className="group-hover:translate-x-2 rotate-45 absolute bottom-4 left-4 group-hover:scale-[1.2] transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
