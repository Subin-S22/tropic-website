import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="relative">
        <div className="sm:block hidden">
          <img
            className="h-full w-full"
            src="/image/banner/contactusl.jpg"
            alt=""
          />
        </div>
        <div className="sm:hidden block">
          <img
            className="h-full w-full"
            src="/image/banner/contactusm.jpg"
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
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-center max-w-screen-lg mx-auto sm:flex-row flex-col items-center mt-4 w-3/4">
        <div className="justify-end w-1/2 sm:flex hidden">
          <img
            className="w-full max-w-72"
            src="/image/contact/coconut1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 sm:w-1/2 sm:justify-evenly font-poppins">
          <div
            className="border border-[#593B1F] border-opacity-45 w-64 drop-shadow-2xl min-h-10 
            flex items-center shadow-xl rounded-md text-xs p-4"
          >
            <img
              className="w-7 h-5 pl-2"
              src="/image/contact/call.png"
              alt=""
            />
            <p className="pl-2">+91 9148633721</p>
          </div>
          <div
            className="border border-[#593B1F] border-opacity-45 w-64 
            drop-shadow-2xl min-h-10 flex items-center shadow-xl rounded-md text-xs p-4"
          >
            {" "}
            <img
              className="w-7 h-4 pl-2"
              src="/image/contact/mail.png"
              alt=""
            />
            <p className="pl-2">narikela.tiptur@gmail.com</p>
          </div>
          <div
            className="border border-[#593B1F] border-opacity-45 w-64 drop-shadow-2xl  
            min-h-10 flex items-center shadow-xl rounded-md text-xs p-4"
          >
            <img
              className="w-7 h-5 pl-2"
              src="/image/contact/distance.png"
              alt=""
            />
            <p className="pl-2">
              Vinayaka Nagara Tiptur Tumkur district-572201
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start sm:w-3/4  w-[95%] mx-auto sm:min-h-[350px] bg-[#EBEAD5] my-8 sm:flex-row flex-col relative min-h-[300px]">
        <div className="w-2/3  relative justify-end sm:flex hidden">
          <img
            className="w-200px h-[400px] -top-10 absolute"
            src="/image/contact/coconuttrees.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 sm:w-1/2 justify-center w-[70%] mx-auto py-3  ">
          <div className="font-cormorant sm:text-3xl text-2xl text-[#593B1F] font-semibold text-center sm:text-start sm:p-0 ">
            <p>Let's Get Connected</p>
          </div>
          <div className="border border-[#593B1F] border-opacity-40 sm:w-[70%] font-poppins text-sm bg-[#F3EEE1] text-[#000000] p-1 drop-shadow-xl rounded">
            <input
              className="bg-[#F3EEE1] text-[#000000] w-[70%] outline-none"
              placeholder=" Name : "
              type="text :"
            />
          </div>
          <div className="border border-[#593B1F] border-opacity-40 sm:w-[70%] font-poppins text-sm bg-[#F3EEE1] p-1 drop-shadow-xl rounded">
            <input
              className="bg-[#F3EEE1] w-[70%] outline-none"
              placeholder=" Email - id : "
              type="text :"
            />
          </div>
          <div className="border border-[#593B1F] border-opacity-40 sm:w-[70%] font-poppins text-sm bg-[#F3EEE1] p-1 drop-shadow-xl rounded">
            <input
              className="bg-[#F3EEE1] w-[70%] outline-none"
              placeholder=" Phone Num : "
              type="text :"
            />
          </div>
          <div className="border border-[#593B1F] border-opacity-40 sm:w-[70%] font-poppins text-sm bg-[#F3EEE1] h-12 pt-1 drop-shadow-xl rounded">
            <input
              className="bg-[#F3EEE1] w-[70%] outline-none"
              placeholder=" Subject : "
              type="text :"
            />
          </div>
          <div className="sm:block hidden">
            <button className="bg-[#D1B87A] p-2 text-[#1B2F1F] rounded font-poppins sm:w-[30%] w-[60%] ">
              Submit
            </button>
          </div>
          <div className="sm:hidden block">
            <button className="bg-[#D1B87A] p-2 text-[#1B2F1F] rounded font-poppins sm:w-[30%] w-[60%] flex justify-center mx-auto sm:justify-start">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
