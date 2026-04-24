import React, { useState } from 'react';
import { Save, Building2, MapPin, UserCircle, ShieldCheck, Info } from 'lucide-react';
import axios from 'axios';

const EditProfile = ({ data, setServerMsg, fetchData }) => {

    const [initialData, setInitialData] = useState(data);

    // Initialize state with the existing data
    const [formData, setFormData] = useState({
        messName: data?.messName || '',
        type: data?.type || 'boys',
        capacity: data?.capacity || 0,
        vacancy: data?.vacancy || 0,
        price: data?.price || 0,
        security: data?.security || 0,
        description: data?.description || '',
        city: data?.city || '',
        address: {
            area: data?.address?.area || '',
            landmark: data?.address?.landmark || '',
            pin: data?.address?.pin || '',
        },
        owner: {
            name: data?.owner?.name || '',
            phone: data?.owner?.phone || '',
            email: data?.owner?.email || '',
        }
    });

    const [isSaving, setIsSaving] = useState(false);

    // Handle top-level and nested inputs
    const handleChange = (e, section = null) => {
        const { name, value } = e.target;
        if (section) {
            setFormData(prev => ({
                ...prev,
                [section]: { ...prev[section], [name]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };


    // Function to get only the changed values compared to initial data
    const getDirtyValues = (initialValues, currentValues) => {
        let dirtyValues = {};

        Object.keys(currentValues).forEach(key => {
            // If it's a nested object (like your 'section' logic)
            if (typeof currentValues[key] === 'object' && currentValues[key] !== null) {
                const nestedDiff = getDirtyValues(initialValues[key] || {}, currentValues[key]);
                if (Object.keys(nestedDiff).length > 0) {
                    dirtyValues[key] = nestedDiff;
                }
            }
            // If the value has changed from the initial state
            else if (currentValues[key] !== initialValues[key]) {
                dirtyValues[key] = currentValues[key];
            }
        });

        return dirtyValues;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);


        // 2. Extract only what changed
        const changedDataOnly = getDirtyValues(initialData, formData);

        if (Object.keys(changedDataOnly).length === 0) {
            setServerMsg("No changes detected.");
            setIsSaving(false);
            return;
        }

        try {

            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/owner/update-profile`, changedDataOnly, {
                withCredentials: true
            });

            if (response.status === 200) {
                setIsSaving(false);
                fetchData();
                setServerMsg("Profile updated successfully!");
            }


        } catch (err) {
            console.error("Error saving profile:", err);
            setIsSaving(false);
            alert("Failed to save profile. Please try again.");


        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-12">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Edit Mess Profile</h1>
                    <p className="text-slate-500 text-sm ">Update your mess details and contact information.</p>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isSaving}
                    className="text-sm flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold transition shadow-lg shadow-indigo-200 disabled:opacity-50"
                >
                    {isSaving ? 'Saving...' : <><Save size={16} /> Save Changes</>}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN: Mess & Owner Details */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Section 1: Basic Info */}
                    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-4 text-indigo-600">
                            <Building2 size={20} />
                            <h2 className="font-semibold text-lg text-slate-800">Mess Details</h2>
                        </div>
                        <div className=" text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-600 mb-2">Mess Name</label>
                                <input
                                    type="text" name="messName" value={formData.messName} onChange={handleChange}
                                    className="w-full p-3 text-black bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Mess Type</label>
                                <select
                                    name="type" value={formData.type} onChange={handleChange}
                                    className="w-full p-3 text-black bg-slate-50 border border-slate-200 rounded-xl outline-none"
                                >
                                    <option value="boys">Boys</option>
                                    <option value="girls">Girls</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Description</label>
                                <textarea

                                    name="description" value={formData.description} onChange={handleChange} rows="1"
                                    className="w-full lg:min-h-auto min-h-30 p-3 text-black bg-slate-50 border border-slate-200 rounded-xl outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Location */}
                    <section className="text-sm bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-4 text-indigo-600">
                            <MapPin size={20} />
                            <h2 className="font-bold text-lg text-slate-800">Location Information</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">City</label>
                                <input
                                    type="text" name="city" value={formData.city} onChange={handleChange}
                                    className="w-full p-3 text-black bg-slate-50 border border-slate-200 rounded-xl outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Area</label>
                                <input
                                    type="text" name="area" value={formData.address.area} onChange={(e) => handleChange(e, 'address')}
                                    className="w-full p-3 text-black bg-slate-50 border border-slate-200 rounded-xl outline-none"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-600 mb-2">Landmark</label>
                                <input
                                    type="text" name="landmark" value={formData.address.landmark} onChange={(e) => handleChange(e, 'address')}
                                    className="w-full p-3 text-black bg-slate-50 border border-slate-200 rounded-xl outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Pincode</label>
                                <input
                                    type="text" name="pin" value={formData.address.pin} onChange={(e) => handleChange(e, 'address')}
                                    className="w-full p-3 text-black bg-slate-50 border border-slate-200 rounded-xl outline-none"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN: Pricing & Owner */}
                <div className="space-y-8">
                    {/* Section 3: Pricing & Capacity */}
                    <section className="text-sm bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-4 text-orange-600">
                            <ShieldCheck size={20} />
                            <h2 className="font-bold text-lg text-slate-800">Inventory & Pricing</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center gap-4">
                                <div className="flex-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase">Capacity</label>
                                    <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} className="w-full p-2 text-black bg-slate-50 border-b border-slate-200 outline-none" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-xs font-bold text-slate-400 uppercase">Vacancy</label>
                                    <input type="number" name="vacancy" value={formData.vacancy} onChange={handleChange} className="w-full p-2 text-black bg-slate-50 border-b border-slate-200 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase">Monthly Price (₹)</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 bg-slate-50 border-b border-slate-200 outline-none text-lg font-bold text-indigo-600" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase">Security Deposit (₹)</label>
                                <input type="number" name="security" value={formData.security} onChange={handleChange} className="w-full p-2 text-red-500 font-bold  bg-slate-50 border-b border-slate-200 outline-none" />
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Owner Contact */}
                    <section className="text-sm bg-slate-900 rounded-2xl p-6 shadow-xl text-white">
                        <div className="flex items-center gap-2 mb-4">
                            <UserCircle size={20} className="text-indigo-400" />
                            <h2 className="font-bold text-lg">Owner Contact</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-slate-400 uppercase">Display Name</label>
                                <input type="text" name="name" value={formData.owner.name} onChange={(e) => handleChange(e, 'owner')} className="w-full bg-transparent border-b border-slate-700 py-1 outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-slate-400 uppercase">Phone</label>
                                <input type="text" name="phone" value={formData.owner.phone} onChange={(e) => handleChange(e, 'owner')} className="w-full bg-transparent border-b border-slate-700 py-1 outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-slate-400 uppercase">Email</label>
                                <input type="text" name="email" value={formData.owner.email} onChange={(e) => handleChange(e, 'owner')} className="w-full bg-transparent border-b border-slate-700 py-1 outline-none" />
                            </div>
                            <div className="pt-2 opacity-50 italic text-xs">
                                <Info size={12} className="inline mr-1" /> UserID cannot be changed .
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;