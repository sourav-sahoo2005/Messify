import React from 'react'
import faqs from './FaqData'
import FAQItem from './FAQItem';


const Faq = () => {


  return (
    <div className='lg:p-10 pb-10 min-h-screen flex lg:flex-row flex-col justify-center items-center'>
      <div className='lg:w-1/2 w-full h-150 p-10 mt-20 border-r-20 border-b-20 border-l-40 border-l-amber-300 rounded-r-full flex flex-col justify-center overflow-hidden  bg-zinc-950'>
        <p className='text-center  px-10 py-3 w-fit mb-4 lg:text-sm text-xs rounded-full bg-zinc-800 '>Stuck somewhere? Start here.</p>
        <h1 className='lg:text-4xl text-3xl font-semibold text-amber-500'>Frequently Asked Question</h1>
        <p className='mt-4  '>
          The MessiFy FAQ section answers the most common questions so you can manage meals, costs, and updates without confusion. Simple answers, straight to the point.</p>

      </div>
      <div className='lg:w-1/2 w-full  lg:h-150 h-180 lg:px-10 p-5 mt-20 py-20 flex flex-col gap-5 overflow-x-auto overflow-y-scroll [scrollbar-width:none] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)] '>



        {
          faqs.map((faq, idx) => {
            return (
              <FAQItem key={idx} faq={faq} idx={idx} />
            )
          })
        }


      </div>
    </div>
  )
}

export default Faq
