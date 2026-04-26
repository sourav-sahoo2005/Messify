import React, { useState } from 'react';
import { Utensils, Save, XCircle } from 'lucide-react'; // Icons

const MealEditor = ({ customerName, initialData, onSave }) => {
  const [meal, setMeal] = useState(initialData || {
    lunch: { rice: 1, curry: 1 },
    dinner: { rice: 1, curry: 1 }
  });

  const handleUpdate = (period, field, value) => {
    setMeal(prev => ({
      ...prev,
      [period]: { ...prev[period], [field]: Number(value) }
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="bg-blue-600 p-4">
        <h2 className="text-white text-lg font-bold flex items-center gap-2">
          <Utensils size={20} /> Edit Today's Meal
        </h2>
        <p className="text-blue-100 text-sm">{customerName || 'Customer Name'}</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Lunch Section */}
        <section>
          <h3 className="text-gray-700 font-semibold mb-3 border-b pb-1">Lunch</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold">Rice</label>
              <input 
                type="number" 
                value={meal.lunch.rice}
                onChange={(e) => handleUpdate('lunch', 'rice', e.target.value)}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold">Curry</label>
              <input 
                type="number" 
                value={meal.lunch.curry}
                onChange={(e) => handleUpdate('lunch', 'curry', e.target.value)}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </section>

        {/* Dinner Section */}
        <section>
          <h3 className="text-gray-700 font-semibold mb-3 border-b pb-1">Dinner</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold">Rice</label>
              <input 
                type="number" 
                value={meal.dinner.rice}
                onChange={(e) => handleUpdate('dinner', 'rice', e.target.value)}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold">Curry</label>
              <input 
                type="number" 
                value={meal.dinner.curry}
                onChange={(e) => handleUpdate('dinner', 'curry', e.target.value)}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </section>

        <div className="flex gap-3 pt-4">
          <button 
            onClick={() => onSave(meal)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <Save size={18} /> Update Meal
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealEditor;