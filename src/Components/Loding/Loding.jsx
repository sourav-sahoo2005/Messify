import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




const Loding = () => {


  // const textRef = useRef(null);

  // useGSAP(
  //   () => {
  //     const letters = textRef.current.querySelectorAll("span");

  //     gsap.fromTo(
  //       letters,
  //       {
  //         y: 40,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.6,
  //         stagger: 0.08,
  //         ease: "back.out(1.7)",
  //         repeat: -1,
  //         repeatDelay: 0.8,
  //       }
  //     );
  //   },
  //   { scope: textRef }
  // );
  // const text = "Loading...";



  return (

    
    <div className='h-screen w-full  bg-black/20 backdrop-blur-sm flex flex-col justify-center items-center absolute z-1000'>

    
      <div className="h-12 w-12 animate-spin rounded-full border-8 border-gray-200 border-t-blue-600 border-b-amber-500"></div> 

    </div>
  )
}

export default Loding
