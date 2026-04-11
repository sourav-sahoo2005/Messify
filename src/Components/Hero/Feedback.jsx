import React, { useState } from 'react'
import FeedbackForm from './FeedbackFrom'

const Feedback = () => {

    const [showForm,setShowForm] = useState(false);


    return (
        <div className='lg:p-20 md:p-10 px-10 py-15 h-auto w-full bg-black flex flex-col items-center justify-center bg-[url(../Images/feedback-bg.jpg)] bg-center bg-cover transition-all'>

            <h1 className='text-4xl font-semibold pt-10 '>Share Your valueable <span className='text-amber-500'>Feedback</span></h1>
            <p className=' lg:text-center text-lg text-gray-300 pt-4 '>We'd love to hear your thoughts and suggestions. <br /> Feel free to let us know how we can improve.</p>

            <button className='mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-5 rounded-4xl ' onClick={() => setShowForm(true)}>Submit Feedback</button>

            {showForm && <FeedbackForm onClose = {() => setShowForm(false)} />}
        </div>
    )
}

export default Feedback
