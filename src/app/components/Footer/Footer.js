"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer className="bg-[#1B2F1F]">
        <div className="mb-5">
          <div className="bg-[#1B2F1F] mb-4 pt-5 max-w-screen-lg mx-auto flex justify-center items-center">
            <img
              className="w-15 h-14 object-fill"
              src="/image/brandicon/barndlogo.png"
              alt=""
              onClick={() => router.push("/")}
            />
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 sm:text-center text-sm text-start bg-[#1B2F1F] 
            px-4 font-poppins tracking-wide text-[#F3EEE1] max-w-screen-lg mx-auto"
          >
            <div className="flex flex-col">
              <div className="text-center md:text-start leading-6">
                Narikela, from Tiptur since 1954, offers premium cold-pressed
                coconut oil. We honor tradition with quality, supporting local
                farmers and sustainable practices.
              </div>
            </div>
            <div className="flex flex-col py-3 gap-2 sm:mt-0 text-center">
              <a
                href="/about"
                className="hover:text-green-300 underline font-bold"
              >
                About Us
              </a>

              <a
                href="/plp"
                className="hover:text-green-300 underline font-bold"
              >
                Products
              </a>

              <a
                href="/blogs"
                className="hover:text-green-300 underline font-bold"
              >
                Blogs
              </a>

              <a
                href="/contact"
                className="hover:text-green-300 underline font-bold"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-3 sm:mt-0 flex flex-col justify-start gap-2 mx-auto md:mx-0">
              <div className="flex gap-2">
                <img className="h-6 w-6" src="/icons/footer/call.png" alt="" />
                <p>+91-9148633721</p>
              </div>
              <div className="flex gap-2">
                <img className="h-6 w-6" src="/icons/footer/mail.png" alt="" />
                <p>narikela.tiptur@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <img
                  className="h-6 w-6"
                  src="/icons/footer/distance.png"
                  alt=""
                />
                <p className="text-start">
                  Vinayaka Nagara,
                  <br /> Tiptur Tumkur district-572201
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 p-8 justify-center items-center">
            <img
              className="h-8 bg-[#1B2F1F]"
              src="/icons/footer/Facebook.svg"
              alt=""
            />
            <img className="h-6" src="/icons/footer/youtube.png" alt="" />
            <img
              className="h-8 bg-[#1B2F1F]"
              src="/icons/footer/Instagram.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center bg-[#D1B87A] text center h-10 items-center">
          <img className="h-5" src="/icons/footer/copyright.png" alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
