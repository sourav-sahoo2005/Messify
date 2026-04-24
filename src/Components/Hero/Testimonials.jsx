import React from "react";
import { useState, useEffect } from "react";

import axios from 'axios';

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReview] = useState([
    {
      name: "Rahul Sharma",
      place: "Bhubaneswar",
      description: "MessiFy helped me find a good mess within minutes. Very easy to use!",
    },
    {
      name: "Amit Das",
      place: "Cuttack",
      description: "I found an affordable mess near my college. Highly recommended.",
    },
    {
      name: "Sanjay Kumar",
      place: "Puri",
      description: "The mess details and vacancy information are very helpful.",
    },
  ]);


  useEffect(() => {

    const currentReview = reviews[currentIndex];
    const wordCount = currentReview?.description.split(' ').length || 0;
    const delay = wordCount * 500 || 3000;


    const interval = setInterval(() => {

      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1

      );

    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex, reviews]);




  const fetchData = async function () {
    try {

      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/reviews`, { withCredentials: true });

      setReview(response.data.feedbacks.reverse());

    } catch (err) {
      console.log("error:", err);
    }

  }



  useEffect(() => {
    fetchData()
  }, []);



  return (
    <section className="w-full h-auto py-20 bg-[#141414] text-white ">

      {/* Heading */}
      <h2 className="lg:text-4xl text-3xl px-10 font-semibold text-center mb-14">
        What Our Customer <span className="text-amber-500">Say</span>
      </h2>
      <div className="relative w-full max-w-xl mx-auto lg:px-8 md:px-8 px-6 overflow-hidden  [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_75%,transparent)]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full shrink-0 px-4" // w-full ensures only one shows
            >
              <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-white/10 shadow-xl">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
                  "{review.description}"
                </p>

                <div>
                  <h3 className="text-lg font-bold text-white">{review.name}</h3>
                  <p className="text-amber-400 text-sm">{review.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${currentIndex === i ? "bg-amber-500 w-6" : "bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>



    </section>
  );
};

export default Testimonials;