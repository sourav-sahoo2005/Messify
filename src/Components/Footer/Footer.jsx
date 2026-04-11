import React from 'react'
import { Link } from 'react-router'


const Footer = () => {
  return (
    <footer className=' lg:p-10 p-10 pb-40   min-h-90 bg-zinc-900 flex flex-col justify-between lg:gap-0 gap-20   relative '>
      <div className='flex lg:flex-row flex-col justify-around gap-10'>

        {/* Footer Header */}
        <div className='lg:w-1/4'>
          <h1 className='text-2xl font-semibold text-amber-500'>Messify</h1>
          <p className='text-sm mt-2'>An intelligent mess management solution that automates meals, reduces manual errors, and provides real-time insights for better decision-making.</p>

          <h1 className='text-xl font-semibold text-amber-500 mt-6'>Follow Us</h1>

          <div className='flex gap-3 mt-2 text-xl'>
            <i className="fa fa-instagram hover:text-pink-500 hover:drop-shadow-xl cursor-pointer"></i>
            <i className="fa fa-facebook-f hover:text-blue-600 hover:drop-shadow-xl cursor-pointer"></i>
            <i className="fa fa-twitter hover:text-blue-500 hover:drop-shadow-xl cursor-pointer"></i>
            <i className="fa fa-youtube-play hover:text-red-500 hover:drop-shadow-xl cursor-pointer"></i>

          </div>
        </div>

        <div className='lg:w-2/4  flex lg:justify-around justify-between '>
          {/* Quick Links */}
          <div className='w-1/2 flex flex-col gap-2 transition-all'>
            <h1 className='text-xl font-semibold text-amber-300'>Quick Links</h1>
            <Link to='/' className='text-sm hover:text-amber-500 block w-fit'>Home</Link>
            <Link to='/search' className='text-sm hover:text-amber-500 block w-fit'>Search</Link>
            <Link to='/faq' className='text-sm hover:text-amber-500 block w-fit'>FAQ</Link>
            <Link to='/login' className='text-sm hover:text-amber-500 block w-fit'>Login</Link>

          </div>

          {/* customer services */}
          <div className='w-1/2 flex flex-col gap-2 transition-all '>
            <h1 className='text-xl font-semibold text-amber-300'>Customer Service</h1>
            <Link to='/about' className='text-sm hover:text-amber-500 block w-fit'>About Us</Link>
            <Link to='/faq' className='text-sm hover:text-amber-500 block w-fit'>Search</Link>
            <Link to='/faq' className='text-sm hover:text-amber-500 block w-fit'>FAQ</Link>
            <Link to='/login' className='text-sm hover:text-amber-500 block w-fit'>Login</Link>

          </div>
        </div>

        {/* Contact us */}

        <div className='lg:w-1/4 '>
          <h1 className='text-xl font-semibold text-amber-300'>Contact Us</h1>
          <h2 className='mt-2 text-sm'>Email:</h2>
          <p className='text-xs text-gray-300'>messify@gmail.com</p>
          <h2 className='mt-4 text-sm'>Call:</h2>
          <p className='text-xs text-gray-300'>+91 9348121330</p>
        </div>
      </div>

      <p className='text-center text-xs text-zinc-400 '>© 2026 Messify. All rights reserved.</p>



    </footer>
  )
}

export default Footer
