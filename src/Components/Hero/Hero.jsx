import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import './Hero.css'
import HeroIntro from '../HeroIntro/HeroIntro';
import HeroSearchBar from '../HeroSearchBar/HeroSearchBar';

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


    <div  className='px-10 bg-[radial-gradient(circle_at_center,#131313,#0f0f0f,#000000)]'>
      <div className='min-h-screen w-full flex flex-col items-center justify-center gap-8 py-70'>
        <HeroIntro />
        <HeroSearchBar />


      </div>
    </div>
  )
}

export default Hero
