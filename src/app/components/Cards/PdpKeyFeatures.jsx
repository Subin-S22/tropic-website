import React from 'react'

const PdpKeyFeatures = () => {
    return (

        <div className=" w-[93%] bg-[#EBEAD5] mx-auto py-2 sm:hidden block ">
            <div className="flex flex-col gap-3  w-[83%] mx-auto font-medium font-cormorant text-lg py-2">

                <div className="flex gap-2  ">
                    <img
                        className="w-[15%] h-[15%] ml-2  border-black p-1 rounded-full bg-[#D1B87A] drop-shadow-xl"
                        src="/icons/iconskincare.png"
                        alt=""
                    />
                    <p className=" flex items-center">Moisturizes Skin</p>
                </div>
                <div className="flex  gap-2 ">
                    <img
                        className="w-[15%] h-[15%] ml-2  border-black p-1 rounded-full bg-[#D1B87A] drop-shadow-xl"
                        src="/icons/iconimmunity.png"
                        alt=""
                    />
                    <p className=" flex items-center">Boosts Immunity </p>
                </div>
                <div className="flex  gap-2 ">
                    <img
                        className="w-[15%] h-[15%] ml-2  border-black p-1 rounded-full bg-[#D1B87A] drop-shadow-xl"
                        src="/icons/icondigestion.png"
                        alt=""
                    />
                    <p className=" flex items-center">Improves Metabolism</p>
                </div>
                <div className="flex  gap-2 ">


                    <img
                        className=" ml-2 w-[15%] h-[15%]  border-black p-1 rounded-full bg-[#D1B87A] drop-shadow-xl "
                        src="/icons/iconhealthy.png"
                        alt=""
                    />
                    <p className=" flex items-center"> Nourishes Hair </p>

                </div>
                <div className="flex  gap-2 ">

                    <img
                        className="w-[15%] h-[15%] ml-2  border-black p-1 rounded-full bg-[#D1B87A] drop-shadow-xl"
                        src="/icons/iconstamina.png"
                        alt=""
                    />
                    <p className=" flex items-center">Boosts Energy </p>
                </div>
                <div className="flex  gap-2 ">

                    <img
                        className=" ml-2 w-[15%] h-[15%]  border-black p-1 rounded-full bg-[#D1B87A] drop-shadow-xl"
                        src="/icons/iconsaturated.png"
                        alt=""
                    />
                    <p className=" flex items-center">Reduces Bad Cholesterol </p>
                </div>

            </div>


        </div>
    )
}

export default PdpKeyFeatures
