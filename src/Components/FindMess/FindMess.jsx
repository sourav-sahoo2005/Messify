import { React, useEffect } from 'react'
import MessData from './FindMessData';
import MessCard from './MessCard';
import { data, Link } from 'react-router'
import { useState } from 'react';


const FindMess = () => {



  // const newData = [];
  const [newData, setnewData] = useState(MessData)
  const [filters, setFilters] = useState({
    priceRange: [],
    amenities: [],
    category: []
  });
  
  // console.log(newData)

  useEffect(() => {
    console.log(newData)

  }, [newData])


  // filters state is updated via this helper whenever a checkbox changes
  const handleFilterChange = e => {
    const { name, value, checked } = e.target;
    setFilters(prev => {
      const list = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...list, value] };
      } else {
        return { ...prev, [name]: list.filter(v => v !== value) };
      }
    });
  };



// console.log(filters.priceRange, filters.amenities, filters.category);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const messname = formData.get('messname');
  //   const city = formData.get('City');
  //   const type = formData.get('Type');

  //   console.log(messname, city, type, filters.priceRange);
  //   // console.log(MessData);




  //   setnewData([]);

  //   const filtered = MessData.filter(d =>
  //     d.messName.toLowerCase() === messname.toLowerCase() ||
  //     d.location.city === city &&
  //     (type === 'All' || d.type.toLowerCase() === type.toLowerCase()) ||(
  //     filters.priceRange.includes(d.price) &&
  //     d.amenities.some(a => filters.amenities.includes(a)) &&
  //     filters.category.includes(d.category))
  //   );

  //   console.log("filtered"+filters.priceRange)
  //   filters.priceRange.forEach(range => {
  //     const [min, max] = range.split('-').map(Number) || range === '2500+' ? [2500, Infinity] : [0, 0];
  //     filtered.push(...MessData.filter(d => d.price >= min && d.price <= max));
  //     console.log(min ,max)
  //   });


  //   setnewData(filtered);
  //   // console.log(filtered);


  // }

  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const messname = formData.get("messname")?.toLowerCase() || "";
  const city = formData.get("City");
  const type = formData.get("Type");

  const filtered = MessData.filter((d) => {

    // Search by mess name
    if (messname && !d.messName.toLowerCase().includes(messname)) {
      return false;
    }

    // Filter by city
    if (city && d.location.city !== city) {
      return false;
    }

    // Filter by type
    if (type !== "All" && d.type.toLowerCase() !== type.toLowerCase()) {
      return false;
    }

    // Price Range Filter
    if (filters.priceRange.length > 0) {
      const match = filters.priceRange.some((range) => {
        if (range === "2500+") return d.price > 2500;

        const [min, max] = range.split("-").map(Number);
        return d.price >= min && d.price <= max;
      });

      if (!match) return false;
    }

    // Amenities Filter
    if (
      filters.amenities.length > 0 &&
      !filters.amenities.includes("All")
    ) {
      const match = filters.amenities.every((a) =>
        d.amenities.includes(a)
      );

      if (!match) return false;
    }

    // Category Filter
    if (
      filters.category.length > 0 &&
      !filters.category.includes("All")
    ) {
      if (!filters.category.includes(d.category)) {
        return false;
      }
    }

    return true;
  });

  setnewData(filtered);
};

















  return (
    <div className="min-h-screen w-full lg:pt-30 pt-25 lg:p-10 p-5 mb-5">

      {/* Search Form */}
      <form
        className="bg-zinc-900 w-full rounded p-5 flex justify-between items-center gap-5 flex-wrap sticky top-4 z-50"
        method="POST"
        action="/search"
        onSubmit={handleSubmit}
      >

        <div className="w-5/6 flex justify-between items-center flex-wrap">

          {/* Search Name */}
          <label className="h-auto lg:w-1/3 lg:border-r-2 flex items-center">
            <img className="invert" src="../Icons/icons8-search-24.png" alt="" />
            <input
              className="h-10 lg:w-full p-3 outline-none"
              type="text"
              name="messname"
              placeholder="Search by Mess Name"
            />
          </label>

          {/* City */}
          <label className="h-10 lg:w-1/3 lg:border-r-2 flex items-center justify-center">
            <img className="invert" src="../Icons/icons8-location-24.png" alt="" />
            <span className="text-amber-400 font-semibold ml-2">City :</span>

            <select name="City" className="ml-4 bg-transparent outline-none">
              <option value="" className="text-black" >Select</option>
              <option className="text-black">Balasore</option>
              <option className="text-black">Baripada</option>
              <option className="text-black">Bhadrak</option>
              <option className="text-black">Bhubaneswar</option>
              <option className="text-black">Cuttack</option>
              <option className="text-black">Puri</option>
            </select>
          </label>

          {/* Type */}
          <label className="h-10 lg:w-1/3 flex items-center justify-center">
            <img className="invert" src="../Icons/icons8-category-24.png" alt="" />
            <span className="text-amber-400 font-semibold ml-2">Type :</span>

            <select name="Type" className="ml-4 bg-transparent outline-none">
              <option className="text-black">All</option>
              <option className="text-black">Boys</option>
              <option className="text-black">Girls</option>
              <option className="text-black">Family</option>
              <option className="text-black">Working Professionals</option>
            </select>
          </label>

        </div>

        {/* Search Button */}
        <input
          type="submit"
          value="Search"
          className="h-10 bg-amber-600 hover:bg-amber-700 px-6 rounded"
        />

      </form>

      {/* Main Layout */}
      <div className="flex mt-3 ">

        {/* Filter Sidebar */}
        <div className="hidden lg:block w-[21vw] bg-zinc-900 p-5 rounded min-h-[82vh]">
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

        {/* Mess Card Section */}
        <div className="lg:ml-3 flex-1 sticky top-24">

          <div className="rounded p-5 bg-zinc-900 ">

            <h1 className="text-xl px-7 py-2 font-semibold">
              <span className="text-amber-400">({newData.length})</span> Results Found
            </h1>

            {/* Cards */}
            <div className="flex  flex-wrap justify-center items-center lg:gap-5 gap-3 overflow-y-auto  h-[calc(100vh-8rem)] px-3  py-15 scrollbar-hidden scrollbar-thin [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] 
  [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)]">

              {newData.map((data, idx) => (
                <MessCard key={data.messName || idx} data={data} />
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default FindMess
