import React from 'react'
import { useLocation, Link, matchPath } from 'react-router'
import './Navbar.css'

const Navbar = () => {

    const location = useLocation();
    const path = location.pathname;

    // Convert to lowercase to prevent case-sensitivity bugs
    const pathname = location.pathname.toLowerCase();

    // Hide if path is exactly '/admin/dashboard' OR starts with '/admin/dashboard/'

    //   const isDashboard = path === '/admin/profile' || path.startsWith('/admin/profile/' || path === '/:messingId/messing-dashboard');
    const isDashboard =
        pathname.startsWith('/admin/profile') ||
        !!matchPath({ path: "/:messingId/messing-dashboard" }, path);

    const isMessPage = (pathname.startsWith('/mess/') || !!matchPath({ path: "/mess/:id" }, path)) ||
        (pathname.startsWith('/track-meal') || !!matchPath({ path: "/track-meal" }, path)) ||
        (pathname.startsWith('/meal-status') || !!matchPath({ path: "/meal-status/:mealId" }, path));

    const isSearch = pathname.startsWith('/search') || !!matchPath({ path: "/search" }, path);


    return (
        <>
            <nav className={`
                p-5 
                h-15 
                w-full 
                fixed  
                justify-between 
                items-center 
                lg:hidden 
                md:hidden  
                zalando-sans-expanded-head 
                z-10 
                bg-black/50
                ${isMessPage ? 'hidden' : 'flex'}
                ${isSearch ? 'hidden' : 'flex'}
                ${isDashboard ? 'hidden' : 'flex'}
                 backdrop-blur-md 
                `}>
                <Link to='/' className='text-xl text-amber-500 drop-shadow-xl/50  drop-shadow-amber-500/40'>
                    MessiFy

                </Link>
                <Link
                    className='px-4 py-1.5  rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all '
                    to="/login"
                >
                    Login
                </Link>

            </nav>
            <nav id='navbar' className={`
      w-[95%]
      mx-auto
      h-15
      px-8
      ${isDashboard ? 'hidden' : 'flex'}
      justify-between
      items-center
      rounded-full
      fixed
      lg:top-4
      md:top-4
      bottom-2
      left-0
      right-0
      z-50
     ${isMessPage ? 'bg-linear-to-r from-slate-950 via-indigo-900 to-slate-950 text-white border border-white/10' : 'bg-[#34333350]'}
      shadow-lg
      zalando-sans-expanded-head
    `}>
                <Link to='/' className='text-xl text-amber-500 drop-shadow-xl/50 hidden md:block drop-shadow-amber-500/40'>
                    MessiFy
                </Link>

                <div className='flex lg:w-auto md:w-auto w-full gap-10 items-center justify-center font-thin'>
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
                                        className="invert w-5 h-5 "
                                        src={`../Icons/icons8-${item.toLowerCase()}-24.png`}
                                        alt=""
                                    />{item}</Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        className='px-4 py-1.5 text-sm rounded-full bg-linear-to-r from-amber-700 via-amber-600 to-amber-700 text-white hover:bg-amber-700 transition-all hidden md:block '
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
