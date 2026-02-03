import React from 'react'
import faqs from './FaqData'


const Faq = () => {

  return (
    <div className='lg:p-10 pb-10 min-h-screen flex lg:flex-row flex-col justify-center items-center'>
      <div className='lg:w-1/2 w-full h-150 p-10 mt-20 border-r-20 border-b-20 border-l-40 border-l-amber-300 rounded-r-full flex flex-col justify-center overflow-hidden  bg-zinc-950'>
        <p className='text-center  px-10 py-3 w-fit mb-4 lg:text-sm text-xs rounded-full bg-zinc-800 '>Stuck somewhere? Start here.</p>
        <h1 className='text-5xl font-semibold text-amber-500'>Frequently Asked Question</h1>
        <p className='mt-4 '>
          The MessiFy FAQ section answers the most common questions so you can manage meals, costs, and updates without confusion. Simple answers, straight to the point.</p>

      </div>
      <div className='lg:w-1/2 w-full  lg:h-150 h-180 lg:p-10 p-5 mt-20 flex flex-col gap-5 overflow-x-auto overflow-y-scroll [scrollbar-width:none] '>



        {
          faqs.map((faq, idx) => {
            return (
              <div key={idx} className='group bg-zinc-900 border border-zinc-800 rounded-2xl hover:scale-[1.02] cursor-pointer transition-all duration-400 ease-in-out relative '>
                <h2 className=' p-6 pr-13 rounded-2xl bg-zinc-900 font-semibold'>{idx+1}. {faq.question}</h2>
                <p className='px-6 pb-4
                          text-zinc-300
                          max-h-0
                          overflow-hidden
                          opacity-0
                          group-hover:max-h-40 
                          group-hover:opacity-100 
                          transition-all 
                          duration-400 
                          ease-in-out '>
                  {faq.answer}</p>
                  <img src="../Icons/icons8-down-arrow-24.png" alt="" className='absolute top-7 right-7  invert group-hover:hidden ' />

              </div>

            )
          })
        }


      </div>
    </div>
  )
}

export default Faq
