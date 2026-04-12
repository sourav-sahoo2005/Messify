import React from "react";

const Cities = () => {
  const cities = [
    "Bhubaneswar",
    "Cuttack",
    "Puri",
    "Balasore",
    "Bhadrak",
    "Baripada"
  ];

  return (
    <section className="w-full py-20 bg-black text-white overflow-hidden">

      <h2 className="lg:text-4xl text-3xl  font-semibold text-center mb-12">
        Cities We <span className="text-amber-500">Serve</span>
      </h2>

      <div className="overflow-hidden w-full bg-amber-600 ">
        <div className="flex lg:gap-8 gap-4 w-max animate-marquee">

          {[...cities, ...cities].map((city, index) => (
            <div
              key={index}
              className="min-w-50 lg:text-3xl text-2xl h-20   flex items-center justify-center  hover:text-zinc-900 font-semibold transition"
            >
              {city}
            </div>
          ))}

        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </section>
  );
};

export default Cities;