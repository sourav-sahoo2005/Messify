import React from 'react'
import { Search, BedSingle, Phone, House, BadgeIndianRupee, MapPin } from 'lucide-react'

const PowerfulFeature = () => {
    return (

        <div>
            <section className="w-full py-20 bg-[#0f0f0f] text-white bg-linear-to-t from-[#979797] to-[#0f0f0f] lg:from-[#1a1a1a] lg:to-[#0f0f0f]">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="lg:text-4xl text-3xl  font-semibold text-center mb-14">
                        Powerful <span className="text-amber-500">Features</span>
                    </h2>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-8 md:gap-6 gap-4">

                        <div className="bg-[#1a1a1a] p-8  rounded-xl hover:bg-[#222] transition-all ease-in-out  border border-gray-500 hover:border-amber-500 hover:scale-102 hover:shadow-2xl hover:shadow-amber-500/50">
                            <div className="text-4xl mb-3 h-12 w-12  rounded-xl flex justify-center items-center bg-zinc-700 text-amber-400  "><Search strokeWidth={3} /></div>
                            <h3 className="text-lg font-semibold mb-1">Smart Search</h3>
                            <p className="text-gray-400">
                                Easily search mess by city, price, and availability.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition-all ease-in-out border border-gray-500 hover:border-green-500 hover:scale-102 hover:shadow-2xl hover:shadow-green-500/50 ">
                            <div className="text-4xl mb-3 h-12 w-12  rounded-xl flex justify-center items-center bg-zinc-700 text-green-500 "><BedSingle strokeWidth={3} /></div>
                            <h3 className="'text-lg font-semibold mb-1">Seat Availability</h3>
                            <p className="text-gray-400">
                                Check real-time vacancy before contacting the owner.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition-all ease-in-out border border-gray-500 hover:border-red-500 hover:scale-102 hover:shadow-2xl hover:shadow-red-500/50">
                            <div className="text-4xl mb-3 h-12 w-12  rounded-xl flex justify-center items-center bg-zinc-700 text-red-400 "><Phone strokeWidth={3} /></div>
                            <h3 className="'text-lg font-semibold mb-1">Direct Contact</h3>
                            <p className="text-gray-400">
                                Call or message mess owners directly from the platform.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition-all ease-in-out border border-gray-500 hover:border-cyan-500 hover:scale-102 hover:shadow-2xl hover:shadow-cyan-500/50">
                            <div className="text-4xl mb-3 h-12 w-12  rounded-xl flex justify-center items-center bg-zinc-700 text-cyan-400 "><House strokeWidth={3} /></div>
                            <h3 className="'text-lg font-semibold mb-1">Verified Listings</h3>
                            <p className="text-gray-400">
                                All mess listings are verified for trust and reliability.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition-all ease-in-out border border-gray-500 hover:border-green-500 hover:scale-102 hover:shadow-2xl hover:shadow-green-500/50">
                            <div className="text-4xl mb-3 h-12 w-12  rounded-xl flex justify-center items-center bg-zinc-700 text-green-500"><BadgeIndianRupee strokeWidth={3} /></div>
                            <h3 className="'text-lg font-semibold mb-1">Affordable Options</h3>
                            <p className="text-gray-400">
                                Find mess options that fit your monthly budget.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition-all ease-in-out border border-gray-500 hover:border-blue-500 hover:scale-102 hover:shadow-2xl hover:shadow-blue-500/50">
                            <div className="text-4xl mb-3 h-12 w-12  rounded-xl flex justify-center items-center bg-zinc-700 text-blue-400"><MapPin strokeWidth={3} /></div>
                            <h3 className="'text-lg font-semibold mb-1">Multiple Cities</h3>
                            <p className="text-gray-400">
                                Available in cities like Bhubaneswar, Cuttack, Puri and more.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default PowerfulFeature
