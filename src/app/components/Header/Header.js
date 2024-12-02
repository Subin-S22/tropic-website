"use client";

import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";
import IconButton from "../buttons.js/iconButton";
import MobileMenu from "../Mobile-Menu/MobileMenu";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const showMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <div className=" px-5 pt-2 bg-[#1B2F1F] mx-auto">
      <div className="flex md:justify-around justify-between items-center">
        <div className="pt-2 md:hidden block">
          <IconButton
            handleClick={showMobileMenu}
            icon=" fas fa-bars text-[rgb(186,129,75)] fa-xl"
          />
        </div>

        {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
        <img
          className="w-10 h-10"
          src="/image/brandicon/barndlogo.png"
          alt=""
          onClick={() => router.push("/")}
        />

        <Content />
      </div>
    </div>
  );
}
