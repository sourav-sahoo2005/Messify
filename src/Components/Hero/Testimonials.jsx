import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Bhubaneswar",
      message: "MessiFy helped me find a good mess within minutes. Very easy to use!",
    },
    {
      name: "Amit Das",
      city: "Cuttack",
      message: "I found an affordable mess near my college. Highly recommended.",
    },
    {
      name: "Sanjay Kumar",
      city: "Puri",
      message: "The mess details and vacancy information are very helpful.",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#0f0f0f] text-white ">
      <div className="max-w-6xl mx-auto px-6 ">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-14">
          What Our Customer <span className="text-amber-500">Say</span>
        </h2>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222]  transition"
            >
              <p className="text-gray-300 mb-6">"{review.message}"</p>

              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-400 text-sm">{review.city}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
     
    </section>
  );
};

export default Testimonials;