import React from 'react'





const SearchForm = (props) => {
    const { searchForm,handleSubmit } = props
  return (
      
      <form
        ref={searchForm}
        className=" hidden  bg-zinc-900 w-full rounded p-5 lg:flex md:flex justify-between items-center gap-5 flex-wrap sticky top-4 z-50"
        method="POST"
        action="/search"
        onSubmit={handleSubmit}
      >

        <div className="w-5/6 flex justify-between items-center flex-wrap">

          {/* Search Name */}
          <label className="lg:h-auto lg:w-1/3 lg:border-r-2 flex items-center wrap-break-words">
            <img className="invert" src="../Icons/icons8-search-24.png" alt="" />
            <input
              className="h-10 lg:w-full p-3 outline-none"
              type="text"
              name="messname"
              placeholder="Name, city, address,landmark"
            />
          </label>

          {/* City */}
          <label className="lg:h-10 lg:w-1/3 lg:border-r-2 flex items-center justify-center">
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
          <label className="lg:h-10 lg:w-1/3 flex items-center justify-center">
            <img className="invert" src="../Icons/icons8-category-24.png" alt="" />
            <span className="text-amber-400 font-semibold ml-2">Type :</span>

            <select name="Type" className="ml-4 bg-transparent outline-none">
              <option className="text-black">All</option>
              <option className="text-black">Boys</option>
              <option className="text-black">Girls</option>
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
  )
}

export default SearchForm
