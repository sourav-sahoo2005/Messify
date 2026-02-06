import React from 'react'
import MessData from './FindMessData';
import MessCard from '../MessCard/MessCard';

const FindMess = () => {
  return (
    <div className='min-h-screen w-full lg:pt-30 pt-25 lg:p-10 p-5 mb-5'>
      <form className='bg-zinc-900 h-auto w-full rounded p-5 flex justify-between items-center gap-5 flex-wrap relative ' method='POST' action='/search'>
        <div className='w-5/6 flex justify-between items-center gap- flex-wrap  '>
          {/* search name */}
          <label className='h-auto lg:w-1/3  lg:border-r-2 flex items-center'>
            <img className='invert' src="../Icons/icons8-search-24.png" alt="" />
            <input className='h-10 lg:w-full p-3   outline-0  ' type="text" name="messname" placeholder='Search by Mess Name' id="" />
          </label>

          {/* city */}
          <label htmlFor='City' className='h-10 lg:w-1/3 lg:border-r-2 flex items-center justify-center  ' >
            <img className='invert' src="../Icons/icons8-location-24.png" alt="" />
            <span className='text-amber-400 font-semibold ml-2'>City : </span>
            <select name="City" id="" className='ml-4 bg-transparent border-0 outline-none'>
              <option value="Balasore" className='text-black'>Balasore</option>
              <option value="Baripada" className='text-black'>Baripada</option>
              <option value="Bhadrak" className='text-black'>Bhadrak</option>
              <option value="Bhubaneswar" className='text-black'>Bhubaneswar</option>
              <option value="Cuttack" className='text-black'>Cuttack</option>
              <option value="Puri" className='text-black'>Puri</option>
            </select>
          </label>



          <label htmlFor='City' className='h-10 lg:w-1/3 lg:border-r-2 flex items-center justify-center  '>
            <img className='invert' src="../Icons/icons8-category-24.png" alt="" />
            <span className='text-amber-400 font-semibold ml-2'>Type : </span>

            <select name="City" id="" className='ml-4 bg-transparent border-0 outline-none'>
              <option value="All" className='text-black'>All</option>
              <option value="Boys" className='text-black'>Boys</option>
              <option value="Girls" className='text-black'>Girls</option>
              <option value="Family" className='text-black'>Family</option>
              <option value="Students" className='text-black'>Students</option>
              <option value="WorkingProf" className='text-black'>Working Professionals</option>
            </select>
          </label>

        </div>

        {/* submit button */}

        <input type="submit" value="Search" className='h-10 bg-amber-600 hover:bg-amber-700 px-6 rounded  ' />

        {/* Filter */}

        <div className='p-5 bg-zinc-900 min-h-[69vh] absolute top-23 left-0 w-[21vw] rounded lg:block hidden  '>
          <h2 className='font-semibold'>Filter By</h2>

          {/* pricing */}
          <div className=' mt-3 border-b border-zinc-400 w-full py-2 relative group'>
            <p>Price Range</p>
            <img src="../Icons/icons8-down-arrow-24.png" alt="" className='invert absolute right-0 top-1.5 group-hover:rotate-180 transition-all duration-300 ease-in-out' />
            <div className='
            
                          max-h-0
                          overflow-hidden
                          opacity-0
                          group-hover:max-h-40 
                          group-hover:opacity-100 
                           group-hover:my-10
                          transition-all 
                          duration-400 
                          ease-in-out flex flex-col gap-2 '>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                800 - 1200
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                1200 - 1600
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                1600 - 2500
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Above 2500
              </label>


            </div>


          </div>


          {/* Amenities  */}

          <div className='mt-3 border-b border-zinc-400 w-full py-2 relative group'>
            <p >Amenities</p>
            <img src="../Icons/icons8-down-arrow-24.png" alt="" className='invert absolute right-0 top-1.5 group-hover:rotate-180 transition-all duration-300 ease-in-out' />
            <div className='
            
                          max-h-0
                          overflow-hidden
                          opacity-0
                          group-hover:max-h-40 
                          group-hover:opacity-100 
                          group-hover:my-10
                          transition-all 
                          duration-400 
                          ease-in-out flex flex-col gap-2 '>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                All
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Air Conditioning (AC)
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                WIFI
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Geyser
              </label>

            </div>


          </div>

          {/* Categoty  */}

          <div className='mt-3 border-b border-zinc-400 w-full py-2 relative group'>
            <p >Category</p>
            <img src="../Icons/icons8-down-arrow-24.png" alt="" className='invert absolute right-0 top-1.5 group-hover:rotate-180 transition-all duration-300 ease-in-out' />
            <div className='
            
                          max-h-0
                          overflow-hidden
                          opacity-0
                          group-hover:max-h-40 
                          group-hover:opacity-100 
                          group-hover:my-10
                          transition-all 
                          duration-400 
                          ease-in-out flex flex-col gap-2 '>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                All
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                One Sitted
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Two Sitted
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Three Sitted
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Four Sitted
              </label>


            </div>


          </div>

        </div>
      </form>

      {/* mess card */}

      <div className='h-auto flex'>
        <div className='h-[69vh] w-80  mt-3 rounded lg:block hidden '></div>
        <div className='  lg:ml-3 mt-3  lg:w-278 min-h-[69vh]    rounded p-5 bg-zinc-900 flex flex-wrap justify-evenly gap-3 '>
          {
            MessData.map((data, idx) => {
              return (

                <MessCard key={idx} data={data} />

              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default FindMess
