import React from 'react'
import { useForm } from 'react-hook-form';
import { Save } from 'lucide-react';
import axios from 'axios'

const MenuUpdateForm = ({ setIsOpen, selectedDay, fetchmealStatus }) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({});

    const onSubmit = async (data) => {

        try {
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/owner/menu-edit`,
                {
                    data,
                    day: selectedDay
                },
                { withCredentials: true }
            );
            if (response.status === 200) {
                setIsOpen(false);
                fetchmealStatus();
            }
        } catch (err) {
            console.error("Error sending messages:", err);
            alert("Failed to update menu.");
        }
    };



    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                {/* Header with Warning Color */}
                <div className="bg-amber-50 p-6 border-b border-amber-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-amber-900">Update Menu</h2>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-amber-400 hover:text-amber-600 font-bold text-xl">✕</button>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">

                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Day : {selectedDay}</label>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mt-5 mb-1">Lunch Menu</label>
                        <textarea
                            {...register("lunch")}
                            rows="3"
                            placeholder="Lunch Menu..."
                            className={`w-full px-4 py-2 text-black bg-gray-50 border rounded-lg focus:ring-2 transition-all outline-none ${errors.lunch ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:ring-amber-200'
                                }`}
                        />
                        {errors.lunch && <span className="text-red-500 text-xs">{errors.lunch.message}</span>}


                        <label className="block text-xs font-bold uppercase text-gray-500 mt-5 mb-1">Dinner Menu</label>
                        <textarea
                            {...register("dinner")}
                            rows="3"
                            placeholder="Dinner Menu..."
                            className={`w-full px-4 py-2 text-black bg-gray-50 border rounded-lg focus:ring-2 transition-all outline-none ${errors.dinner ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:ring-amber-200'
                                }`}
                        />
                        {errors.dinner && <span className="text-red-500 text-xs">{errors.dinner.message}</span>}
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 font-semibold px-4 hover:underline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white  py-3 px-8 rounded-xl shadow-md disabled:opacity-50 transition-transform active:scale-95"
                        >
                            {isSubmitting ? (
                                <>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Save size={20} />
                                    <span>Save Changes</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MenuUpdateForm
