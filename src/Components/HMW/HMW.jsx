import React from 'react'

const HMW = () => {
    return (
        <section className="w-full py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">

                
                <h2 className="text-4xl font-semibold text-center mb-12">
                    How <span className="text-amber-500">MessiFy</span> Works
                </h2>

              
                <div className=" flex lg:flex-row flex-col lg:gap-10 gap-5">

                   
                    <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition">
                        <div className="text-5xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold mb-2">Search Mess</h3>
                        <p className="text-gray-400">
                            Find mess by city like Bhubaneswar, Cuttack, Puri and more.
                        </p>
                    </div>

                 
                    <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition">
                        <div className="text-5xl mb-4">📋</div>
                        <h3 className="text-xl font-semibold mb-2">View Details</h3>
                        <p className="text-gray-400">
                            Check mess price, facilities, vacancy and food details.
                        </p>
                    </div>

                  
                    <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition">
                        <div className="text-5xl mb-4">📞</div>
                        <h3 className="text-xl font-semibold mb-2">Contact Owner</h3>
                        <p className="text-gray-400">
                            Call or message the mess owner and book your seat easily.
                        </p>
                    </div>

                </div>

            </div>

           
        </section>

        
    )
}

export default HMW
