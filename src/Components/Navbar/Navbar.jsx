import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar' className='
      w-[95%]
      mx-auto
      h-20
      px-8
      flex justify-between
      items-center
      rounded-full
      fixed
      top-4
      left-0
      right-0
      z-50
      backdrop-blur-md
      bg-transparent
      shadow-lg
      zalando-sans-expanded-head
    '>
            <span className='text-2xl text-yellow-600 font-popins font-bold zalando-sans-expanded-head drop-shadow-xl/50  drop-shadow-amber-500/40'>
                MessiFy
            </span>

            <div className='flex gap-10 items-center justify-center font-thin'>
                <ul className='flex gap-7  text-sm'>
                    <li className='cursor-pointer hover:text-amber-500 flex items-center flex-col'>
                        <img className='invert' src="../Icons/icons8-home-24.png" alt="" />
                        <span>Home</span>
                    </li>
                    <li className='cursor-pointer hover:text-amber-500 flex items-center flex-col'>
                        <img className='invert' src="../Icons/icons8-about-24.png" alt="" />
                        <span>About</span>
                    </li>
                    <li className='cursor-pointer hover:text-amber-600 flex items-center flex-col'>
                        <img className='invert' src="../Icons/icons8-dashboard-24.png" alt="" />
                        <span>Dashboard</span>
                    </li>
                </ul>

                <button className='
          px-4 py-1.5
          rounded-lg
          bg-amber-600
          text-white
          hover:bg-amber-700
          transition
        '>
                    Login / SignUp
                </button>
            </div>
        </nav>
    )
}

export default Navbar
