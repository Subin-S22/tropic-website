import React from 'react'

const HomePageIcon = () => {
    return (
        <div className="sm:hidden block my-3">
            <div className="  mx-auto py-2 mb-4 sm:hidden block relative bg-[url('/image/benifits/benefits2.png')] ">
                <div className="flex flex-col gap-3  w-[83%] mx-auto font-medium font-cormorant text-lg py-2">
                    <div className="flex gap-2">
                        <img
                            className="w-[15%] h-[15%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                            src="/icons/iconskincare1.png"
                            alt=""
                        />
                        <p className=" flex items-center text-[#D1B87A]">Moisturizes Skin</p>
                    </div>
                    <div className="flex  gap-2 ">
                        <img
                            className=" ml-2 w-[15%] h-[15%] border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl "
                            src="/icons/iconhealthy1.png"
                            alt=""
                        />
                        <p className=" flex items-center  text-[#D1B87A]"> Nourishes Hair </p>
                    </div>
                    <div className="flex  gap-2 ">
                        <img
                            className="w-[15%] h-[15%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                            src="/icons/iconimmunity1.png"
                            alt=""
                        />
                        <p className=" flex items-center  text-[#D1B87A]">Boosts Immunity </p>
                    </div>
                    <div className="flex  gap-2 ">
                        <img
                            className="w-[15%] h-[15%] ml-2  border border-[#F3EEE1] p-1 rounded-full b drop-shadow-xl"
                            src="/icons/iconstamina1.png"
                            alt=""
                        />
                        <p className=" flex items-center  text-[#D1B87A]">Boosts Energy </p>
                    </div>
                    <div className="flex  gap-2 ">
                        <img
                            className="w-[15%] h-[15%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                            src="/icons/icondigestion1.png"
                            alt=""
                        />
                        <p className=" flex items-center  text-[#D1B87A]">Improves Metabolism</p>
                    </div>
                    <div className="flex  gap-2 ">
                        <img
                            className=" ml-2 w-[15%] h-[15%] border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                            src="/icons/iconsaturated1.png"
                            alt=""
                        />
                        <p className=" flex items-center  text-[#D1B87A]">Reduces Bad Cholesterol </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageIcon
