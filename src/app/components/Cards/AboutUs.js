import { useRouter } from "next/navigation";
import React from "react";

export default function AboutUs() {
  const router = useRouter();
  return (
    <div className="relative bg-[#EBEAD5] my-3 lg:mb-32 mb-24 max-h-full">
      <div className="absolute sm:block hidden">
        <img src="/image/bannerbackground/aboutbackground.png" alt="" />
      </div>
      <div className="relative z-10 max-w-screen-lg mx-auto">
        <div className="sm:w-2/1 h-auto  mx-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="lg:w-1/2 sm:pt-16 md:pt-16 px-3 flex flex-col gap-2">
                <h1 className="sm:text-3xl text-2xl font-cormorant font-medium text-[#593B1F] italic text-center sm:text-start">
                  ABOUT US
                </h1>
                <h2 className="sm:text-4xl text-3xl font-medium font-cormorant text-[#1B2F1F]  text-center sm:text-start mb-4">
                  Generations of Purity
                </h2>
                <p className=" font-poppins text-center sm:text-start tracking-wide leading-6 text-sm">
                  At Narikela, nestled in the lush greenery of Tiptur, our
                  family heritage of coconut cultivation dates back to 1954. Our
                  legacy is built on excellence and trust, passed down through
                  generations. We are expanding beyond copra to offer
                  coconut-based products, celebrating the coconut's versatility.
                  Our philosophy supports local farmers with fair and
                  sustainable practices. Each sun-ripened coconut is handpicked
                  and cold-pressed to preserve its natural richness, ensuring
                  the highest quality coconut oil
                </p>
                <button
                  onClick={() => router.push("/about")}
                  className="mt-10 bg-[#D1B87A] p-2 text-[#1B2F1F] rounded font-poppins sm:w-[30%] w-[60%]   sm:justify-start sm:block hidden "
                >
                  Know More
                </button>
                <button
                  onClick={() => router.push("/about")}
                  className="bg-[#D1B87A] p-2 text-[#1B2F1F] rounded font-poppins sm:w-[30%] w-[60%] flex justify-center mx-auto sm:justify-start sm:hidden text-lg"
                >
                  Know More
                </button>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-1 sm:gap-2 px-2 sm:px-4  sm:my-4">
                  <img
                    className="w-full h-28 sm:h-40 md:h-52 object-cover 
                    rounded-tl-sm sm:rounded-tl-md 
                    rounded-es-[40px] sm:rounded-es-[60px] md:rounded-es-[80px] 
                    rounded-se-[40px] sm:rounded-se-[60px] md:rounded-se-[80px]"
                    src="/image/flower/flower1.png"
                    alt="Card 1"
                  />
                  <img
                    className="w-full h-28 sm:h-40 md:h-52 object-cover 
                    rounded-tr-sm sm:rounded-tr-md 
                    rounded-br-[40px] sm:rounded-br-[60px] md:rounded-br-[80px] 
                    rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[80px]"
                    src="/image/flower/flower2.png"
                    alt="Card 2"
                  />
                  <img
                    className="w-full h-28 sm:h-40 md:h-52 object-cover 
                    rounded-bl-sm sm:rounded-bl-md 
                    rounded-br-[40px] sm:rounded-br-[60px] md:rounded-br-[80px] 
                    rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[80px]"
                    src="/image/flower/flower3.png"
                    alt="Card 3"
                  />
                  <img
                    className="w-full h-28 sm:h-40 md:h-52 object-cover 
                    rounded-br-sm sm:rounded-br-md 
                    rounded-es-[40px] sm:rounded-es-[60px] md:rounded-es-[80px] 
                    rounded-se-[40px] sm:rounded-se-[60px] md:rounded-se-[80px]"
                    src="/image/flower/flower4.png"
                    alt="Card 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
