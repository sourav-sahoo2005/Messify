import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';




const About = () => {

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

  const aboutAnimation = useRef(null);
  const aboutSub = useRef(null);

  useGSAP(function(){
    gsap.from(aboutAnimation.current,{
      y:50,
      opacity:0,
      duration:2,
      delay:0.2,
      ease:'power4.out',
    })
    gsap.from(aboutSub.current,{
       y:50,
      opacity:0,
      duration:2,
      delay:0.5,
      ease:'power4.out',

    })

  })




  return (
    <div>
      {/* //fixed background image */}
      <div className='h-screen w-full bg-[url(../Images/about-back.jpg)] bg-cover  bg-no-repeat fixed top-0 '>

      </div>

      <div className='relative h-auto w-full'>

        {/* about intro Section */}

        <div  className='bg-transparent h-120 flex justify-center items-center flex-col'>
          <span ref={aboutAnimation} className='lg:text-6xl text-4xl font-semibold'>What About Us</span>
          <p ref={aboutSub} className='mt-5 text-xl text-center italic'>
            " Find your space. Live your life. <br /> Leave the rest to us "
          </p>
        </div>

        {/* about details section */}

        <div className='bg-zinc-900 min-h-screen px-10 py-15 text-xl '>
          <p>Moving to a new city is the start of a great adventure, but the struggle to find a decent room can quickly turn that dream into a headache.We are a tech-driven platform dedicated to helping you find the perfect lodging and mess services that fit your budget, your taste, and your lifestyle.
          </p>
          <h1 className='mt-10 mb-3 font-semibold text-amber-500 text-2xl'>Why Choose Us? (Lodging Specifics)</h1>
          {/* <p className='px-2'> */}
            <ul className='list-disc'>
              <li className='mb-2'><span className='text-yellow-300'>Virtual Tours:</span> "See your room before you visit. Our high-res photos and videos give you the real picture."</li>
              <li className='mb-2'><span className='text-yellow-300'>Zero Brokerage (If applicable):</span> "We connect you directly with owners/managers, saving you thousands in unnecessary fees."</li>
              <li className='mb-2'><span className='text-yellow-300'>Zero Brokerage (If applicable):</span> "Filter by roommates' preferences, profession, or proximity to your college/office."</li>
            </ul>
          {/* </p> */}
          <h1 className='mt-10 mb-3 font-semibold text-amber-500 text-2xl'># The Core Message (The Problem vs. Your Solution)</h1>
          <p>"Finding a place to stay in a new city is often a nightmare of hidden costs, unresponsive landlords, and 'catfish' photos. At Messify, we’ve redesigned the search experience. We vet every listing so you can focus on your studies or career, while we handle the hunt for your perfect room."
          </p>

        </div>

        {/* Developers Section */}

        <div className='py-16 px-5 min-h-140 flex flex-col justify-between items-center gap-2'>
          <h1 className='lg:text-4xl text-3xl font-semibold'>Meet Our Developers</h1>

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

      </div>

    </div>
  )
}

export default About
