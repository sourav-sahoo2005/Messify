import axios from 'axios';
import { Layout } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const AdminLayout = ({ children }) => {

  const [profile, setProfile] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5000/owner/dashboard',
          {}, // No body needed for the token!
          { withCredentials: true } // Tells Axios to send the cookie
        );
        // console.log(response.data.profile);
        setProfile(response.data.profile)
      } catch (error) {
        console.error("Access denied", error);
      }
    };

    fetchData();
  }, []);



  console.log(profile)










  return (

    <div className="flex h-screen overflow-hidden bg-gray-100 z-200">
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 text-xl font-bold border-b border-slate-800">
          Admin Panel
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="p-3 bg-indigo-600 rounded-lg cursor-pointer">Dashboard</div>
          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition">Users</div>
          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition">Settings</div>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
          Logged in as Admin
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto overflow-x-hidden p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Main Content Area</h1>
            <p className="text-gray-500 mt-2">The sidebar on the left will stay fixed while you scroll here.</p>
          </header>

          <div className="space-y-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-40 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-400">
                Content Block {i + 1}
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;