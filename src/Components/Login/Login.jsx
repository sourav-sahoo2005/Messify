import { React, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Loding from '../Loding/Loding';
import Msgpopup from './Msgpopup';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router';


const Login = () => {

    const navigate = useNavigate();

    const [loding, setLoding] = useState(false);
    const [isOTPSend, setIsOTPSend] = useState(false)
    const [serverMsg, setServerMsg] = useState("");
    // 1. Separate instance for Login
    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        getValues,
        formState: {
            errors: loginErrors,
        },
    } = useForm();

    // 2. Separate instance for Registration
    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: {
            errors: registerErrors,
        },
    } = useForm({
        defaultValues: { amenities: [] }
    });




    //Send The Login Data To The Back-end

    const handleLoginFormSubmit = async (data) => {
        try {
            setLoding(true);
            const resData = await axios.post('http://localhost:5000/owner/login', data);
            console.log(resData)

            setServerMsg(resData.data.message);
            setLoding(false);

            // 3. Logic to Redirect
            if (resData.status === 200 && resData.data.message !== "Invalid OTP") {
                setIsOTPSend(false);
                localStorage.setItem('token', true);
                navigate('/admin/dashboard');
            } else {
                setIsOTPSend(true);
            }

        } catch (e) {
            console.error("Login Error:", e);
            setServerMsg("Server error. Please try again.");
        }
    };


    //send the registration data to the back-end

    const handleRegisterFormSubmit = async (data) => {
        try {

            const resData = await axios.post('http://localhost:5000/owner/register', data)
            setLoding(false);
            setServerMsg(resData.data.message)
            console.log(resData)

            if (resData.status === 200 && resData.data.message == "Registration successful") {

                localStorage.setItem('token', true);
                navigate('/admin/dashboard');
            }
        } catch (e) {
            console.error("This is not JSON! It's likely an HTML error page.");
            setServerMsg("Server error. Please try again.");
        }
    };

    //Send OTP to the Email
    const sendOTP = async () => {

        const currentUserId = getValues("userid");
        const currentPassword = getValues("password");

        if (!currentUserId) {
            setServerMsg("Please enter a User ID and Password before requesting an OTP");
            return;
        }
        // Now you can pass them to your API
        setLoding(true)
        const response = await axios.post('http://localhost:5000/owner/send-otp', { userid: currentUserId, password: currentPassword })
        response.status == 200 && response.data.message == "OTP send successfully" ? setIsOTPSend(true) : setIsOTPSend(false);
        setLoding(false)
        setServerMsg(response.data.message)
        // console.log(response);
    };


    if (loding) {
        return (
            <div className="h-screen flex justify-center items-center bg-black">
                <Loding />
            </div>
        );
    }



    return (

        <div className='bg-[url(../Images/default-bg.jpg)] bg-cover bg-center w-full h-screen top-0 left-0'>
            <Msgpopup
                message={serverMsg}
                onClose={() => setServerMsg("")}
            />
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
                            <input type="text" placeholder="User Id"
                                {...registerLogin("userid", {
                                    required: {
                                        value: true,
                                        message: "User Id is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+$/,
                                        message: "User ID must be alphanumeric whitout spaces EX:user123"
                                    }

                                })} className='w-full p-3  rounded-md border border-[#ccc] text-sm' />
                            {loginErrors.userid && <span className='error-text'>{loginErrors.userid.message}</span>}

                            <input type="password" placeholder="Password"
                                {...registerLogin("password", {
                                    required: {
                                        value: true,
                                        message: "Password  is required"
                                    }

                                })} className='w-full p-3 mt-3.75 rounded-md border border-[#ccc] text-sm' />
                            {loginErrors.password && <span className='error-text'>Password is required</span>}

                            {isOTPSend && (
                                <div className="mt-3.75 flex flex-col gap-2 justify-between">

                                    <input
                                        type="text"
                                        name="OTP"
                                        id="otp-input"
                                        placeholder="Enter Your OTP"
                                        maxLength="6"
                                        {...registerLogin("OTP", {
                                            required: {
                                                value: true,
                                                message: "OTP is required"
                                            },
                                            maxLength: {
                                                value: 6,
                                                message: "OTP must be a 6 digit "

                                            }

                                        })}
                                        className="w-full p-3 rounded-md border border-[#ccc] text-sm focus:outline-none focus:border-amber-500 transition-colors"
                                    />
                                    {loginErrors.OTP && <span className='error-text'>{loginErrors.OTP.message}</span>}
                                </div>


                            )}

                            {!isOTPSend ?
                                (<button type='button' onClick={sendOTP} className='min-w-52 mt-10.75 p-3 rounded-full bg-[#ff8400] text-white'>Send OTP</button>)
                                : (

                                    <input type="submit" className='min-w-52 mt-10.75 p-3 rounded-full bg-[#ff8400] text-white' value="Login" />
                                )}
                        </form>


                        {/* Registration Form */}
                        <form className="form register-form" onSubmit={handleSubmitRegister(handleRegisterFormSubmit)}>
                            <h2>Owner Registration</h2>
                            <h1 className='mb-4 text-sm text-center font-semibold text-red-500'>Note: All fields are required,So kindly fill all the fields for further process</h1>

                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Personal Details</h3>
                            <div className='flex items-center justify-between flex-wrap p-5 '>
                                {/* Note: Removed manual 'name' and 'required' attributes as RHF handles them */}
                                <input type="text"
                                    {...registerRegister("firstname", {
                                        required: {
                                            value: true,
                                            message: "First Name is required"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "First Name must be at least 3 characters long"
                                        }
                                    })}
                                    placeholder='First Name' className='input-field' />
                                {registerErrors.firstname && <span className='error-text'>{registerErrors.firstname.message}</span>}


                                <input type="text"
                                    {...registerRegister("lastname", {
                                        required: {
                                            value: true,
                                            message: "Last Name is required"
                                        },
                                        minLength: {
                                            value: 2,
                                            message: "Last Name must be at least 2 characters long"
                                        }
                                    })}
                                    placeholder='Last Name' className='input-field' />
                                {registerErrors.lastname && <span className='error-text'>{registerErrors.lastname.message}</span>}


                                <input type="email"
                                    {...registerRegister("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address"
                                        }

                                    })}
                                    placeholder="Email Address" className='input-field' />
                                {registerErrors.email && <span className='error-text'>{registerErrors.email.message}</span>}

                                <input type="number"
                                    {...registerRegister("phone", {
                                        required: {
                                            value: true,
                                            message: "Phone number is required"
                                        },
                                        minLength: {
                                            value: 10,
                                            message: "Phone number must be at least 10 characters long"
                                        },
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Phone number must be exactly 10 digits"
                                        }
                                    })}
                                    placeholder="Mobile Number" className='input-field' />
                                {registerErrors.phone && <span className='error-text'>{registerErrors.phone.message}</span>}
                            </div>

                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Mess Details</h3>
                            <div className='flex items-center justify-between flex-wrap p-5'>

                                <input type="text"
                                    placeholder="Mess / Lodging Name"
                                    {...registerRegister("messname", {
                                        required: {
                                            value: true,
                                            message: "Mess Name is required"
                                        }

                                    })}
                                    className='input-field' />
                                {registerErrors.messname && <span className='error-text'>{registerErrors.messname.message}</span>}

                                <select
                                    {...registerRegister("type", {
                                        required: {
                                            value: true,
                                            message: "This field is required"
                                        }
                                    })}
                                    className='input-field'>
                                    <option value="">Select Mess Type</option>
                                    <option value="boys">Boys</option>
                                    <option value="girls">Girls</option>
                                    <option value="family">Family</option>
                                    <option value="working-professionals">Working Professionals</option>
                                </select>
                                {registerErrors.type && <span className='error-text'>{registerErrors.type.message}</span>}

                                <textarea
                                    {...registerRegister("aboutmess", {
                                        required: {
                                            value: true,
                                            message: "This field is required"
                                        },
                                        maxLength: {
                                            value: 180,
                                            message: "About Mess must be less than 180 characters"
                                        }

                                    })}
                                    placeholder="About Your Mess in 180 characters" className='input-field text-wrap h-26' ></textarea>
                                {registerErrors.aboutmess && <span className='error-text'>{registerErrors.aboutmess.message}</span>}

                                <input type="number"
                                    {...registerRegister("capacity", {
                                        required: {
                                            value: true,
                                            message: "Capacity is required"
                                        }
                                    })}
                                    placeholder='Capacity' min={0} className='input-field' />
                                {registerErrors.capacity && <span className='error-text'>{registerErrors.capacity.message}</span>}

                                <input type="number"
                                    {...registerRegister("vacancy", {
                                        required: {
                                            value: true,
                                            message: "Vacancy is required"
                                        }
                                    })}
                                    placeholder='Vacancy' min={0} className='input-field' />
                                {registerErrors.vacancy && <span className='error-text'>{registerErrors.vacancy.message}</span>}


                                <input type="number"
                                    {...registerRegister("price", {
                                        required: {
                                            value: true,
                                            message: "Price is required"
                                        }
                                    })}
                                    placeholder='Price Per Month' min={0} className='input-field' />
                                {registerErrors.price && <span className='error-text'>{registerErrors.price.message}</span>}

                                <input type="number"
                                    {...registerRegister("security", {
                                        required: {
                                            value: true,
                                            message: "Security Deposit is required"
                                        }
                                    })}
                                    placeholder='Security Deposit' min={0} className='input-field' />
                                {registerErrors.security && <span className='error-text'>{registerErrors.security.message}</span>}

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

                                <input type="text"
                                    {...registerRegister("location", {
                                        required: {
                                            value: true,
                                            message: "Location is required"
                                        }
                                    })}
                                    placeholder="Location / Place" className='input-field' />
                                {registerErrors.location && <span className='error-text'>{registerErrors.location.message}</span>}

                                <input type="text"
                                    {...registerRegister("landmark", {
                                        required: {
                                            value: true,
                                            message: "landmark is required"
                                        }
                                    })}
                                    placeholder="Landmark area" className='input-field' />
                                {registerErrors.landmark && <span className='error-text'>{registerErrors.landmark.message}</span>}

                                <select name="City"
                                    {...registerRegister("city", {
                                        required: {
                                            value: true,
                                            message: "City is required"
                                        }

                                    })}
                                    className="input-field">
                                    <option value="" className="text-black" >Select Your City</option>
                                    <option value="Balasore">Balasore</option>
                                    <option value="Baripada">Baripada</option>
                                    <option value="Bhadrak">Bhadrak</option>
                                    <option value="Bhubaneswar">Bhubaneswar</option>
                                    <option value="Cuttack">Cuttack</option>
                                    <option value="Puri">Puri</option>
                                </select>
                                {registerErrors.city && <span className='error-text'>{registerErrors.city.message}</span>}

                                <input type="text"
                                    {...registerRegister("pincode", {
                                        required: {
                                            value: true,
                                            message: "PIN code is required"
                                        },
                                        maxLength: {
                                            value: 6,
                                            message: "PIN must be 6 digits"
                                        },
                                        pattern: {
                                            value: /^[0-9]{6}$/,
                                            message: "PIN code must be exactly 6 digits"
                                        }
                                    })}
                                    placeholder="PIN Code" className='input-field' />
                                {registerErrors.pincode && <span className='error-text'>{registerErrors.pincode.message}</span>}
                            </div>

                            <h3 className='p-2 pl-5 mb-2 rounded-full bg-zinc-300'>Additional Details</h3>
                            <div className='flex items-center justify-between gap-2 flex-wrap p-5'>
                                <input type="text"
                                    {...registerRegister("userId", {
                                        required: {
                                            value: true,
                                            message: "User ID is required"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+$/,
                                            message: "User ID must be alphanumeric without spaces EX:user123"
                                        }
                                    })}
                                    placeholder="User Id" className='input-field' />
                                {registerErrors.userId && <span className='error-text'>{registerErrors.userId.message}</span>}

                                <input type="password"
                                    {...registerRegister("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                    })}
                                    placeholder="Create Password" className='input-field' />
                                {registerErrors.password && <span className='error-text'>{registerErrors.password.message}</span>}
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <input type="submit" className='min-w-52 p-3 rounded-full bg-amber-500 text-white cursor-pointer' value='Register' />
                                <p>Start managing your mess today</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;