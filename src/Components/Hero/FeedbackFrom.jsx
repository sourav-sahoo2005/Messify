import axios from 'axios';
import { Reac, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loding from '../Loding/Loding';

const FeedbackForm = ({ onClose, setServerMessage }) => {

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      name: '',
      place: '',
      description: ''
    }
  });

  const onSubmit = async (data) => {

    setLoading(true)
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/feedback`, data);

    if (response.status === 200) {
      onClose();
      setLoading(false);
      setServerMessage("Feedback submitted successfully!");
    }


  };

  return (

    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-black lg:w-150 md:w-120 w-full p-8 rounded-2xl shadow-xl border border-gray-100 space-y-4 relative"

      >

        <button
          type='button'
          onClick={(e) => {
            e.preventDefault(); // Stops the form from submitting
            onClose();
          }}
          className="text-amber-400 hover:text-amber-600 font-bold text-xl absolute top-8 right-8">
          ✕
        </button>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Submit Feedback</h2>
          <p className="text-gray-500 text-sm">We value your opinion.</p>
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Too short"
              }
            })}

            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'
              }`}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* email field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type='email'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'
              }`}
            placeholder="e.g. rahul@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Place Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Place</label>
          <input
            {...register("place", {
              required: "Location is required"
            })}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${errors.place ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'
              }`}
            placeholder="e.g. Balasore, Odisha"
          />
          {errors.place && <p className="text-red-500 text-xs mt-1">{errors.place.message}</p>}
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            {...register("description", {
              required: "Please provide a description",
              minLength: { value: 10, message: "Description must be at least 10 characters" }
            })}
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all resize-none ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'
              }`}
            placeholder="Your feedback..."
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-all active:scale-[0.98]"
        >
          Send Feedback
        </button>


      </form>

      {loading && (<Loding />)}
    </div>
  );
};

export default FeedbackForm;