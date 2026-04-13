


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const AboutDetails = () => {

    const sectionRef = useRef(null);
    useGSAP(function(){
        const elements = sectionRef.current.querySelectorAll(".animate-item");
      gsap.from(elements, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            delay:0.8
        });

    })



    return (
         <section
      ref={sectionRef}
      className="w-full h-auto text-white px-8 py-20 flex flex-col items-center gap-10 backdrop-blur-2xl bg-transparent"
    >

      {/* Heading */}
      <h1 className="animate-item lg:text-4xl text-3xl font-semibold text-center max-w-4xl leading-tight">
        Moving to a new city should be an adventure, not a struggle.
      </h1>

      {/* Description */}
      <p className="animate-item text-gray-300   max-w-3xl text-center">
        Moving to a new city is the start of a great adventure, but the struggle
        to find a decent room can quickly turn that dream into a headache.
        Messify is a tech-driven platform dedicated to helping you find the
        perfect lodging and mess services that fit your budget, your taste,
        and your lifestyle.
      </p>

      {/* Why Choose Us */}
      <div className="animate-item max-w-4xl text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-10">
          Why <span className="text-amber-500">Choose</span> Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-tl-4xl border-t-4 border-amber-400 hover:scale-105 transition ">
            <h3 className="text-lg font-semibold mb-2">Virtual Tours</h3>
            <p className="text-gray-400">
              See your room before you visit. High-resolution photos and videos
              give you the real picture.
            </p>
          </div>

          <div className="bg-zinc-900 p-6  hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2">Zero Brokerage</h3>
            <p className="text-gray-400">
              Connect directly with owners and managers and avoid unnecessary
              brokerage fees.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-br-4xl border-b-4 border-amber-400 hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2">Smart Filters</h3>
            <p className="text-gray-400">
              Filter by roommate preferences, profession, or proximity to your
              college or office.
            </p>
          </div>

        </div>
      </div>

      {/* Core Message */}
      <div className="animate-item max-w-3xl text-center mt-10">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-4">
          The Messify <span className="text-amber-500">Solution</span>
        </h2>

        <p className="text-gray-300 ">
          Finding a place to stay in a new city is often a nightmare of hidden
          costs, unresponsive landlords, and misleading photos. At Messify, we
          redesign the search experience. Every listing is verified so you can
          focus on your studies or career while we handle the hunt for your
          perfect room.
        </p>
      </div>

    </section>
    )
}

export default AboutDetails
