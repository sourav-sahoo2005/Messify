import React, { useState } from 'react'

const FAQItem = ({ faq, idx }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={idx}
            onClick={() => setIsOpen(!isOpen)}
            className='group bg-zinc-900 border border-zinc-800 rounded-2xl hover:scale-[1.02] cursor-pointer transition-all duration-400 ease-in-out relative '>
            <h2 className=' p-6 pr-13 rounded-2xl bg-zinc-900 font-semibold'>{idx + 1}. {faq.question}</h2>
            <p className={`px-6 pb-4
                          text-sm
                          text-zinc-300
                          max-h-0
                          overflow-hidden
                          opacity-0
                          ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                          group-hover:max-h-40 
                          group-hover:opacity-100 
                          transition-all 
                          duration-400 
                          ease-in-out `}>
                {faq.answer}</p>
            <img src="../Icons/icons8-down-arrow-24.png" alt="" className='absolute top-7 right-7  invert group-hover:hidden ' />

        </div>
    )
}

export default FAQItem
