import React from 'react'
import { Github, Instagram, Linkedin } from 'lucide-react'

const Developers = () => {


  const developers = [
    {
      name: "Sourav Sahoo",
      img: "../Images/Developer/Sourav.jpg",
      github: "https://github.com/sourav-sahoo2005",
      linkedin: "https://www.linkedin.com/in/sourav-sahoo01/",
      instagram: "https://www.instagram.com/wdsourav?igsh=Y3B3OG44Z3Q4cXpl"

    },
    {
      name: "Prakash Ku Giri",
      img: "../Images/Developer/Prakash.jpeg"
    },
    {
      name: "Tapash Ku Mohapatra",
      img: "../Images/Developer/Tapas.jpeg"


    },
    {
      name: "Samikshya Das",
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

            <div
              key={index}
              className='group relative p-4 lg:h-70 h-80 lg:w-58 max-w-65 bg-gray-800 rounded-2xl shrink-0 overflow-hidden'
            >
              {/* Background Image */}
              <img
                src={dev.img}
                alt={dev.name}
                className='h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110'
              />

              {/* Overlay Content */}
              <div className='absolute rounded-2xl inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 lg:translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out'>

                <h2 className='pb-2 text-xl font-bold text-white'>{dev.name}</h2>

                <div className='flex gap-4 items-center'>
                  {dev.github && (<a href={dev.github} className="hover:text-amber-400 transition-colors">
                    <Github />
                  </a>)}

                  {dev.linkedin && (<a href={dev.linkedin} className="hover:text-blue-500 transition-colors">
                    {/* Assuming you have a LinkedIn icon component */}
                    <Linkedin />
                  </a>)}
                  {dev.instagram && (
                    <a href={dev.instagram} className="hover:text-pink-500 transition-colors">
                      {/* Assuming you have an Instagram icon component */}
                      <Instagram />
                    </a>
                  )}
                </div>

              </div>
            </div>
          )


        }
        )}
      </div>

    </div >
  )
}

export default Developers
