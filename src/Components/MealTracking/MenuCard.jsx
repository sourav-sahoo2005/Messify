import React from 'react'
import { SquarePen } from 'lucide-react'

const MenuCard = ({ day, meals, manager, setIsOpen, setSelectedDay }) => {


    const handleEdit = (day) => {
        setSelectedDay(day);
        setIsOpen(true);
    };


    return (
        <div key={day} className="flex h-auto lg:min-h-20 px-3 py-4  rounded-lg hover:bg-indigo-950 hover:scale-98 shadow-xl border border-gray-500 transition-all ease-in-out duration-200">
            <h3 className='px-2 uppercase h-full w-1/5 rounded-lg text-sm  flex justify-center items-center'>{day}</h3>
            <div className='flex-1 px-2 w-3/5  justify-center items-start flex flex-col gap-2 text-sm text-gray-300'>
                <p><strong>Lunch:</strong> {meals.lunch}</p>
                <p><strong>Dinner:</strong> {meals.dinner}</p>
            </div>
            {manager && (
                <div className='w-1/5 flex justify-center items-center '>
                    <SquarePen size={20} onClick={() => handleEdit(day)} />
                </div>
            )}

        </div>
    )
}

export default MenuCard
