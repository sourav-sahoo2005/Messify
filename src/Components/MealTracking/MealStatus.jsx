import React, { useEffect, useState } from 'react'
import MealTrackingDashboard from '../AdminLayout/MealTrackingDashboard'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import Loding from '../Loding/Loding'
import CustomerMealStatus from './CustomerMealStatus';

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



    return (
        <div className='pb-10 bg-gray-50' >
            {loding && <Loding />}
            <div className='lg:pt-18 md:pt-18 px-0 py-6'>

                <h1 className="px-6 pt-5 text-2xl font-bold text-gray-800">Dear! <span className="text-blue-700">{customerData ? customerData.name : 'User'}</span></h1>


                <MealTrackingDashboard messingData={messingData} manager={customerData?.ismanager} fetchmealStatus={fetchMealStatus} />


            </div>
            <div className='mt-10  mx-6  p-5 h-auto w-auto bg-white rounded-lg drop-shadow-xl border'>
                <h1 className='px-8 py-2  text-md font-bold inline-block text-blue-900 rounded-full bg-blue-100'>Customer Meal Status</h1>
                <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

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
