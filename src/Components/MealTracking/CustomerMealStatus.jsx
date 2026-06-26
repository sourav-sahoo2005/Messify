import React from 'react'
import { CircleUser, Dot, User, Calendar, Shield, ChevronRight, CookingPot, Utensils } from 'lucide-react';

const CustomerMealStatus = () => {
    return (
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5">

            {/* Top Meta Info Row */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Updated Just Now</span>
                </div>

                {/* Badges grouped cleanly */}
                <div className="flex gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                        Active
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                        <Shield className="w-3 h-3" />
                        Manager
                    </span>
                </div>
            </div>

            {/* User Profile Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-12 h-12 bg-linear-to-tr from-amber-700 to-orange-400 rounded-2xl flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                            <User className="w-6 h-6" />
                        </div>
                        <span className="absolute .bottom-0.5 -right-0.5 block h-3.5 w-3.5 rounded-full bg-emerald-700 ring-2 ring-white animate-pulse scale-60" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg tracking-tight">Sourav Sahoo</h3>
                        <p className="text-xs font-medium text-slate-400">ID: #MS-1024</p>
                    </div>
                </div>

                <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-slate-600">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Items Breakdown Container */}
            <div className="bg-slate-50/60 rounded-2xl p-4 space-y-3 border border-slate-50">

                {/* Item 1: Rice */}
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100/80 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                            <CookingPot className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-700">Rice Plate</p>
                            <p className="text-xs text-slate-400 font-medium">Qty: <span className="text-slate-600 font-semibold">12</span></p>
                        </div>
                    </div>
                    <span className="text-sm font-bold text-slate-800">₹60.00</span>
                </div>

                {/* Item 2: Curry */}
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100/80 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                            <Utensils className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-700">Special Curry</p>
                            <p className="text-xs text-slate-400 font-medium">Qty: <span className="text-slate-600 font-semibold">12</span></p>
                        </div>
                    </div>
                    <span className="text-sm font-bold text-slate-800">₹360.00</span>
                </div>
            </div>

            {/* Total Footer Section */}
            <div className="flex justify-between items-center mt-5 px-1">
                <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Summary</span>
                    <span className="text-xs text-slate-400 font-medium">Inclusive of all taxes</span>
                </div>
                <div className="text-right">
                    <span className="text-xl font-black text-slate-900 tracking-tight">₹420.00</span>
                </div>
            </div>

        </div>
    )
}

export default CustomerMealStatus
