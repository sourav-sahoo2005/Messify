import React, { useState } from 'react';
import { X, Search, CheckSquare, Square, UserPlus } from 'lucide-react';
import axios from 'axios';

const MakeManagerPopup = ({ isOpen, onClose, customers, fetchUsers }) => {




    const [selectedIds, setSelectedIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    if (!isOpen) return null;

    // Filter list based on search
    const filteredCustomers = customers.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const toggleSelect = (id) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };
    console.log(selectedIds);

    const toggleSelectAll = () => {
        if (selectedIds.length === filteredCustomers.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredCustomers.map(c => c.id));
        }
    };

    const makeManager = async function () {
        console.log(selectedIds);

        const response = await axios.post('http://localhost:5000/owner/make-manager', { managerIds: selectedIds, customerIds: filteredCustomers.map(c => c._id) }, { withCredentials: true });
        console.log(response.data);
        if (response.status === 200) {

            onClose();
            fetchUsers();

        }
    }

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Select Managers</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search customers..."
                            className="w-full pl-10 pr-4 py-2 text-black bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Selection Stats & Select All */}
                <div className="px-6 py-2 flex justify-between items-center bg-orange-50 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>{selectedIds.length} Selected</span>
                    <button onClick={toggleSelectAll} className="hover:underline">
                        {selectedIds.length === filteredCustomers.length ? 'Deselect All' : 'Select All'}
                    </button>
                </div>

                {/* Scrollable List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-1">
                    {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer) => (
                            <div
                                key={customer._id}
                                onClick={() => toggleSelect(customer._id)}
                                className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all ${selectedIds.includes(customer._id)
                                    ? 'bg-orange-500 text-white shadow-md'
                                    : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                            >
                                <span className="font-semibold">{customer.name}</span>
                                {selectedIds.includes(customer._id) ? <CheckSquare size={20} /> : <Square size={20} className="text-gray-300" />}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 py-10">No members found.</p>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setSelectedIds([])}
                        className="py-3 rounded-xl border border-gray-200 font-semibold text-gray-500 hover:bg-gray-50"
                    >
                        Clear All
                    </button>
                    <button
                        disabled={selectedIds.length === 0}
                        onClick={makeManager}
                        className={`py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition ${selectedIds.length > 0
                            ? 'bg-orange-600 text-white hover:bg-orange-700'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        <UserPlus size={18} />
                        <span>Confirm</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MakeManagerPopup;