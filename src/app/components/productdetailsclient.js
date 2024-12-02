"use client";
import React, { useEffect, useState } from "react";
import {
  coconutData,
  pdp,
  keyFeature,
  ingredients,
  use1,
  use2,
} from "@/coconut-oil";
import "react-awesome-slider/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PdpKeyFeatures from "@/app/components/Cards/PdpKeyFeatures";

export default function ProductDetail({ id }) {
  // const { id } = useParams()
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [mImage, setMImage] = useState();
  const [currentImage, setCurrentImage] = useState(mImage);
  const [product, setProduct] = useState("all");
  const presentId = coconutData[0].coconut[0].variants.filter(
    (i) => i.id === id,
  );
  const handleClick = () => {
    window.open("http://wa.me/c/919148633721", "_blank");
  };
  console.log("presentItem", presentId);

  useEffect(() => {
    const newProducts = presentId.map((details) => ({
      id: details.id,
      mrp: setPrice(details?.mrp),
      name: setName(details?.name),
      size: setSize(details?.size),
      second: setSecondName(details?.secondName),
      setMImage: setMImage(details?.mainImage),
    }));
  }, [presentId]);

  const coconutOilVariants = coconutData[0].coconut[0]?.variants?.map(
    (variant) => ({
      mrp: variant.mrp,
      id: variant.id,
      sellingPrice: variant?.sellingPrice,
      mainImage: variant?.mainImage,
      name: variant?.name,
      icon: variant.icon,
      benefits: variant?.benefits,
      sellingPrice: variant?.sellingPrice,
    }),
  );

  const DesssicatePowder = coconutData[0].DesssicatePowder[0]?.variants?.map(
    (variant) => ({
      id: variant.id,
      mainImage: variant?.image,
      name: variant?.name,
      icon: variant.icon,
      benefits: variant?.benefits,
      mrp: variant?.mrp,
      sellingPrice: variant?.sellingPrice,
    }),
  );

  const data = [...coconutOilVariants, ...DesssicatePowder];
  const firstVariant = data?.[0] || {};
  const benefits = firstVariant.benefits || [];
  const icon = firstVariant.icon;

  useEffect(() => {
    if (presentId.length > 0) {
      const firstProduct = presentId[0];
      setMImage(firstProduct?.mainImage);
    }
  }, [presentId]);

  useEffect(() => {
    setCurrentImage(mImage);
  }, [mImage]);

  return (
    <div className=" ">
      <div className="relative">
        <div className="sm:block hidden">
          <img
            className="h-full w-full"
            src="/image/banner/productsl.jpg"
            alt=""
          />
        </div>
        <div className="sm:hidden block">
          <img
            className="h-full w-full"
            src="/image/banner/productsm.jpg"
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
              <a href="/plp" className="mx-1 whitespace-nowrap">
                Products
              </a>
              <img
                className="h-3 sm:h-4 md:h-5 lg:h-6 mx-1"
                src="/image/blogs/blogline.png"
                alt=""
                width={3}
                height={24}
              />
              <a href="/blogs" className="mx-1 whitespace-nowrap">
                {secondName}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2">
        <div className="max-w-screen-lg mx-auto">
          <div className=" text-3xl text-start mb-6 font-cormorant font-semibold text-[#593B1F]  italic py-3 mx-auto">
            NARIKELA TREASURES
          </div>
        </div>
        <div className="flex sm:justify-center sm:flex-row  justify-center gap-4">
          <div className="flex sm:flex-row  flex-col ">
            <div className="drop-shadow-2xl sm:w-[435px]  ml-2">
              <img className=" w-[98%]" src={currentImage} alt="" />
            </div>

            <div className=" sm:flex hidden mb-[1px] mt-[1px] drop-shadow-2xl  sm:flex-col  ">
              <img
                onClick={() => setCurrentImage(pdp[0].side1)}
                className="sm:w-40 sm:h-36 w-[122px]"
                src={pdp[0].side1}
                alt=""
              />
              <img
                onClick={() => setCurrentImage(pdp[0].side2)}
                className="sm:w-40 sm:h-36  w-[122px]"
                src={pdp[0].side2}
                alt=""
              />
              <img
                onClick={() => setCurrentImage(pdp[0].side3)}
                className="sm:w-40 sm:h-36  w-[122px]"
                src={pdp[0].side3}
                alt=""
              />
            </div>
          </div>

          <div className=" sm:flex-col sm:ml-4 sm:justify-end sm:my-2 flex-col justify-end mb-2 sm:flex hidden ">
            <div className="font-poppins mr-2">
              <p className="font-poppins font-semibold text-xl mb-4">{name}</p>
              <p className="sm:text-[10px] font-light text-[7px]">
                MRP INCLUSIVE OF ALL TAXES
              </p>
              <div className="flex ">
                <img
                  className="w-4 h-4 mt-1"
                  src="/image/pdp/currencylogo.png"
                  alt=""
                />{" "}
                <p>{price}</p>
              </div>
            </div>

            <div
              className="flex flex-col  text-sm border border-gray-900 pl-2 pt-2 pb-2 shadow-lg drop-shadow-2xl 
              border-opacity-30 rounded-sm sm:w-40 w-28 font-poppins mr-2 mt-8"
            >
              <div className="flex p-2 items-center">
                <img
                  className="sm:w-5 sm:h-5 w-4 h-4"
                  src="/image/pdp/verified.png"
                  alt=""
                />
                <p className="sm:pl-2 pl-1 text-[#593B1F] sm:text-sm text-[10px] ">
                  100%
                </p>
                <p className="sm:pl-1  pl-0.5 sm:text-sm text-[10px]">
                  Genuine
                </p>
              </div>
              <div className="flex  p-2 ">
                <img
                  className="sm:w-5 sm:h-5 w-4 h-4"
                  src="/image/pdp/payment-method 1.png"
                  alt=""
                />
                <p className="sm:pl-2 pl-1  text-[#593B1F]sm:text-sm text-[10px]">
                  {" "}
                  Secure{" "}
                </p>
                <p className="sm:pl-1 pl-0.5 sm:text-sm text-[10px]">
                  {" "}
                  Payment
                </p>
              </div>
              <div className="flex p-2">
                <img
                  className="sm:w-5 sm:h-4 w-4 h-3 mt-1"
                  src="/image/pdp/shipped.png"
                  alt=""
                />
                <p className="sm:pl-2 pl-1 text-[#593B1F] sm:text-sm text-[10px] ">
                  {" "}
                  Free{" "}
                </p>{" "}
                <p className="sm:pl-1 pl-0.5 sm:text-sm text-[10px]">
                  Shipping
                </p>
              </div>
            </div>

            <button
              className="bg-[#D1B87A] text-[#1B2F1F] font-poppins rounded-md sm:w-40 w-28 py-2 mt-4 drop-shadow-lg"
              onClick={() => handleClick}
            >
              Order Now
            </button>
          </div>
        </div>

        <div className=" sm:hidden  sm:mb-[1px] sm:mt-[1px] drop-shadow-2xl flex sm:flex-col mx-auto items-center justify-center ">
          <Swiper
            modules={[Pagination]}
            spaceBetween={7}
            slidesPerView={3}
            loop={true}
            cssMode={true}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <img
                onClick={() => setCurrentImage(pdp[0].side1)}
                className="w-full h-auto"
                src={pdp[0].side1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => setCurrentImage(pdp[0].side2)}
                className="w-full h-auto"
                src={pdp[0].side2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => setCurrentImage(pdp[0].side3)}
                className="w-full h-auto"
                src={pdp[0].side3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => setCurrentImage(pdp[0].main)}
                className="w-full h-auto"
                src={pdp[0].side3}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className=" flex   mx-2 flex-col  my-3 sm:hidden ">
          <div className="font-poppins mr-2 flex flex-col gap-2">
            <p className="font-poppins font-semibold text-[16px]">{name}</p>
            <h6 className="font-[3px]  text-[12px]">
              MRP INCLUSIVE OF ALL TAXES
            </h6>
            <div className="flex ">
              <img
                className="w-5 h-5 mt-1"
                src="/image/pdp/currencylogo.png"
                alt=""
              />{" "}
              <p className="text-[20px]">{price}</p>
            </div>
          </div>

          <div className="flex  justify-between w-full mt-2">
            <div className="font-poppins  sm:hidden block  rounded-sm  space-y-1.5 p-2">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="flex  text-[#1B2F1F]">
                  <img src={icon} alt="" className="w-2 h-2 mr-2" />
                  <span className="text-[12px] sm:text-xs">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col  text-sm border border-gray-900  pl-2 pt-2 pb-2 shadow-lg drop-shadow-2xl border-opacity-30 rounded-sm sm:w-40 font-poppins mr-20 p-4">
              <div className="flex pb-1  ">
                <img
                  className="sm:w-5 sm:h-4 w-4 h-3  mt-1"
                  src="/image/pdp/verified.png"
                  alt=""
                />
                <p className="sm:pl-2 pl-1 text-[#593B1F] sm:text-sm text-[10px] ">
                  {" "}
                  100%{" "}
                </p>
                <p className="sm:pl-1  pl-0.5 sm:text-sm text-[10px]">
                  Genuine
                </p>
              </div>
              <div className="flex  pb-1 ">
                <img
                  className="sm:w-5 sm:h-4 w-4 h-3 mt-1"
                  src="/image/pdp/payment-method 1.png"
                  alt=""
                />
                <p className="sm:pl-2 pl-1  text-[#593B1F]sm:text-sm text-[10px]">
                  {" "}
                  Secure{" "}
                </p>
                <p className="sm:pl-1 pl-0.5 sm:text-sm text-[10px]">
                  {" "}
                  Payment
                </p>
              </div>
              <div className="flex">
                <img
                  className="sm:w-5 sm:h-4 w-4 h-3 mt-1"
                  src="/image/pdp/shipped.png"
                  alt=""
                />
                <p className="sm:pl-2 pl-1 text-[#593B1F] sm:text-sm text-[10px] ">
                  {" "}
                  Free{" "}
                </p>{" "}
                <p className="sm:pl-1 pl-0.5 sm:text-sm text-[10px]">
                  Shipping
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="bg-[#D1B87A] text-[#1B2F1F] font-poppins rounded-md sm:w-40 w-28 py-2 mt-2 drop-shadow-lg my-1"
          >
            Order Now
          </button>
        </div>
        <div className=" sm:my-10 my-3 max-w-screen-lg p-4 sm:p-8 mx-auto">
          <h1 className="sm:mx-auto text-[#1B2F1F] font-semibold text-2xl sm:text-3xl font-poppins border-b border-[#593B1F] mx-auto">
            Product Description
          </h1>

          <div className="mx-auto my-2 font-poppins flex flex-col gap-2 mt-8">
            <div className="flex gap-1 items-center">
              <p className=" sm:text-xl font-medium text-[#1B2F1F] text-xs ">
                Size :
              </p>
              <p className="mt-[px] sm:text-sm text-xs"> {size}</p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="sm:text-xl font-medium text-[#1B2F1F]  text-xs">
                Used For :
              </p>{" "}
              <p className="mt-[x] sm:text-sm text-xs">
                Cooking oil, Body Lotion, Hair Oil
              </p>
            </div>
            <p className="text-[#1B2F1F] leading-6 sm:leading-8 sm:text-sm text-xs tracking-wide mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              ut aliquam purus sit amet. Sagittis id consectetur purus ut
              faucibus pulvinar elementum integer. Et ultrices neque ornare
              aenean euismod elementum nisi quis eleifend. Ultricies integer
              quis auctor elit sed vulputate. Aliquet sagittis id consectetur
              purus ut faucibus pulvinar elementum. Pharetra magna ac placerat
              vestibulum lectus mauris. Ligula ullamcorper malesuada proin
              libero. Ut faucibus pulvinar elementum integer enim neque.
              Vehicula ipsum a arcu cursus. Placerat in egestas erat imperdiet
              sed euismod nisi.
            </p>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto p-4 sm:p-8">
          <div className="text-[#1B2F1F] font-semibold sm:text-xl font-poppins  border-b border-[#593B1F] my-3">
            Why Use Narikela Coconut Oil?
          </div>

          <div className="sm:block hidden">
            <div className="flex  justify-center-center mx-auto">
              {keyFeature.map((k, index) => (
                <img
                  className="sm:w-1/4 mt-2 flex-1"
                  key={index}
                  src={k.key}
                  alt="image not here"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex mx-auto justify-center sm:hidden ">
          <Swiper
            modules={[Pagination]}
            spaceBetween={4}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
          >
            {keyFeature?.map((k, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-full"
                  src={k.key}
                  alt={`Ingredient ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="max-w-screen-lg mx-auto p-4 sm:p-8">
          <div className="mx-auto text-[#1B2F1F] font-semibold sm:text-xl font-poppins  border-b border-[#593B1F] my-3">
            Key Features Of Our Products
          </div>
          <div className="mx-auto justify-center sm:block hidden ">
            <img className="mt-2" src="/image/pdp/group.png" alt="" />
          </div>
        </div>
        <PdpKeyFeatures />

        <div className="max-w-screen-lg mx-auto p-4 sm:p-8 mb-10">
          <div className="text-[#1B2F1F] font-semibold sm:text-xl font-poppins border-b border-[#593B1F] my-5">
            Ingredients Used For Production
          </div>
          {/* <div className="sm:block hidden"> */}
          {/*   <div className="flex mx-auto justify-center"> */}
          {/*     {ingredients?.map((k, index) => ( */}
          {/*       <img */}
          {/*         className="sm:w-1/4" */}
          {/*         key={index} */}
          {/*         src={k.ingredients} */}
          {/*         alt="image not here" */}
          {/*       /> */}
          {/*     ))} */}
          {/*   </div> */}
          {/* </div> */}
          <div className="flex mx-auto justify-center sm:hidden w-[93%]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={7}
              slidesPerView={2}
              loop={true}
              pagination={{
                clickable: true,
              }}
            >
              {ingredients?.map((k, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="w-full h-auto"
                    src={k.ingredients}
                    alt={`Ingredient ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden sm:flex mx-auto justify-center  w-[93%]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={7}
              slidesPerView={3}
              loop={true}
              pagination={{
                clickable: true,
              }}
            >
              {ingredients?.map((k, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="w-full h-auto"
                    src={k.ingredients}
                    alt={`Ingredient ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
