import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function TodayMeal({setOpen}) {
  // 1. Manage state matching your Mongoose schema structure
  const [mealStatus, setMealStatus] = useState('Continue Off'); // Options: 'Auto', 'Continue On', 'Continue Off'
  const [mealData, setMealData] = useState({
    lunch: { rice: '', curry: '' },
    dinner: { rice: '', curry: '' },
  });

  // Check if fields should be disabled based on status
  const isDisabled = mealStatus === 'Continue Off';

  // Handle number input changes smoothly
  const handleInputChange = (mealTime, field, value) => {
    setMealData((prev) => ({
      ...prev,
      [mealTime]: {
        ...prev[mealTime],
        [field]: value === '' ? '' : Number(value),
      },
    }));
  };

  const handleClear = () => {
    setMealData({
      lunch: { rice: '', curry: '' },
      dinner: { rice: '', curry: '' },
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const payload = {
      mealStatus,
      meal: {
        date: new Date(),
        ...mealData
      }
    };
    console.log('Saving meal configuration:', payload);
    // Add your API submit logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-slate-900/60 backdrop-blur-sm p-4 absolute top-0 left-0 w-full h-full z-50">
      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-300    ">
        <X onClick={() => setOpen(false)}  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Update Today Meal</h2>

        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Meal Status Dropdown Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-600">Meal Status</label>
            <select
              value={mealStatus}
              onChange={(e) => setMealStatus(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 font-medium cursor-pointer"
            >
              <option value="Continue Off">Continue Off</option>
              <option value="Continue On">Continue On</option>
              <option value="Auto">Auto</option>
            </select>
          </div>

          <hr className="border-gray-200" />

          {/* Form Fields Wrapper (Visual indicator if disabled) */}
          <div className={`space-y-5 transition-opacity duration-300 ${isDisabled ? 'opacity-40 select-none pointer-events-none' : 'opacity-100'}`}>
            
            {/* Lunch Section */}
            <div>
              <h3 className="text-md font-bold text-gray-700 mb-2.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Lunch
              </h3>
              <div className="pl-3 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-600 font-medium">Rice:</label>
                  <input
                    type="number"
                    disabled={isDisabled}
                    value={mealData.lunch.rice}
                    onChange={(e) => handleInputChange('lunch', 'rice', e.target.value)}
                    placeholder="0"
                    className="w-28 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-600 font-medium">Curry:</label>
                  <input
                    type="number"
                    disabled={isDisabled}
                    value={mealData.lunch.curry}
                    onChange={(e) => handleInputChange('lunch', 'curry', e.target.value)}
                    placeholder="0"
                    className="w-28 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Dinner Section */}
            <div>
              <h3 className="text-md font-bold text-gray-700 mb-2.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span> Dinner
              </h3>
              <div className="pl-3 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-600 font-medium">Rice:</label>
                  <input
                    type="number"
                    disabled={isDisabled}
                    value={mealData.dinner.rice}
                    onChange={(e) => handleInputChange('dinner', 'rice', e.target.value)}
                    placeholder="0"
                    className="w-28 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-600 font-medium">Curry:</label>
                  <input
                    type="number"
                    disabled={isDisabled}
                    value={mealData.dinner.curry}
                    onChange={(e) => handleInputChange('dinner', 'curry', e.target.value)}
                    placeholder="0"
                    className="w-28 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              disabled={isDisabled}
              onClick={handleClear}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={isDisabled}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed shadow-md shadow-blue-200"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}