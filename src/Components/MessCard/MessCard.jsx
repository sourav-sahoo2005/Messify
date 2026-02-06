import React from 'react'

const MessCard = (props) => {



    const { messName, type, capacity, vacancy, price, location, amenities } = props.data



    return (

        <div className=" my-2 flex flex-col justify-evenly p-3 lg:h-70 md:h-70 h-85 lg:w-60 md:w-60 w-full rounded-2xl bg-white shadow-2xl text-black relative ">
            <div className="top p-2  flex justify-between items-center ">
                <span className='p-0.5 lg:h-7 md:h-7 h-10 lg:w-7 md:w-7  w-10 flex justify-center items-center  font-bold bg-amber-300 rounded-4xl '>{messName.split("")[0]}</span>
                <span className={` ${vacancy !== 0 ? 'block' : 'hidden'} w-20 px-3 py-1  font-semibold text-white text-[11px] text-center  bg-red-700 cursor-pointer absolute top-0 right-0 rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-gray-950/50`}>
                    Vacant
                </span>
                {/* <span className={` ${vacancy !== 0 ? 'block' : 'hidden'} w-20 px-3 py-1 border font-semibold text-white text-[11px] text-center rounded-2xl bg-red-700 cursor-pointer`}>
                    Vacant
                </span> */}
            </div>
            <div className="center  p-2 pb-2 border-b border-b-gray-300 ">
                <span className='lg:text-sm md:text-sm text-xl font-semibold line-clamp-1'>{messName}</span>
                <span className=' lg:text-sm  md:text-sm'>{vacancy}/{capacity}</span>
                {/* <h3 className=' font-bold text-sm'>Vacant : {vacancy}</h3> */}
                <div className="mt-2 tag flex text-[9px] gap-2 text-center">
                    <span className='bg-gray-300 py-1 px-2 rounded-xl'>{type}</span>
                    <div className='flex items-center gap-1'>
                        {amenities.map((amenity, index) => (
                             <span className='bg-gray-300 py-1 px-2 rounded-xl'>{amenity}</span>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col pt-2 '>
                    <span className='font-semibold lg:text-sm  md:text-sm'>{price}/-</span>
                    <span className='lg:text-[11px] md:text-[11px] text-[12px] text-gray-800'>{location.area}, {location.city}</span>
                </div>
            </div>
            <div className="p-2  bottom flex justify-between gap-4 items-center">

                <button className='lg:text-[10px] md:text-[10px] text-sm w-1/2 font-semibold   px-2 lg:py-2 md:py-2 py-3 border rounded text-center cursor-pointer '>Details</button>
                <button className='lg:text-[10px] md:text-[10px] text-sm w-1/2 bg-amber-600 text-white px-2 lg:py-2 md:py-2 py-3 rounded text-center cursor-pointer '>Contact Now</button>
            </div>
        </div>
    )
}

export default MessCard
