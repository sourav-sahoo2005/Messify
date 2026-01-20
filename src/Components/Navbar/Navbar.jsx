import React from 'react'
import { useLocation, Link } from 'react-router'
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
            <span className='text-2xl text-yellow-600 drop-shadow-xl/50  drop-shadow-amber-500/40'>
                MessiFy
            </span>

            <div className='flex gap-10 items-center justify-center font-thin'>
                <ul className='flex gap-7  text-sm'>
                    {["Home", "About", "FAQ", "Search"].map((item, i) => (
                        <li
                            key={i}
                            className="cursor-pointer hover:text-amber-500 flex items-center flex-col"
                        >

                            <Link

                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className={`pt-1.5 ${useLocation().pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-amber-400 font-semibold" : ""} flex items-center justify-center gap-2`}
                            >
                                <img
                                    className="invert w-5 h-5"
                                    src={`../Icons/icons8-${item.toLowerCase()}-24.png`}
                                    alt=""
                                />{item}</Link>
                        </li>
                    ))}
                </ul>

                <Link
                    className='px-4 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-all '
                    to="/login"
                >
                    Login / SignUp
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
