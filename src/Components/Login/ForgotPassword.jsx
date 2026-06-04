import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router';




const ForgotPassword = () => {

    const navigate = useNavigate();

    const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify & Reset
    const [userIdentifier, setUserIdentifier] = useState('');

    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        watch,
        trigger,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            identifier: '',
            otp: '',
            newPassword: '',
            confirmPassword: '',
        },
    });

    // Watch password field to validate confirmPassword match in real-time
    const newPasswordValue = watch('newPassword');

    // Handle Step 1: Validate and send OTP
    const handleRequestOTP = async (data) => {
        // Optional: Explicitly trigger validation for step 1 fields if needed

        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/owner/request-reset-password`, {
            identifier: data.identifier
        })



        const isValid = await trigger('identifier');
        if (!isValid) return;

        setUserIdentifier(data.identifier);
        setStep(2);
    };

    // Handle Step 2: Final Submission
    const handleResetPassword = async (data) => {
        try {

            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/owner/reset-password`, {
                identifier: userIdentifier,
                otp: data.otp,
                newPassword: data.newPassword,
            })

            if (res.status === 200) {
                alert('Password reset successfully!');
                navigate('/login');
            } else {
                alert('Failed to reset password.');
            }
        } catch (err) {
            console.error('Error resetting password:', err);
            alert('An error occurred while resetting password. Please try again.');
        }
    };


    return (


        <div className='min-h-screen flex lg:justify-end justify-center px-30 relative text-black bg-slate-50 '>
            <div className='p-20 absolute h-[95vh] w-[50vw] top-[-5vw] left-[-10vw] flex flex-col items-end justify-center  rounded-full bg-linear-to-r from-indigo-500 to-indigo-950'>
                <div className='lg:block hidden'>
                    <h1 className='text-3xl font-bold text-white '>Forgot Password</h1>
                    <h3 className='w-80 text-white mt-4'>Keep your password secure and never share it with anyone.</h3>
                </div>

            </div>
            <div className=' absolute lg:top-100 lg:left-[-5vw] left-[60vw]  h-80 w-80  rounded-full bg-linear-to-b from-indigo-500 to-indigo-950'></div>
            <div className=' absolute lg:top-95 top-190 lg:left-90 left-80  h-50 w-50  rounded-full bg-linear-to-b from-indigo-500 to-indigo-950'></div>



            {/* form */}
            <div className="flex min-h-screen lg:w-auto w-full lg:static absolute items-center justify-center  px-4 py-12 sm:px-6 lg:px-8 lg:z-10 z-100">
                <div className="w-full  max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl border border-slate-100">

                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                            {step === 1 ? 'Forgot Password?' : 'Reset Your Password'}
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                            {step === 1
                                ? "No worries! Enter your details below and we'll send you an OTP."
                                : `Enter the OTP sent to ${userIdentifier} and your new password.`}
                        </p>
                    </div>

                    {/* Dynamic Form Wrapper */}
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={
                            step === 1
                                ? handleSubmit(handleRequestOTP)
                                : handleSubmit(handleResetPassword)
                        }
                    >

                        {/* STEP 1: Enter Identifier */}
                        {step === 1 && (
                            <div>
                                <label htmlFor="identifier" className="block text-sm font-medium text-slate-700">
                                    User ID or Email Address
                                </label>
                                <input
                                    id="identifier"
                                    type="text"
                                    className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 text-sm ${errors.identifier
                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                        : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-500'
                                        }`}
                                    placeholder="e.g., john_doe or john@example.com"
                                    {...register('identifier', {
                                        required: 'User ID or Email is required',
                                    })}
                                />
                                {errors.identifier && (
                                    <p className="mt-1 text-xs text-red-600">{errors.identifier.message}</p>
                                )}
                            </div>
                        )}

                        {/* STEP 2: Enter OTP and New Password */}
                        {step === 2 && (
                            <div className="space-y-4">
                                {/* OTP Field */}
                                <div>
                                    <label htmlFor="otp" className="block text-sm font-medium text-slate-700">
                                        One-Time Password (OTP)
                                    </label>
                                    <input
                                        id="otp"
                                        type="text"
                                        maxLength="6"
                                        className={`mt-1 block w-full rounded-lg border px-3 py-2 tracking-widest text-center font-semibold text-lg shadow-sm focus:outline-none focus:ring-1 ${errors.otp
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-500'
                                            }`}
                                        placeholder="000000"
                                        {...register('otp', {
                                            required: 'OTP is required',
                                            pattern: {
                                                value: /^\d{6}$/,
                                                message: 'OTP must be exactly 6 digits',
                                            },
                                        })}
                                    />
                                    {errors.otp && (
                                        <p className="mt-1 text-xs text-center text-red-600">{errors.otp.message}</p>
                                    )}
                                </div>

                                {/* New Password Field */}
                                <div>
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700">
                                        New Password
                                    </label>
                                    <input
                                        id="newPassword"
                                        type="password"
                                        className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 text-sm ${errors.newPassword
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-500'
                                            }`}
                                        placeholder="••••••••"
                                        {...register('newPassword', {
                                            required: 'New password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters long',
                                            },
                                        })}
                                    />
                                    {errors.newPassword && (
                                        <p className="mt-1 text-xs text-red-600">{errors.newPassword.message}</p>
                                    )}
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">
                                        Confirm New Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 text-sm ${errors.confirmPassword
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-500'
                                            }`}
                                        placeholder="••••••••"
                                        {...register('confirmPassword', {
                                            required: 'Please confirm your password',
                                            validate: (value) =>
                                                value === newPasswordValue || 'Passwords do not match',
                                        })}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors disabled:bg-indigo-400"
                            >
                                {isSubmitting ? 'Processing...' : step === 1 ? 'Send OTP' : 'Reset Password'}
                            </button>
                        </div>

                        {/* Back Navigation */}
                        {step === 2 && (
                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-xs font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                                >
                                    ← Back to enter ID
                                </button>
                            </div>
                        )}
                    </form>

                    <div className='flex flex-col items-center justify-center '>
                        <Link to="/login" className='text-sm text-center font-semibold hover:underline'>Back to Login</Link>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default ForgotPassword
