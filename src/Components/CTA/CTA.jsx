import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-amber-500 to-yellow-600 text-black">
      
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Find Your Perfect Mess Today
        </h2>

        <p className="mb-10 text-lg">
          Search mess by city, check vacancy and contact the owner easily with MessiFy.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          
          <Link
            to="/search"
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Find a Mess
          </Link>

          <Link
            to="/owner/register"
            className="px-8 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition"
          >
            Register Your Mess
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;