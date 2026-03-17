import React, { useState, useEffect } from 'react'
import './Login.css'

const Login = () => {

    const [position, setPosition] = useState({ lat: null, lng: null });

    useEffect(() => {
        if (position.lat !== null) {
            console.log("Updated Position:", position.lat, position.lng);
        }
    }, [position]);


    const getGeoLocation = () => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            }, (err) => console.error(err));


        }


    };



    return (
        <div className=' bg-[url(../Images/default-bg.jpg)] bg-cover bg-center w-full h-screen top-0 left-0 '>
            <div className='p-5 h-screen w-full bg-black/70 flex justify-center items-center '>

                <div className="container">
                    {/* Radio buttons */}
                    <input type="radio" name="tab" id="login" defaultChecked />
                    <input type="radio" name="tab" id="register" />

                    {/* Tabs */}
                    <div className="tabs">
                        <label htmlFor="login">Owner Login</label>
                        <label htmlFor="register">Owner Registration</label>
                    </div>

                    {/* Forms */}
                    <div className="forms">
                        {/* Login Form */}
                        <form className="form login-form " action={"/owner/login"} method='POST'>
                            <h2>Mess Owner Login</h2>
                            <input type="email" placeholder="User Id" required className='w-full p-3 mb-3.75 rounded-md border border-[#ccc] text-sm' />
                            <input type="password" placeholder="Password" required className='w-full p-3 mb-3.75 rounded-md border border-[#ccc] text-sm' />
                            <input type="submit" className='min-w-52 p-3 rounded-full bg-amber-500 text-white' value="Login" />
                            <p>Manage your mess & lodging easily</p>
                        </form>

                        {/* Registration Form */}
                        <form className="form register-form" action={"/owner/registation"} method='POST'>
                            <h2>Owner Registration</h2>

                            {/* Owner Details */}
                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Personal Details</h3>
                            <div className='flex items-center justify-between   flex-wrap p-5'>


                                <input type="text" name='firstname' placeholder='First Name' className='input-field' required />

                                <input type="text" name="lastname" placeholder='Last Name' className='input-field' />

                                <input type="email" placeholder="Email Address" required className='input-field' />

                                <input type="tel" id="phone" name="phone" minLength={10} placeholder="Mobile Number" className='input-field' />



                            </div>

                            {/* Mess Details */}
                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Mess Details</h3>
                            <div className='flex items-center justify-between   flex-wrap p-5'>

                                <input type="text" placeholder="Mess / Lodging Name" required className='input-field' />


                                {/* type */}
                                <select name="type" className='input-field'>
                                    <option value="">Select Mess Type</option>
                                    <option value="boys">Boys</option>
                                    <option value="girls">Girls</option>
                                    <option value="family">Family</option>
                                    <option value="working-professionals">Working Professionals</option>
                                </select>

                                <textarea name="aboutmess" placeholder="About Your Mess" className='input-field text-wrap h-26' maxLength={180} ></textarea>

                                <input type="number" name="capacity" placeholder='Capacity' required min={0} className='input-field' />
                                <input type="number" name="vacancy" placeholder='Vacancy' min={0} required className='input-field' />
                                <input type="number" name="price" placeholder='Price Per Month' min={0} required className='input-field' />
                                <input type="number" name="security" placeholder='Security Deposit' min={0} required className='input-field' />



                                {/* Amenities */}
                                <div className='input-field border-none'>
                                    <h3 className='lg:px-4 pb-3 font-semibold '>Amenities</h3>
                                    <div className=' w-full  flex lg:justify-center lg:items-center lg:flex-row flex-col lg:gap-10 '>

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="amenities"
                                                value="AC"
                                                className='mr-2'
                                            />
                                            Air Conditioning (AC)
                                        </label>

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="amenities"
                                                value="WIFI"
                                                className='mr-2'
                                            />
                                            WIFI
                                        </label>

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="amenities"
                                                value="Geyser"
                                                className='mr-2'
                                            />
                                            Geyser
                                        </label>

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="amenities"
                                                value="NA"
                                                className='mr-2'
                                            />
                                            NA
                                        </label>
                                    </div>
                                </div>




                            </div>

                            {/* Mess Adress Details */}
                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Mess Adress Details</h3>
                            <div className='flex items-center justify-between   flex-wrap p-5'>


                                <input type="text" placeholder="Location / Place" required className='input-field' />
                                <input type="text" placeholder="Landmark area" required className='input-field' />

                                <select name="City" className="input-field">
                                    <option value="" className="text-black" >Select Your City</option>
                                    <option value="Balasore">Balasore</option>
                                    <option value="Baripada">Baripada</option>
                                    <option value="Bhadrak">Bhadrak</option>
                                    <option value="Bhubaneswar">Bhubaneswar</option>
                                    <option value="Cuttack">Cuttack</option>
                                    <option value="Puri">Puri</option>
                                </select>
                                <input type="text" placeholder="PIN Code" maxLength={6} required className='input-field' />


                                {/* <div>
                                    <button onClick={getGeoLocation} className='flex  justify-center items-center gap-2 bg-blue-600 text-xs p-3 rounded-full cursor-pointer text-white'> <span >Location</span>
                                        <img src="../Icons/icons8-my-location-24.png" alt="" className='invert' />
                                    </button>
                                    {position.lat && <span className='text-xs text-red-800'>Lat: {position.lat}, Lng: {position.lng}</span>}
                                </div> */}

                            </div>





                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Additional Details</h3>
                            <div className='flex items-center justify-between gap-2  flex-wrap p-5'>

                                <input type="text" placeholder="User Id" required className='input-field' />

                                <input type="password" placeholder="Create Password" required className='input-field' />

                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <input type="submit" className='min-w-52 p-3 rounded-full bg-amber-500 text-white ' value='register' />
                                <p>Start managing your mess today</p>
                            </div>
                        </form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Login
