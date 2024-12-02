import React from "react";
import IconButton from "../buttons.js/iconButton";
import { fourCards } from "@/coconut-oil";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FourCards() {
  const router = useRouter();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 p-8 mx-auto max-w-screen-lg sm:mb-16 mb-8">
        {fourCards[0]?.variants?.map((num) => (
          <div
            key={num.id}
            className="relative"
            onClick={() => router.push(`/productDetail/${num?.id}`)}
          >
            <Image
              priority
              className="w-[100%] object-cover rounded-md"
              width={500}
              height={500}
              src={num?.mainImage}
              alt={`Card ${num}`}
            />
            <div className="absolute bottom-0 left-0 right-0 pb-3 px-1 font-poppins">
              <div className="bg-[#1B2F1F] bg-opacity-95  h-10 rounded-md p-2 pr-4 w-full">
                <div className="flex justify-between items-center">
                  <div className="flex-grow text-xs mx-auto text-[#D1B87A]">
                    <p>{num?.name}</p>
                  </div>
                  <IconButton
                    icon="fas fa-chevron-right fa-xs text-[#D1B87A]"
                    className="flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
