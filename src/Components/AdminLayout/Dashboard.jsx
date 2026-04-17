import React from 'react';
import {
    Users,
    BedDouble,
    IndianRupee,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Calendar
} from 'lucide-react';

const Dashboard = ({ data }) => {
    // Simple calculations based on your data object
    const occupancyRate = ((data.capacity - data.vacancy) / data.capacity) * 100;
    const monthlyRevenue = (data.capacity - data.vacancy) * data.price;

    const stats = [
        {
            title: 'Total Revenue',
            value: `₹${monthlyRevenue.toLocaleString()}`,
            description: 'Estimated Monthly',
            icon: <IndianRupee className="text-emerald-600" />,
            bg: 'bg-emerald-50',
            trend: '+12.5%',
            trendUp: true
        },
        {
            title: 'Occupancy',
            value: `${occupancyRate.toFixed(2)}%`,
            description: `${data.capacity - data.vacancy} / ${data.capacity} Beds`,
            icon: <BedDouble className="text-blue-600" />,
            bg: 'bg-blue-50',
            trend: 'High',
            trendUp: true
        },
        {
            title: 'Active Users',
            value: data.capacity - data.vacancy,
            description: 'Current Residents',
            icon: <Users className="text-indigo-600" />,
            bg: 'bg-indigo-50',
            trend: 'Stable',
            trendUp: true
        },
        {
            title: 'Vacant Spots',
            value: data.vacancy,
            description: 'Available Now',
            icon: <TrendingUp className="text-orange-600" />,
            bg: 'bg-orange-50',
            trend: 'Action Needed',
            trendUp: false
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">System Overview</h1>
                    <p className="text-sm text-slate-500 mt-1">Real-time performance of {data.messName}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                    <Calendar size={16} className='text-blue-600' />
                    {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${item.bg}`}>
                                {item.icon}
                            </div>
                            <span className={`flex items-center text-xs font-bold ${item.trendUp ? 'text-emerald-600' : 'text-orange-600'}`}>
                                {item.trend}
                                {item.trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.title}</p>
                            <h3 className="text-xl font-bold text-slate-800 mt-1">{item.value}</h3>
                            <p className="text-xs text-slate-400 mt-1 font-medium">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Occupancy Progress Chart (Visual) */}
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Capacity Breakdown</h2>
                    <div className="relative h-48 flex items-center justify-center">
                        {/* Simple CSS Circle Chart */}
                        <div className="relative w-40 h-40 rounded-full border-8 border-slate-100 flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-3xl font-bold text-indigo-600">{Math.round(occupancyRate)}%</span>
                                <p className="text-[10px] uppercase text-slate-400 font-bold">Occupied</p>
                            </div>
                            {/* This is a simple visual representer using SVG */}
                            <svg className="absolute -rotate-90 w-40 h-40">
                                <circle
                                    cx="80" cy="80" r="76"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    strokeDasharray={477}
                                    strokeDashoffset={477 - (477 * occupancyRate) / 100}
                                    className="text-indigo-600"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Booked Beds</span>
                            <span className="font-bold text-slate-700">{data.capacity - data.vacancy}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Vacant Beds</span>
                            <span className="font-bold text-slate-700">{data.vacancy}</span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions or Recent Alerts */}
                <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold mb-2">Owner Quick Actions</h2>
                        <p className="text-sm text-slate-400 mb-8 max-w-md">Manage your mess efficiently. These shortcuts help you perform common tasks quickly.</p>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-white/10 hover:bg-white/20 border border-white/10 p-4 rounded-xl text-left transition group">
                                <Users className="mb-2 text-indigo-400 group-hover:scale-110 transition-transform" />
                                <p className="font-bold">Add Resident</p>
                                <p className="text-xs text-slate-400">Register new student</p>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 border border-white/10 p-4 rounded-xl text-left transition group">
                                <IndianRupee className="mb-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                                <p className="font-bold">Collect Rent</p>
                                <p className="text-xs text-slate-400">Record a payment</p>
                            </button>
                        </div>
                    </div>
                    {/* Decorative Background Shape */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;