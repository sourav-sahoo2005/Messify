import { React, useEffect, useRef } from 'react'
// import MessData from './FindMessData';
import MessCard from './MessCard';
import { useState } from 'react';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';
import ContactPopup from './ContactPopup';
import axios from 'axios';
import Loding from '../Loding/Loding';
import InternalServerError from '../ErrorPage/InternalServerError';



const FindMess = () => {

  const [loding, setLoding] = useState(false);
  const [isError, setError] = useState(false);

  // const newData = [];
  const [newData, setnewData] = useState([])
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [],
    amenities: [],
    category: []
  });

  //useRef
  const searchForm = useRef(null);
  const filterForm = useRef(null);
  const filterImg = useRef(null);
  const searchImg = useRef(null);


  // for mobile responsiveness
  function openSearch() {

    if (searchImg.current.src.includes("icons8-search-24.png")) {
      searchImg.current.src = "../Icons/icons8-close-24.png";
    } else {
      searchImg.current.src = "../Icons/icons8-search-24.png";
    }

    searchForm.current.classList.toggle("hidden");
    searchForm.current.classList.toggle("flex-wrap", "bg-zinc-900");
    searchForm.current.classList.add("absolute", "top-0", "left-0", "right-0", "mx-auto", "z-80", "h-auto", "flex", "flex-col", "justify-center", "items-center", "gap-10", "bg-amber-700");

    searchForm.current.querySelector("div").classList.add("w-full", "flex", "justify-between", "items-center", "flex-wrap", "gap-5");

    searchForm.current.querySelectorAll("label").forEach(element => {
      element.classList.add("w-full", "flex", "justify-start", "items-center", "gap-3", "h-15", "rounded-full", "p-3", "bg-zinc-700", "text-white");
    });
  }

  function openFilter() {

    if (filterImg.current.src.includes("icons8-filter-24.png")) {
      filterImg.current.src = "../Icons/icons8-close-24.png";
    } else {
      filterImg.current.src = "../Icons/icons8-filter-24.png";
    }


    filterForm.current.classList.toggle("hidden");
    filterForm.current.classList.toggle("flex-wrap");
    filterForm.current.classList.add("absolute", "top-0", "left-0", "right-0", "mx-auto", "z-80", "h-[40vh]", "w-full", "flex", "flex-col", "justify-center", "items-center");
  }


  // console.log(newData)

  useEffect(() => {
    console.log(newData)

  }, [newData])


  //fetch data from backend
  async function fetchMessData() {
    try {
      setLoding(true)
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/getmess`);
      // console.log(response.data.mess);
      setnewData(response.data.mess);
      setFilterData(response.data.mess);
      setLoding(false)

    } catch (error) {
      setError(true);
      console.error("Error fetching mess data:", error)
    }
  }

  useEffect(() => {
    fetchMessData();
  }, []);


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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const searchText = formData.get("messname")?.toLowerCase().trim() || "";
    const city = formData.get("City");
    const type = formData.get("Type");

    setLoding(true);
    const filtered = newData.filter((d) => {

      if (searchText) {

        const isInName = d.messName?.toLowerCase().includes(searchText);
        const isInCity = d.city?.toLowerCase().includes(searchText);
        const isInLandmark = d.address.landmark?.toLowerCase().includes(searchText);
        const isInPlace = d.address.area?.toLowerCase().includes(searchText);

        // If the text isn't found in ANY of these, skip this item
        if (!(isInName || isInCity || isInLandmark || isInPlace)) {
          return false;
        }
      }

      // Filter by city
      if (city && d.city !== city) {
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

    setFilterData(filtered);
    setLoding(false);
  };


  if (isError) {
    return <InternalServerError />
  }

  return (
    <div className="min-h-screen w-full lg:pt-23 pt-0 lg:p-10 md:p-5 mb-5">

      <button onClick={openSearch} className=' lg:hidden md:hidden h-10 w-10 flex justify-center items-center bg-amber-700 rounded-full fixed z-100 right-22 top-8 cursor-pointer'>
        <img
          ref={searchImg}
          className='invert '
          src="../Icons/icons8-search-24.png"
          alt=""
        />
      </button>

      <button onClick={openFilter} className=' lg:hidden  h-10 w-10 flex justify-center items-center bg-blue-700 rounded-full fixed z-100 right-8 top-8 md:top-60 cursor-pointer'>
        <img
          ref={filterImg}
          className='invert '
          src="../Icons/icons8-filter-24.png"
          alt=""
        />
      </button>


      {/* Search Form */}
      <SearchForm searchForm={searchForm} handleSubmit={handleSubmit} />

      {/* Main Layout */}
      <div className="flex lg:mt-3 md:mt-3 ">

        {/* Filter Sidebar */}
        <FilterForm filterForm={filterForm} handleFilterChange={handleFilterChange} filters={filters} />

        {/* Mess Card Section */}
        <div className="lg:ml-3 flex-1 sticky top-24">

          <div className="h-screen py-6 rounded lg:p-5 md:p-5 bg-zinc-900 ">

            <h1 className="text-xl px-7 py-2 font-semibold">
              <span className="text-amber-400">({newData.length})</span> Mess Found
            </h1>

            {/* Cards */}
            <div className="flex  
            flex-wrap 
            justify-center 
            items-center 
            lg:gap-5 gap-3 
            overflow-y-auto  
            h-[calc(100vh-8rem)]   
            py-15 
            scrollbar-hidden 
            scrollbar-thin 
            [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)]">
              {loding && <Loding />}

              {filterData.length === 0 && !loding && (
                <div className='h-full w-full flex justify-center items-center'>Not Registered Mess Found in This Location </div>
              )}

              {filterData.map((data, idx) => (
                <MessCard key={data.messName || idx} data={data} id={idx} />
              ))}

            </div>
          </div>
        </div>
      </div>
      <ContactPopup />
    </div>

  )
}

export default FindMess
