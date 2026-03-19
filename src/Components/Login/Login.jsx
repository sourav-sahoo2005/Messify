import {React,useState} from 'react';
import { useForm } from "react-hook-form";
import Loding from '../Loding/Loding';
import './Login.css';

const Login = () => {
    
    const [loding,setLoding] = useState(false);
    // 1. Separate instance for Login
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: { errors: loginErrors },
    } = useForm();

    // 2. Separate instance for Registration
    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: { errors: registerErrors },
    } = useForm({
        defaultValues: { amenities: [] }
    });




    //Send The Login Data To The Back-end

    const handleLoginFormSubmit = async (data) => {
        console.log(data);

        try {
            setLoding(true)
            const response = await fetch('http://localhost:5000/owner/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            const resData = await response.json();

            console.log("Response Data :", resData);
            setLoding(false);
        } catch (e) {
            console.error("This is not JSON! It's likely an HTML error page.");
        }
    };


    //send the registration data to the back-end

    const handleRegisterFormSubmit = async (data) => {
        try {
            setLoding(true)
            const response = await fetch('http://localhost:5000/owner/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            const resData = await response.json();

            console.log("Response Data :", resData);
            setLoding(false);
        } catch (e) {
            console.error("This is not JSON! It's likely an HTML error page.");
        }
    };



    if (loding) {
        return (
          <div className="h-screen flex justify-center items-center bg-black">
            {/* <h1 className="text-white text-3xl">Loading...</h1> */}
            <Loding/>
          </div>
        );
      }



    return (
        
        


        <div className='bg-[url(../Images/default-bg.jpg)] bg-cover bg-center w-full h-screen top-0 left-0'>
            <div className='p-5 h-screen w-full bg-black/70 flex justify-center items-center'>
                <div className="container">
                    <input type="radio" name="tab" id="login" defaultChecked />
                    <input type="radio" name="tab" id="register" />

                    <div className="tabs">
                        <label htmlFor="login">Owner Login</label>
                        <label htmlFor="register">Owner Registration</label>
                    </div>

                    <div className="forms">
                        {/* Login Form */}
                        <form className="form login-form" onSubmit={handleSubmitLogin(handleLoginFormSubmit)}>
                            <h2>Mess Owner Login</h2>
                            <input type="text" placeholder="User Id" {...registerLogin("userid", { required: true })} className='w-full p-3 mb-3.75 rounded-md border border-[#ccc] text-sm' />
                            <input type="password" placeholder="Password" {...registerLogin("password", { required: true })} className='w-full p-3 mb-3.75 rounded-md border border-[#ccc] text-sm' />
                            <input type="submit" className='min-w-52 p-3 rounded-full bg-amber-500 text-white' value="Login" />
                        </form>

                        {/* Registration Form */}
                        <form className="form register-form" onSubmit={handleSubmitRegister(handleRegisterFormSubmit)}>
                            <h2>Owner Registration</h2>

                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Personal Details</h3>
                            <div className='flex items-center justify-between flex-wrap p-5'>
                                {/* Note: Removed manual 'name' and 'required' attributes as RHF handles them */}
                                <input type="text" {...registerRegister("firstname", { required: true })} placeholder='First Name' className='input-field' />
                                <input type="text" {...registerRegister("lastname", { required: true })} placeholder='Last Name' className='input-field' />
                                <input type="email" {...registerRegister("email", { required: true })} placeholder="Email Address" className='input-field' />
                                <input type="tel" {...registerRegister("phone", { required: true, minLength: 10 })} placeholder="Mobile Number" className='input-field' />
                            </div>

                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Mess Details</h3>
                            <div className='flex items-center justify-between flex-wrap p-5'>
                                <input type="text" placeholder="Mess / Lodging Name" {...registerRegister("messname", { required: true })} className='input-field' />

                                <select {...registerRegister("type", { required: true })} className='input-field'>
                                    <option value="">Select Mess Type</option>
                                    <option value="boys">Boys</option>
                                    <option value="girls">Girls</option>
                                    <option value="family">Family</option>
                                    <option value="working-professionals">Working Professionals</option>
                                </select>

                                <textarea {...registerRegister("aboutmess", { required: true })} placeholder="About Your Mess" className='input-field text-wrap h-26' maxLength={180}></textarea>

                                <input type="number" {...registerRegister("capacity", { required: true })} placeholder='Capacity' min={0} className='input-field' />
                                <input type="number" {...registerRegister("vacancy", { required: true })} placeholder='Vacancy' min={0} className='input-field' />
                                <input type="number" {...registerRegister("price", { required: true })} placeholder='Price Per Month' min={0} className='input-field' />
                                <input type="number" {...registerRegister("security", { required: true })} placeholder='Security Deposit' min={0} className='input-field' />

                                {/* Amenities Checkboxes */}
                                <div className='input-field border-none'>
                                    <h3 className='lg:px-4 pb-3 font-semibold '>Amenities</h3>
                                    <div className='w-full flex lg:justify-center lg:items-center lg:flex-row flex-col lg:gap-10'>
                                        <label><input type="checkbox" value="AC" {...registerRegister("amenities")} className='mr-2' /> AC</label>
                                        <label><input type="checkbox" value="WIFI" {...registerRegister("amenities")} className='mr-2' /> WIFI</label>
                                        <label><input type="checkbox" value="Geyser" {...registerRegister("amenities")} className='mr-2' /> Geyser</label>
                                        <label><input type="checkbox" value="NA" {...registerRegister("amenities")} className='mr-2' /> NA</label>
                                    </div>
                                </div>
                            </div>

                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Mess Address Details</h3>
                            <div className='flex items-center justify-between flex-wrap p-5'>
                                <input type="text" {...registerRegister("location", { required: true })} placeholder="Location / Place" className='input-field' />
                                <input type="text" {...registerRegister("landmark", { required: true })} placeholder="Landmark area" className='input-field' />
                                <select name="City" {...registerRegister("city")} className="input-field">
                                    <option value="" className="text-black" >Select Your City</option>
                                    <option value="Balasore">Balasore</option>
                                    <option value="Baripada">Baripada</option>
                                    <option value="Bhadrak">Bhadrak</option>
                                    <option value="Bhubaneswar">Bhubaneswar</option>
                                    <option value="Cuttack">Cuttack</option>
                                    <option value="Puri">Puri</option>
                                </select>
                                <input type="text" {...registerRegister("pincode", { required: true, maxLength: 6 })} placeholder="PIN Code" className='input-field' />
                            </div>

                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Additional Details</h3>
                            <div className='flex items-center justify-between gap-2 flex-wrap p-5'>
                                <input type="text" {...registerRegister("userId", { required: true })} placeholder="User Id" className='input-field' />
                                <input type="password" {...registerRegister("password", { required: true })} placeholder="Create Password" className='input-field' />
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <input type="submit" className='min-w-52 p-3 rounded-full bg-amber-500 text-white cursor-pointer' value='Register' />
                                <p>Start managing your mess today</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;