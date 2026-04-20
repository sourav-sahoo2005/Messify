import React from 'react';
import { MapPin, User, Phone, Mail, Home, Users, CheckCircle,Building2,IndianRupee } from 'lucide-react';

const MessProfile = ({ data }) => {
    if (!data) return <div className="p-8 text-center">Loading profile...</div>;

    return (
        <div className="max-w-full mx-auto p-2 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className=" text-2xl font-bold text-gray-900">{data.messName}</h1>
                        <p className="text-gray-500 text-sm flex items-center mt-2">
                            <MapPin size={18} className="mr-1 text-blue-600" />
                            {data.city}, {data.address.area}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase flex items-center justify-center">
                            {data.type}
                        </span>
                        {data.auth.isVerified === 'true' && (
                            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center justify-center">
                                <CheckCircle size={14} className="mr-1" /> Verified
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column: Owner & Contact */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <User size={20} className="mr-2 text-blue-600" /> Owner Details
                        </h2>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold">Name</p>
                                <p className="text-gray-700 font-medium">{data.owner.name}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold text-wrap">Email</p>
                                <p className="text-gray-700 break-all">{data.owner.email}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold">Phone</p>
                                <p className="text-gray-700">{data.owner.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-600 rounded-2xl shadow-lg p-6 text-white">
                        <h2 className="text-lg font-bold mb-4 flex items-center"><IndianRupee size={20} className="mr-2" />Pricing</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Monthly Rent:</span>
                                <span className="font-bold">₹{data.price}</span>
                            </div>
                            <div className="flex justify-between border-t border-blue-400 pt-2">
                                <span>Security Deposit:</span>
                                <span className="font-bold">₹{data.security}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Mess Stats & Description */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><Building2 size={20} className="mr-2 text-indigo-600" />Mess Information</h2>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <p className="text-gray-500 text-sm flex items-center">
                                    <Users size={16} className="mr-2" /> Total Capacity
                                </p>
                                <p className="text-2xl font-bold text-gray-900">{data.capacity}</p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-xl">
                                <p className="text-orange-600 text-sm flex items-center">
                                    <Home size={16} className="mr-2" /> Current Vacancy
                                </p>
                                <p className="text-2xl font-bold text-orange-700">{data.vacancy}</p>
                            </div>
                        </div>

                        <div className="mb-6 text-sm">
                            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Description</h3>
                            <p className="text-gray-700 leading-relaxed italic">
                                "{data.description}"
                            </p>
                        </div>

                        <div className='text-sm'>
                            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Location</h3>
                            <p className="text-gray-700">{data.address.landmark}</p>
                            <p className="text-gray-700">{data.address.area}, PIN: {data.address.pin}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessProfile;