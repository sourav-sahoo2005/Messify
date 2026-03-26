import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loding from "../Loding/Loding";


const MessDetails = () => {

  const { id } = useParams();     // get id from URL
  const [mess, setMess] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {

    const fetchMess = async () => {
      try {

        const res = await fetch(`http://localhost:5000/api/mess/${id}`);
        const data = await res.json();

        setMess(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchMess();

  }, [id]);


  // GSAP animation
  useEffect(() => {

    if (!mess) return;

    gsap.registerPlugin(ScrollTrigger);

    const elements = sectionRef.current.querySelectorAll(".animate-item");

    gsap.from(elements, {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

  }, [mess]);


  if (!mess) {
    return (
      <div className="h-screen flex justify-center items-center bg-black">
        {/* <h1 className="text-white text-3xl">Loading...</h1> */}
        <Loding/>
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-black text-white px-6 py-12 flex justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10">

        {/* Image Section */}
        <div className="animate-item">
          <img
            // Logical OR for static fallback image
            src={data.image || "https://via.placeholder.com/400x400?text=No+Image+Available"}
            alt={data.messName || "Mess Image"}
            className="w-full h-100 object-cover rounded-xl shadow-lg border border-zinc-800"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-5">
          <h1 className="animate-item text-4xl font-semibold text-amber-400">
            {/* Dynamic Name or Static Fallback */}
            {data.messName || "Unnamed Mess"}
          </h1>

          <p className="animate-item text-gray-300 leading-relaxed">
            {data.description || "No description provided for this location."}
          </p>

          <div className="animate-item grid grid-cols-2 gap-4">
            
            <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
              <span className="text-gray-500 block text-xs uppercase mb-1">City</span>
              {data.city || "Not Specified"}
            </div>

            <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
              <span className="text-gray-500 block text-xs uppercase mb-1">Type</span>
              {data.type || "General"}
            </div>

            <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
              <span className="text-gray-500 block text-xs uppercase mb-1">Capacity</span>
              {data.capacity || "0"} Seats
            </div>

            <div className="bg-zinc-900 p-4 rounded border border-zinc-800">
              <span className="text-gray-500 block text-xs uppercase mb-1">Vacancy</span>
              <span className={data.vacancy > 0 ? "text-green-400" : "text-red-400"}>
                {data.vacancy || "0"} Available
              </span>
            </div>

            <div className="bg-zinc-900 p-4 rounded border border-zinc-800 col-span-2">
              <span className="text-gray-500 block text-xs uppercase mb-1">Monthly Rent</span>
              <span className="text-xl font-bold text-amber-400">
                ₹{data.price || "Price on Request"}
              </span>
            </div>

          </div>

          {/* Owner Details Card */}
          <div className="animate-item bg-zinc-800/50 p-5 rounded-xl border border-zinc-700">
            <h2 className="text-xl text-amber-300 mb-3 font-medium underline decoration-zinc-700 underline-offset-8">
              Contact Information
            </h2>
            <div className="space-y-2 text-gray-200">
              <p><strong>Owner:</strong> {owner.name || "Owner Name Private"}</p>
              <p><strong>Phone:</strong> {owner.phone || "Contact via Email"}</p>
              <p><strong>Email:</strong> {owner.email || "No Email Provided"}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MessDetails;