import React from 'react'




const FilterForm = (props) => {

    const { filterForm, handleFilterChange, filters } = props

    


  return (
           <div ref={filterForm} className="hidden lg:block w-[21vw] bg-zinc-900 p-5 rounded min-h-[82vh]">
          <h2 className="font-semibold">Filter By</h2>

          {/* Example Filter */}
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
                  name='priceRange'
                  value='800-1200'
                  onChange={handleFilterChange}
                  checked={filters.priceRange.includes('800-1200')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                800 - 1200
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='priceRange'
                  value='1200-1600'
                  onChange={handleFilterChange}
                  checked={filters.priceRange.includes('1200-1600')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                1200 - 1600
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='priceRange'
                  value='1600-2500'
                  onChange={handleFilterChange}
                  checked={filters.priceRange.includes('1600-2500')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                1600 - 2500
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='priceRange'
                  value='2500+'
                  onChange={handleFilterChange}
                  checked={filters.priceRange.includes('2500+')}
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
                  name='amenities'
                  value='All'
                  onChange={handleFilterChange}
                  checked={filters.amenities.includes('All')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                All
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='amenities'
                  value='AC'
                  onChange={handleFilterChange}
                  checked={filters.amenities.includes('AC')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Air Conditioning (AC)
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='amenities'
                  value='WIFI'
                  onChange={handleFilterChange}
                  checked={filters.amenities.includes('WIFI')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                WIFI
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='amenities'
                  value='Geyser'
                  onChange={handleFilterChange}
                  checked={filters.amenities.includes('Geyser')}
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
                  name='category'
                  value='All'
                  onChange={handleFilterChange}
                  checked={filters.category.includes('All')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                All
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='category'
                  value='One Sitted'
                  onChange={handleFilterChange}
                  checked={filters.category.includes('One Sitted')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                One Sitted
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='category'
                  value='Two Sitted'
                  onChange={handleFilterChange}
                  checked={filters.category.includes('Two Sitted')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Two Sitted
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='category'
                  value='Three Sitted'
                  onChange={handleFilterChange}
                  checked={filters.category.includes('Three Sitted')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Three Sitted
              </label>

              <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  name='category'
                  value='Four Sitted'
                  onChange={handleFilterChange}
                  checked={filters.category.includes('Four Sitted')}
                  className="h-4 w-4 accent-amber-500 cursor-pointer"
                />
                Four Sitted
              </label>


            </div>


          </div>
        </div>
  )
}

export default FilterForm
