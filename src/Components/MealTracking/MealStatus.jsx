import React, { useEffect, useState } from 'react'
import MealTrackingDashboard from '../AdminLayout/MealTrackingDashboard'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import Loding from '../Loding/Loding'

const MealStatus = () => {

    const { mealId } = useParams();
    const navigate = useNavigate();

    const [loding, setLoding] = useState(false);
    const [messingData, setMessingData] = useState(null);

    const fetchMealStatus = async () => {
        try {
            setLoding(true);
            //API call
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/customer/meal-status/${mealId}`,
                { withCredentials: true }
            );
            setLoding(false);
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

    return (
        <div>
            {loding && <Loding />}
            <div className='lg:pt-18 md:pt-18 px-0 py-6 bg-gray-50'>

                <h1 className="px-6 pt-5 text-2xl font-bold text-gray-800">Hello! <span className="text-blue-700">Sourav Sahoo</span></h1>


                <MealTrackingDashboard />

            </div>
        </div>
    )
}

export default MealStatus
