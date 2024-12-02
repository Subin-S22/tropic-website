import React, { useEffect, useState } from "react";
import IconButton from "../buttons.js/iconButton";

import { useRouter } from "next/navigation";

export default function Content() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/plp");
    console.log("clicked");
  };
  return (
    <div className="pt-1 md:block hidden">
      <div className="flex justify-around items-center gap-6">
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)] mr-3"
          onClick={() => router.push("/about")}
        >
          About Us
        </button>
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)] mr-3"
          onClick={() => router.push("/plp")}
        >
          Products
        </button>
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)] mr-3"
          onClick={() => router.push("/blogs")}
        >
          Blogs
        </button>
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)]"
          onClick={() => router.push("/contact")}
        >
          Contact
        </button>
        {/* <IconButton icon="fab fa-facebook text-[rgb(186,129,75)] fa-xl" />
                <IconButton icon="fab fa-instagram text-[rgb(186,129,75)] fa-xl" /> */}
      </div>

      <>
        {/* <button className="text-xl subpixel-antialiased text-[rgb(186,129,75)] sm:hidden block" onClick={handleClick}>
                    Products
                </button > */}
      </>
    </div>
  );
}
