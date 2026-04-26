import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Fingerprint, ArrowRight } from 'lucide-react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useCookies } from 'react-cookie';
import Msgpopup from '../Login/Msgpopup';

const MealForm = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['mealId']);

    const [serverMessage, setServerMessage] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {

        // Example API Call
        try {

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/meal-status`, data);
            const result = await response.data;
            if (response.status === 200 && response.data.message === "Authentication successful") {
                navigate(`/meal-status/${data.mealId}`);
                setCookie('mealId', data.mealId, { path: '/' });
                setServerMessage(response.data.message);
            }
            setServerMessage(response.data.message);
        } catch (err) {
            console.error("Error fetching meal status:", err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            {serverMessage && <Msgpopup message={serverMessage} />}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Meal Access</h1>
                    <p className="text-gray-500 text-sm">Enter details to manage today's meal</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 ml-1">
                            <Mail size={16} className="text-indigo-500" /> Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="customer@domain.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                            })}
                            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none transition-all focus:bg-white focus:ring-2 text-black ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-indigo-100 focus:border-indigo-500'
                                }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs px-1">{errors.email.message}</p>}
                    </div>

                    {/* Meal ID Field */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 ml-1">
                            <Fingerprint size={16} className="text-indigo-500" /> Meal ID
                        </label>
                        <input
                            type="text"
                            placeholder="Enter unique meal ID"
                            {...register("mealId", {
                                required: "Meal ID is required",
                                minLength: { value: 5, message: "Too short to be a valid ID" }
                            })}
                            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none transition-all focus:bg-white focus:ring-2 text-black ${errors.mealId ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-indigo-100 focus:border-indigo-500'
                                }`}
                        />
                        {errors.mealId && <p className="text-red-500 text-xs px-1">{errors.mealId.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] disabled:opacity-70"
                    >
                        {isSubmitting ? "Searching..." : "Track Meal"}
                        <ArrowRight size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MealForm;