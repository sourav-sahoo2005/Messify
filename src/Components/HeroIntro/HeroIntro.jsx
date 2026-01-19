import React from 'react'

const HeroIntro = () => {
  return (
    <div className='zalando-sans-expanded-head text-center'>
      <p id='hero_intro' className='text-5xl  tracking-wide leading-14 drop-shadow-[0_0_190px_#ffffff] '>
        <span className='text-amber-500 text-6xl'>MessiFy</span>
        <br />One
        <span className='text-amber-600'> Platform</span>, Multiple <span className='text-amber-600'>Solution</span>
      </p>
      <p id='hero_sub_intro' className='text-xl mt-1 font-light'>Track meals, control costs, and stay updated in real time.</p>
    </div>
  )
}

export default HeroIntro
