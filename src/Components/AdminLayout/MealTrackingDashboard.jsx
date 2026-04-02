import React, { useState } from 'react';
import { ShoppingCart, Hash, TrendingUp, PieChart } from 'lucide-react';

const MealTrackingDashboard = () => {
    // Mock Data - In a real app, this comes from your Backend API
    const [data, setData] = useState({
        totalSpend: 12500,
        totalCurryQty: 150, // in kg or servings
        totalRiceQty: 200,  // in kg
        extraExpenses: 1200
    });

    // Derived Analytics Logic
    const avgCurryRate = (data.totalSpend * 0.6 / data.totalCurryQty).toFixed(2); // Assuming 60% spend on curry
    const avgRiceRate = (data.totalSpend * 0.3 / data.totalRiceQty).toFixed(2);   // Assuming 30% spend on rice
    const totalItems = data.totalCurryQty + data.totalRiceQty;

    const cards = [
        {
            label: 'Total Spend',
            value: `₹${data.totalSpend.toLocaleString()}`,
            sub: 'This Month',
            icon: <ShoppingCart className="text-emerald-600" />,
            bg: 'bg-emerald-50'
        },
        {
            label: 'Total Curry',
            value: `${data.totalCurryQty}`,
            sub: 'Total Volume',
            icon: <Hash className="text-orange-600" />,
            bg: 'bg-orange-50'
        },
        {
            label: 'Total No of Rice',
            value: `${data.totalRiceQty}`,
            sub: 'Total Volume',
            icon: <Hash className="text-blue-600" />,
            bg: 'bg-blue-50'
        },
        {
            label: 'Avg Curry Rate',
            value: `₹${avgCurryRate}`,
            sub: 'Efficiency Metric',
            icon: <TrendingUp className="text-purple-600" />,
            bg: 'bg-purple-50'
        },
        {
            label: 'Avg Rice Rate',
            value: `₹${avgRiceRate}`,
            sub: 'Efficiency Metric',
            icon: <TrendingUp className="text-rose-600" />,
            bg: 'bg-rose-50'
        },
        {
            label: 'Daily Avg Consumption',
            value: `${(totalItems / 30).toFixed(1)} kg`,
            sub: 'Per Day',
            icon: <PieChart className="text-amber-600" />,
            bg: 'bg-amber-50'
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Meal Management Dashboard</h1>
                <p className="text-gray-500">Real-time tracking of mess inventory and spending</p>
            </div>

            {/* Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${card.bg}`}>
                            {card.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{card.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{card.value}</h3>
                            <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Breakdown Section */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-4 text-gray-700">Cost Distribution</h4>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Curry Ingredients</span>
                                <span className="font-semibold text-orange-600">60%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Rice & Grains</span>
                                <span className="font-semibold text-blue-600">30%</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl shadow-lg text-white flex flex-col justify-center">
                    <h4 className="text-orange-400 font-bold mb-2">Quick Action</h4>
                    <p className="text-gray-400 text-sm mb-6">Need to update today's market prices for curry or rice?</p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition">
                        Update Inventory Rates
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealTrackingDashboard;