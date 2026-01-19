import React, { useRef } from 'react'

const HeroSearchBar = () => {

    const searchImg = useRef(null);
    const searchBar = useRef(null);

    function openSearch() {
        searchImg.current.style.display = "none";
        searchBar.current.style.height = "230px"
        searchBar.current.style.borderRadius = "16px"
        // searchBar.current.style.border = "1px solid #44403c"
        searchBar.current.style.backgroundColor = "#090808"

    }

    
    return (
        <div
            className='rounded-2xl px-10 py-2 h-20  transition-all duration-1000 ease-in-out overflow-hidden flex flex-col items-center'
            ref={searchBar}
        >
            <div
                className='  rounded-full relative '
            >
                <input
                    type="text"
                    name="search"
                    id="search_bar"
                    className='  px-10 h-15 w-140 border border-zinc-600 rounded-full outline-none bg-zinc-950 '
                    placeholder='Search By Mess Name Or Place'
                />
                <img
                    src="../Icons/icons8-search-24.png"
                    alt=""
                    className='invert  absolute top-1/3 right-6 opacity-40 cursor-pointer hover:opacity-100  transition-all'
                    onClick={openSearch}
                    ref={searchImg}
                />
            </div>
            <div className='p-6 m-2 w-full flex justify-around'>
                {/* selection of type and place*/}
                <span className='text-amber-400 font-semibold'>Type : </span>
                <select name="type" id="" className='bg-transparent border-0 outline-none'>
                    <option value="boys" className='text-black'>Boys</option>
                    <option value="girls" className='text-black'>Girls</option>
                    <option value="family" className='text-black'>Family</option>
                </select>
                <span className='text-amber-400 font-semibold'>City : </span>
                <select name="City" id="" className='bg-transparent border-0 outline-none'>
                    <option value="Balasore" className='text-black'>Balasore</option>
                    <option value="Baripada" className='text-black'>Baripada</option>
                    <option value="Bhadrak" className='text-black'>Bhadrak</option>
                    <option value="Bhubaneswar" className='text-black'>Bhubaneswar</option>
                    <option value="Cuttack" className='text-black'>Cuttack</option>
                    <option value="Puri" className='text-black'>Puri</option>
                </select>
            </div>
            <button className=' h-10 w-40 rounded-full bg-amber-700 '>Search </button>
        </div>
    )
}

export default HeroSearchBar
