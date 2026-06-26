import React from 'react'
import { SquarePen } from 'lucide-react'

const MenuCard = ({ day, meals, manager, setIsOpen, setSelectedDay }) => {


    const handleEdit = (day) => {
        setSelectedDay(day);
        setIsOpen(true);
    };


    return (
        <div
            key={day}
            className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 h-auto px-5 py-4 rounded-xl bg-slate-900/40 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 ease-in-out shadow-lg hover:shadow-indigo-950/20"
        >
            {/* Day Indicator */}
            <div className="flex items-center gap-3 sm:w-1/4">
                <div className="flex justify-center items-center px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 font-semibold text-xs tracking-wider uppercase border border-indigo-500/10">
                    {day.slice(0, 3)}
                </div>
                <span className="sm:hidden text-xs text-slate-500 font-medium">Meal Menu</span>
            </div>

            {/* Meal Details */}
            <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 gap-3 w-full text-sm">
                {/* Lunch Block */}
                <div className="flex items-center gap-2.5 bg-slate-950/40 sm:bg-transparent p-2.5 sm:p-0 rounded-lg border border-slate-800/60 sm:border-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500/90 sm:text-slate-400 w-16 sm:w-auto">
                        Lunch
                    </span>
                    <span className="text-slate-200 font-medium truncate">
                        {meals.lunch || <span className="text-slate-600 italic">Not set</span>}
                    </span>
                </div>

                {/* Dinner Block */}
                <div className="flex items-center gap-2.5 bg-slate-950/40 sm:bg-transparent p-2.5 sm:p-0 rounded-lg border border-slate-800/60 sm:border-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 sm:text-slate-400 w-16 sm:w-auto">
                        Dinner
                    </span>
                    <span className="text-slate-200 font-medium truncate">
                        {meals.dinner || <span className="text-slate-600 italic">Not set</span>}
                    </span>
                </div>
            </div>

            {/* Manager Actions */}
            {manager && (
                <div className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 sm:w-12 flex justify-end items-center">
                    <button
                        onClick={() => handleEdit(day)}
                        className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all duration-200"
                        title="Edit Schedule"
                    >
                        <SquarePen size={18} className="transition-transform group-hover:scale-105" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default MenuCard
