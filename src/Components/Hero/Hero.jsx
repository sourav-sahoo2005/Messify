import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import './Hero.css'

const Hero = () => {


//Animation using GSAP
  useGSAP(() => {
    gsap.from('#hero_intro', {
      y: 80,
      opacity: 0,
      duration: 2,
      ease: 'power4.out'
    })

    gsap.from('#hero_sub_intro', {
      y: 40,
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
      ease: 'power3.out'
    })
  })


  return (



    <div className=' 
    px-10 
    min-h-screen 
    w-full 
    relative 
    flex items-center justify-center
    bg-center 
    bg-cover'>
      <div className='zalando-sans-expanded-head text-center'>
        <p id='hero_intro' className='text-5xl  tracking-wide leading-14 drop-shadow-[0_0_190px_#ffffff] '>
          <span className='text-amber-500 text-6xl'>MessiFy</span>
          <br />One
          <span className='text-amber-600'> Platform</span>, Multiple <span className='text-amber-600'>Solution</span>
        </p>
        <p id='hero_sub_intro' className='text-xl mt-1 font-light'>Track meals, control costs, and stay updated in real time.</p>
      </div>

    </div>
  )
}

export default Hero
