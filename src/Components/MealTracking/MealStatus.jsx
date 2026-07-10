import React, { useEffect, useState } from 'react'
import MealTrackingDashboard from '../AdminLayout/MealTrackingDashboard'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import Loding from '../Loding/Loding'
import CustomerMealStatus from './CustomerMealStatus';
import { Search, X } from 'lucide-react';

const MealStatus = () => {

    const { mealId } = useParams();
    const navigate = useNavigate();

    const [loding, setLoding] = useState(false);
    const [messingData, setMessingData] = useState(null);
    const [mealData, setMealData] = useState(null);
    const [customerData, setCustomerData] = useState(null);


    const fetchMealStatus = async () => {
        try {
            setLoding(true);
            //API call
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/customer/meal-status/${mealId}`,
                { withCredentials: true }
            );
            setLoding(false);
            if (response.status === 200) {
                // console.log(response.data);
                setMessingData(response.data.messingDetails);
                setCustomerData(response.data.customerDetails);
                setMealData(response.data.mealDetails);
            }
        } catch (err) {
            if (err) {
                navigate('/track-meal')
            }
            console.error("Error fetching meal status:", err);
        }
    }

    useEffect(() => {
        fetchMealStatus();
    }, [mealId]);


    //search functionality
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        // if (onSearch) onSearch(value); // Live search
    };

    const handleClear = () => {
        setQuery('');
        // if (onSearch) onSearch('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (onSearch) onSearch(query); // Explicit submit
    };


    return (
        <div className='pb-10 bg-gray-50' >
            {loding && <Loding />}
            <div className='lg:pt-18 md:pt-18 px-0 py-6'>

                <h1 className="px-6 pt-5 text-2xl font-bold text-gray-800">Dear! <span className="text-blue-700">{customerData ? customerData.name : 'User'}</span></h1>


                <MealTrackingDashboard messingData={messingData} manager={customerData?.ismanager} fetchmealStatus={fetchMealStatus} />


            </div>
            <div className='mt-0  mx-6  p-5 h-auto w-auto bg-white rounded-lg drop-shadow-xl border'>
                <div className="flex items-center justify-between my-5">
                    <h1 className='px-8 py-3 mx-7  text-md font-semibold inline-block text-white rounded-full bg-linear-to-tr from-amber-700 to-orange-400'>Customer Meal Status</h1>

                    {/* Search bar */}
                    <form onSubmit={handleSubmit} className="min-w-md  mx-7">
                        <div className="relative flex items-center w-full h-12 rounded-xl border border-gray-600 bg-white px-3 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">

                            {/* Lucide Search Icon */}
                            <Search className="h-5 w-5 text-gray-400 shrink-0 select-none" />

                            {/* Input Field */}
                            <input
                                type="text"
                                className="h-full w-full bg-transparent pl-3 pr-8 outline-none text-sm text-gray-700 placeholder-gray-400"
                                placeholder="Search items, tags, or keys..."
                                value={query}
                                onChange={handleInputChange}
                            />

                            {/* Lucide Clear Icon (Conditional) */}
                            {query && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="absolute right-3 p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                                    aria-label="Clear search"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
                <div className="lg:px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <CustomerMealStatus />
                    <CustomerMealStatus />
                    <CustomerMealStatus />
                    <CustomerMealStatus />
                    <CustomerMealStatus />
                    <CustomerMealStatus />
                    <CustomerMealStatus />
                    <CustomerMealStatus />
                </div>
            </div>
        </div>
    )
}

export default MealStatus
