import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import AboutDetails from './AboutDetails';
import Developers from './Developers';




const About = () => {

 

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
      {/*fixed background image */}
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
        <AboutDetails/>

        {/* Developers Section */}
        <Developers/>

       

      </div>

    </div>
  )
}

export default About
