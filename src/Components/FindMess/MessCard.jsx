




import { useState } from 'react'
import { Link } from 'react-router'
import ContactPopup from './ContactPopup'



const MessCard = (props) => {



    const { messName, type, capacity, vacancy, price, address, city, amenities } = props.data
    // console.log(address)

    const [isModalOpen, setIsModalOpen] = useState(false);


    // Example data
    const currentMess = {
        messName: messName,
        ownerName: props.data.owner.name,
        email: props.data.owner.email,
        number: props.data.owner.phone
    };
    //   console.log(currentMess)



    return (
        <div>
            <div className=" my-2 flex flex-col justify-evenly p-3 lg:h-65 md:h-70 h-85 lg:w-60 md:w-60 w-80 rounded-2xl bg-white shadow-2xl text-black relative hover:scale-105 transition-transform duration-200  ">
                <div className="top p-2  flex justify-between items-center ">
                    <span className='p-0.5 lg:h-7 md:h-7 h-10 lg:w-7 md:w-7  w-10 flex justify-center items-center text-white  font-bold  rounded-4xl ' style={{
                        backgroundColor: `hsl(${Math.random() * 360}, 80%,40%)`,
                    }}  >{messName.split("")[0]}</span>
                    <span className={` ${vacancy !== 0 ? 'block' : 'hidden'} w-20 px-3 py-1  font-semibold text-white text-[11px] text-center  bg-red-700 cursor-pointer absolute top-0 right-0 rounded-bl-2xl rounded-tr-2xl shadow-lg shadow-gray-950/50 `}>
                        Vacant
                    </span>

                </div>
                <div className="center  p-2 pb-2 border-b border-b-gray-300 ">
                    <span className='lg:text-sm md:text-sm text-xl font-semibold line-clamp-1'>{messName}</span>
                    <span className=' lg:text-sm  md:text-sm'>{vacancy}/{capacity}</span>
                    {/* <h3 className=' font-bold text-sm'>Vacant : {vacancy}</h3> */}
                    <div className="mt-2 tag flex text-[9px] gap-2 text-center">
                        <span className='bg-gray-300 py-1 px-2 rounded-xl'>{type}</span>
                        <div className='flex items-center gap-1'>
                            {amenities.map((amenity, index) => (
                                <span key={index} className='bg-gray-300 py-1 px-2 rounded-xl'>{amenity}</span>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col pt-2 '>
                        <span className='font-semibold lg:text-sm  md:text-sm'>{price}/-</span>
                        <span className='lg:text-[11px] md:text-[11px] text-[12px] text-gray-800'>{address.area}, {address.landmark}, {city}</span>
                    </div>
                </div>
                <div className="p-2  bottom flex justify-between gap-4 items-center">

                    <Link to={`/mess/${props.data._id}`} className='lg:text-[10px] md:text-[10px] text-sm w-1/2 font-semibold   px-2 lg:py-2 md:py-2 py-3 border rounded text-center cursor-pointer '>Details</Link>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='lg:text-[10px] md:text-[10px] text-sm w-1/2 bg-amber-600 text-white px-2 lg:py-2 md:py-2 py-3 rounded text-center cursor-pointer '>Contact Now</button>
                </div>

            </div>
            <ContactPopup
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                messData={currentMess}
            />



        </div>


    )
}

export default MessCard
