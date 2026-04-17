
import Messing from './Messing'
import { SquarePen } from 'lucide-react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loding from '../Loding/Loding'
import Msgpopup from '../Login/Msgpopup';






const TrackMeal = ({ setLoding }) => {

    const [messing, setMessing] = useState([]);
    // const [loding, setLoding] = useState(false);
    const [serverMsg, setServerMsg] = useState("");






    const getMessingData = async function () {
        try {
            setLoding(true)
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/owner/get-messing-data`);
            setLoding(false)
            res.status == 200 ? setMessing(res.data.messing) : "";

            setServerMsg(res.data.message)
        } catch (err) {
            console.error(err);
        }


    }

    const createDashboard = async function () {
        try {
            setLoding(true);
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/owner/create-messing-dashboard`,
                {},
                { withCredentials: true });
            setLoding(false);
            response.status == 200 ? getMessingData() : '';
            setServerMsg(response.data.message)
        } catch (err) {
            console.error(err);
        }
    }

    const deleteDashboard = async function (messing_id) {
        try {
            if (confirm("Do you Seriously want to delete this dashboard,once you delete you can't restore this dashboard")) {

                setLoding(true);
                const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/owner/delete-dashboard/${messing_id}`, { withCredentials: true });

                setLoding(false)
                res.status == 200 ? getMessingData() : '';
                setServerMsg(res.data.message)

            }

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getMessingData();

    }, [])


    return (
        <div className='grid grid-col-1 grid-row-2 gap-3 relative'>
            <Msgpopup
                message={serverMsg}
                onClose={() => setServerMsg("")}
            />
            <div className='min-h-20 px-6 py-4 text-lg  bg-white rounded-2xl  shadow-md text-black flex lg:flex-row md:lg-row flex-col justify-between items-center gap-3 sticky top-0'>
                <div className=' flex flex-col'>
                    <p className='flex  items-center gap-2 font-semibold'>
                        <SquarePen />Create A Management Dashboard

                    </p>
                    <p className='text-xs text-red-600 '>
                        Note: This Dashboard only create for current month of the current year.
                    </p>
                </div>
                <button
                    onClick={createDashboard}
                    className='px-3 py-2 rounded-2xl text-xs bg-indigo-700 text-white  transition-colors shadow-sm active:transform active:scale-95'>Create A Dashboard</button>

            </div>
            <div className='h-auto grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 gap-3 '>

                {messing.map(function (data) {
                    return (<Messing data={data} key={data._id} deleteDashboard={deleteDashboard} />)
                })}

            </div>
        </div>
    )
}

export default TrackMeal
