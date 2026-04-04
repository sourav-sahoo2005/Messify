import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, Info } from 'lucide-react';
import axios from 'axios';



const SendSms = ({ customers, onClose, messData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({

    });


    const onSubmit = async (data) => {

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/owner/send-mess-update`, {
                subject: data.subject,
                message: data.message,
                messDetails: {
                    messname: messData.messName,
                    place: messData.address.area,
                    city: messData.city
                },
                customerData: customers.map(c => ({ name: c.name, email: c.email }))
            }, { withCredentials: true });

            if (response.status === 200) {
                alert("Messages send Successfully!");
            }
            onClose();
        } catch (err) {
            console.error("Error sending messages:", err);
            alert("Failed to send bulk messages.");
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
                {/* Header with Warning Color */}
                <div className="bg-amber-50 p-6 border-b border-amber-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-amber-900">Send Message</h2>
                            <p className="text-sm text-amber-700 font-medium">
                                Targeting: {customers.length} Customers
                            </p>
                        </div>
                        <button onClick={onClose} className="text-amber-400 hover:text-amber-600 font-bold text-xl">✕</button>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                    {/* Subject */}
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Campaign Subject</label>
                        <input
                            {...register("subject")}
                            placeholder="Subject of the message"
                            className={`w-full px-4 py-2 text-black bg-gray-50 border rounded-lg focus:ring-2 transition-all outline-none ${errors.subject ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:ring-amber-200'
                                }`}
                        />
                        {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message}</span>}
                    </div>

                    {/* Message Area */}
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Message Content</label>
                        <textarea
                            {...register("message")}
                            rows="6"
                            placeholder="Message for the customer..."
                            className={`w-full px-4 py-2 text-black bg-gray-50 border rounded-lg focus:ring-2 transition-all outline-none ${errors.message ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:ring-amber-200'
                                }`}
                        />
                        {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg flex items-start gap-3">
                        <span className="text-blue-500"><Info /></span>
                        <p className="text-[11px] text-blue-700">
                            Note: This action cannot be undone. Clicking "Send SMS" will immediately queue this message for all <strong>{customers.length}</strong> recipients.
                        </p>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-gray-500 font-semibold px-4 hover:underline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white  py-3 px-8 rounded-xl shadow-md disabled:opacity-50 transition-transform active:scale-95"
                        >
                            {isSubmitting ? (
                                <>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    <span>Send SMS Now</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendSms;