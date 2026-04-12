import React from 'react'

const HeroIntro = () => {
  return (
    <div className='zalando-sans-expanded-head text-center flex flex-col justify-center items-center lg:gap-2 gap-4'>
      <span id='hero_logo' className='text-amber-500 lg:text-5xl text-4xl'>MessiFy</span>
      <p id='hero_intro' className='lg:text-4xl text-3xl  tracking-wide lg:leading-14   '>
        
        One
        <span className='text-amber-600'> Platform</span>, Multiple <span className='text-amber-600'>Solution</span>
      </p>
      <p id='hero_sub_intro' className='lg:text-xl md:text-xl text-lg mt-1 font-light'>Track meals, control costs, and stay updated in real time.</p>
    </div>
  )
}

export default HeroIntro
