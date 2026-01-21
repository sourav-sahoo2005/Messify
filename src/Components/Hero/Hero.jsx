import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {Link} from 'react-router'


import './Hero.css'
import HeroIntro from '../HeroIntro/HeroIntro';
import Card from '../Card/Card'
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


    <div  className=' bg-[url(../Images/messify-background.jpg)] bg-cover repeat-none'>
      <div className='px-10  bg-black/50 w-full h-full'>
      <div className=' min-h-screen w-full flex flex-col items-center justify-center gap-8 py-70'>
        <HeroIntro />
        <Link 
        to={'/search'}
        className='bg-amber-600 p-2 w-50 flex items-center justify-center rounded-xl'
        >Search Now
        </Link>
       
        


      </div>
      </div>
    </div>
  )
}

export default Hero
