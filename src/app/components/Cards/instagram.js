import React from "react";
import { instagram } from "@/coconut-oil";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Instagram = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:my-24 my-16">
        <h1 className="font-cormorant text-[#593B1F] font-normal sm:text-3xl text-center mb-3 italic text-xl">
          BE PART OF OUR INSTAGRAM FAMILY
        </h1>
        <div className=" flex-wrap justify-center gap-4 sm:flex hidden ">
          {instagram[0].images.map((image, index) => (
            <>
              <a href={image.link}>
                <div key={index} className="sm:w-auto border border-[#D1B87A]">
                  <img
                    src={image.image}
                    alt={`Instagram image ${index + 1}`}
                    className="sm:w-64 h-64 object-cover rounded-lg shadow-md p-2"
                  />
                </div>
              </a>
            </>
          ))}
        </div>

        <div className="flex mx-auto justify-center sm:hidden  ">
          <Swiper
            modules={[Pagination]}
            spaceBetween={7}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
          >
            {instagram[0].images.map((image, index) => (
              <SwiperSlide key={index}>
                <a href={image.link}>
                  <img
                    className="w-full h-auto"
                    src={image.image}
                    alt={`Instagram image ${index + 1}`}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Instagram;
