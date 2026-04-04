import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserPlus, Mail, Phone, User, Trash2, Search } from 'lucide-react';
import SendSms from './SendSms';
import MakeManagerPopup from './MakeManagerPopup';

const UsersManager = ({ data, setServerMsg }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMakeManagerOpen, setIsMakeManagerOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    // 1. Function to fetch users from the backend
    const fetchUsers = async () => {
        try {
            // This route should return the array of customers linked to the owner
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/owner/get-customers`, {
                withCredentials: true
            });
            setUsers(response.data.customers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // 2. Initial load
    useEffect(() => {
        fetchUsers();

    }, []);

    // 3. Handle Form Submission
    const userFormSubmit = async (formData) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/owner/add-customer`,
                formData,
                { withCredentials: true }
            );

            if (response.status === 200) {
                await fetchUsers();
                reset();        //clear the form
                setServerMsg(response.data.message)
            }
        } catch (error) {
            setServerMsg("Failed to add customer");

        }
    };

    // Handle Delete
    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            axios.delete(`${import.meta.env.VITE_BACKEND_URL}/owner/delete-customer/${id}`, { withCredentials: true })
                .then(response => {
                    if (response.status === 200) {
                        fetchUsers();
                        setServerMsg(response.data.message)
                    }
                })
                .catch(error => {
                    setServerMsg("Failed to delete customer");
                });


        }
    }



    return (
        <div className="space-y-8">
            {/* --- ADD USER FORM --- */}
            <div className=" bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                        <UserPlus size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">Add New Customer</h2>
                </div>

                <form onSubmit={handleSubmit(userFormSubmit)} className=" grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Rahul Sharma"
                                className="w-full pl-10 pr-4 py-2 text-black bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "First Name is required"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "First Name must be at least 3 characters long"
                                    }
                                })}
                            />
                            {errors.name && <span className='error-text'>{errors.name.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="email"
                                name="email"
                                placeholder="rahul@gmail.com"
                                className="w-full pl-10 pr-4 py-2 text-black bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    }

                                })}
                            />
                            {errors.email && <span className='error-text'>{errors.email.message}</span>}

                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                name="phone"
                                placeholder="9348XXXXXX"
                                className="w-full pl-10 pr-4 py-2 text-black bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                                {...register("phone", {
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
                            />
                            {errors.phone && <span className='error-text'>{errors.phone.message}</span>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition shadow-md shadow-indigo-200 flex items-center justify-center gap-2"
                    >
                        Add Customer
                    </button>
                </form>
            </div>

            {/* --- USERS LIST TABLE --- */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">Current Customers</h2>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                        Total: {users.length}
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Customer</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Contact Info</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Role</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <span className="font-semibold text-gray-700">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600">{user.email}</div>
                                            <div className="text-xs text-gray-400">{user.phone}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.ismanager && (
                                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                    Manager
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => deleteUser(user._id)}
                                                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-6 py-10 text-center text-gray-400 italic">
                                        No customers added yet. Start by adding one above!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex justify-end gap-3'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='px-3 py-2 border bg-indigo-600 hover:bg-indigo-700 rounded-lg'>
                    Send Message
                </button>
                {isModalOpen && (
                    <SendSms
                        customers={users}
                        messData={data}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}


                {(data.meal === "yes") && (
                    <button
                        onClick={() => setIsMakeManagerOpen(true)}
                        className='px-3 py-2 border bg-indigo-600 hover:bg-indigo-700 rounded-lg'>
                        Make Manager
                    </button>
                )}

                {isMakeManagerOpen && (
                    <MakeManagerPopup
                        isOpen={isMakeManagerOpen}
                        onClose={() => setIsMakeManagerOpen(false)}
                        customers={users}
                        fetchUsers = {fetchUsers}
                    />
                )}
            </div>
        </div>
    );
};

export default UsersManager;