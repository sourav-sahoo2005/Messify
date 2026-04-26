import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router';
import HeroIntro from './HeroIntro';
import PowerfulFeature from './PowerfulFeature';
import Cities from './Cities';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Feedback from './Feedback';
import { ChevronRight } from 'lucide-react';
import { useCookies } from 'react-cookie';

const Hero = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['mealId']);
  const isAuthenticated = !!(cookies.mealId); // Convert mealId to a boolean

  //Animation using GSAP
  useGSAP(() => {
    gsap.from('#hero_logo', {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: 0.2,
      ease: 'power4.out'
    })

    gsap.from('#hero_intro', {
      y: 80,
      opacity: 0,
      duration: 2,
      delay: 0.4,
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

    <div>
      <div className=' bg-[url(../Images/messify-background.jpg)] bg-cover bg-center repeat-none'>
        <div className='px-10  bg-black/50 w-full h-full'>
          <div className=' min-h-screen w-full flex flex-col items-center justify-center gap-8 py-70'>
            <HeroIntro />
            <div className='flex flex-wrap justify-center items-center gap-6 '>
              <Link
                to={'/search'}
                className='bg-linear-to-r from-amber-700 via-amber-500 to-amber-700 p-2 w-50 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-all ease-in-out duration-300'
              >Search Now
              </Link>

              <Link
                to={isAuthenticated ? `/meal-status/${cookies.mealId}` : '/track-meal'}
                className='lg:bg-black/70 bg-linear-to-r from-slate-950 via-indigo-900 to-slate-950 border p-2 px-5  w-auto flex items-center justify-center rounded-full shadow-lg  hover:scale-105 transition-all ease-in-out duration-300 gap-2'
              ><span>{isAuthenticated ? 'Check Your Meal' : 'Track Your Meal'}</span> <ChevronRight />
              </Link>
            </div>




          </div>
        </div>
      </div>

      <PowerfulFeature />
      <Cities />
      <Testimonials />
      <CTA />
      <Feedback />
    </div>
  )
}

export default Hero
