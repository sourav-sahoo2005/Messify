import React from 'react'

const PowerfulFeature = () => {
    return (
        <div>
            <section className="w-full py-20 bg-[#0f0f0f] text-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-4xl font-semibold text-center mb-14">
                        Powerful <span className="text-amber-500">Features</span>
                    </h2>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition">
                            <div className="text-4xl mb-3">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
                            <p className="text-gray-400">
                                Easily search mess by city, price, and availability.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition">
                            <div className="text-4xl mb-3">🛏</div>
                            <h3 className="text-xl font-semibold mb-2">Seat Availability</h3>
                            <p className="text-gray-400">
                                Check real-time vacancy before contacting the owner.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition">
                            <div className="text-4xl mb-3">📞</div>
                            <h3 className="text-xl font-semibold mb-2">Direct Contact</h3>
                            <p className="text-gray-400">
                                Call or message mess owners directly from the platform.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition">
                            <div className="text-4xl mb-3">🏠</div>
                            <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                            <p className="text-gray-400">
                                All mess listings are verified for trust and reliability.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="text-xl font-semibold mb-2">Affordable Options</h3>
                            <p className="text-gray-400">
                                Find mess options that fit your monthly budget.
                            </p>
                        </div>

                        <div className="bg-[#1a1a1a] p-8 rounded-xl hover:bg-[#222] transition">
                            <div className="text-4xl mb-3">📍</div>
                            <h3 className="text-xl font-semibold mb-2">Multiple Cities</h3>
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
