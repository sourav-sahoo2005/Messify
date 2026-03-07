import React from 'react'

const Developers = () => {


     const developers = [
    {
      name: "Sourav Sahoo",
      role: "Frontend Developer",
      img: "../Images/Developer/Sourav.jpg"

    },
    {
      name: "Prakash Kumar Giri",
      role: "Backend Developer",
      img: "../Images/Developer/Prakash.jpeg"
    },
    {
      name: "Tapash Kumar Mohapatra",
      role: "UI/UX Designer",
      img: "../Images/Developer/Tapas.jpeg"


    },
    {
      name: "Samikshya Das",
      role: "Project Lead",
      img: "../Images/Developer/Samikshya.jpeg"
    }

  ]

    return (
        <div className='py-16 px-5 min-h-140 flex flex-col justify-between items-center gap-2'>
            <h1 className='lg:text-4xl text-3xl font-semibold'>Meet Our <span className='text-amber-500'>Developers</span> </h1>

            <div className=' py-5 px-20 m-10 min-h-80 w-full flex justify-around items-start lg:overflow-x-auto overflow-x-scroll  gap-10'>
                {/* <div className='p-5 bg-gray-700 rounded-2xl  h-80 w-56 flex-shrink-0 '></div> */}
                {developers.map((dev, index) => {
                    return (
                        <div key={index} className='p-4 h-80 lg:w-56 max-w-55 bg-gray-800 rounded-2xl shrink-0 '>
                            <img src={dev.img} alt="" className=' h-50 w-full rounded-2xl object-cover' />
                            <h2 className='mt-3 text-xl'>{dev.name}</h2>
                            <p className='text-gray-300'>{dev.role}</p>
                        </div>
                    )


                }
                )}
            </div>

        </div>
    )
}

export default Developers
