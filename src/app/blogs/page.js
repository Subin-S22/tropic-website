"use client";
import React from "react";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <div>
      <div className="relative">
        <div className="sm:block hidden">
          <img
            className="h-full w-full"
            src="/image/banner/blogsl.jpg"
            alt=""
          />
        </div>
        <div className="sm:hidden block">
          <img
            className="h-full w-full"
            src="/image/banner/blogsm.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-x-0 bottom-2 flex items-center justify-center">
          <div className="w-[70%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-[#263726] bg-opacity-50 border border-[#F3EEE1] border-opacity-30 drop-shadow-xl p-2 sm:p-4 flex flex-col justify-center items-center font-cormorant">
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-[#F3EEE1] whitespace-nowrap text-center">
              Experience The Natural Goodness
            </p>
            <div className="text-xs sm:text-base md:text-lg lg:text-xl text-[#D1B87A] flex flex-wrap justify-center items-center">
              <a href="/" className="mr-1 whitespace-nowrap">
                Home
              </a>
              <img
                className="h-3 sm:h-4 md:h-5 lg:h-6 mx-1"
                src="/image/blogs/blogline.png"
                alt=""
                width={3}
                height={24}
              />
              <a href="/blogs" className="mx-1 whitespace-nowrap">
                Blogs
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-3 my-3">
        <div className="my-2">
          <div className="flex sm:flex-row  flex-col sm:justify-center items-center max-w-screen-lg sm:mx-auto font-cormorant sm:space-x-7 ">
            <div className="relative sm:block hidden  ">
              <img
                className=" sm:w-72 h-full rounded-sm mt-3"
                src="/image/blogs/blog2.jpg"
                alt="sdddddddd"
              />
              <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10   w-40">
                <p className="ml-2 ">21/10/2023</p>
                <img
                  className="h-6  mt-[1px] ml-3 rounded-sm"
                  src="/image/blogs/blogline.png "
                  alt=""
                />
                <p className="ml-3">Sunday</p>
              </span>
            </div>
            <div className="sm:w-1/2 sm:text-start text-center">
              <p className="text-[#593B1F] font-medium text-2xl sm:text-3xl italic">
                BLOG HEADING
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                Blog Sub Heading
              </p>
              <p className="text-[#593B1F] mt-2 ">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor
                In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat
                Nulla Pariatur.
              </p>
            </div>

            <div className="relative sm:hidden block  ">
              <img
                className=" sm:w-72 h-full rounded-sm"
                src="/image/blogs/blog2.jpg"
                alt="sdddddddd"
              />
              <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10   w-40">
                <p className="ml-2 ">21/10/2023</p>
                <img
                  className="h-6  mt-[1px] ml-3 rounded-sm"
                  src="/image/blogs/blogline.png "
                  alt=""
                />
                <p className="ml-3">Sunday</p>
              </span>
            </div>
          </div>

          <div className="sm:flex sm:justify-evenly sm:w-full my-10">
            <hr className="sm:w-1/2 h-px bg-[#593B1F]" />
          </div>
          <div className="flex sm:flex-row  flex-col sm:justify-center sm:w-2/3 sm:mx-auto font-cormorant sm:space-x-7  ">
            <div className=" sm:w-1/2 sm:text-end  text-center pb-2">
              <p className="text-[#593B1F] font-medium text-2xl sm:text-3xl italic">
                BLOG HEADING
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                Blog Sub Heading
              </p>
              <p className="text-[#593B1F] ">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor
                In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat
                Nulla Pariatur.
              </p>
            </div>

            <div className="relative  ">
              <img
                className="sm:w-72 h-full rounded-sm"
                src="/image/blogs/blog1.jpg"
                alt="sdddddddd"
              />
              <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10 w-44  ">
                <p className="ml-2 ">21/10/2023</p>{" "}
                <img
                  className="h-6  mt-[1px] ml-3"
                  src="/image/blogs/blogline.png"
                  alt=""
                />{" "}
                <p className="ml-3">Monday</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
