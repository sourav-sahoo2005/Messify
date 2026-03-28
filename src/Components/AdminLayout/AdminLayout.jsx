import axios from 'axios';
import { Layout } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { CircleUserRound, Users, LayoutDashboard, UserRoundPen, LogOut } from 'lucide-react'
import Loding from '../Loding/Loding';
import MessProfile from './MessProfile';
import UsersManager from './UserManager';
import EditProfile from './EditProfile';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router';
import Msgpopup from '../Login/Msgpopup';

const AdminLayout = ({ children }) => {

  const navigate = useNavigate();

  const [profile, setProfile] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [serverMsg, setServerMsg] = useState("");

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
        setServerMsg(response.data.message)
      } catch (error) {
        console.error("Access denied", error);
      }
    };

    fetchData();
  }, []);

  if (!profile) {
    return <Loding />;
  }


  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <MessProfile data={profile} />;
      case 'users':
        return <UsersManager data={profile.customer} setServerMsg={setServerMsg} />;
      case 'dashboard':
        return <Dashboard data={profile} />;
      case 'edit':
        return <EditProfile data={profile} setServerMsg={setServerMsg} />;
      default:
        return <MessProfile data={profile} />;
    }
  };


  const logOut = async function () {

    if (confirm("Are you sure want to logout from your account")) {
      await axios.get('http://localhost:5000/owner/logout');
      localStorage.clear();
      navigate('/');


    }

  }











  return (

    <div className="flex h-screen overflow-hidden bg-gray-100 z-200">
      <Msgpopup
        message={serverMsg}
        onClose={() => setServerMsg("")}
      />
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6  border-b border-slate-800">
          <p className='text-2xl font-bold text-amber-500'>Messify</p>
          <p className='text-xl font-bold'>Admin Panel</p>
          <p className='py-1'>Hello,{` ${profile.owner.name}`}</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div onClick={() => setActiveTab('profile')}
            className={`p-3 ${activeTab === 'profile' ? 'bg-indigo-600' : 'hover:bg-slate-800'} rounded-lg cursor-pointer flex items-center gap-3`}>
            <CircleUserRound />
            <span>Mess Profile</span>
          </div>
          <div onClick={() => setActiveTab('users')}
            className={`p-3 ${activeTab === 'users' ? 'bg-indigo-600' : 'hover:bg-slate-800'} rounded-lg cursor-pointer transition flex items-center gap-3`}>
            <Users />
            <span>Users</span>
          </div>
          <div onClick={() => setActiveTab('dashboard')}
            className={`p-3 ${activeTab === 'dashboard' ? 'bg-indigo-600' : 'hover:bg-slate-800'} rounded-lg cursor-pointer transition flex items-center gap-3`}>
            <LayoutDashboard />
            <span>Dashboard</span>

          </div>

          <div onClick={() => setActiveTab('edit')}
            className={`p-3 ${activeTab === 'edit' ? 'bg-indigo-600' : 'hover:bg-slate-800'} rounded-lg cursor-pointer transition flex items-center gap-3`}>
            <UserRoundPen />
            <span>Edit Profile</span>

          </div>

          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition flex items-center gap-3">
            <LogOut />
            <span onClick={logOut}>Log Out</span>

          </div>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
          Logged in as Admin
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto overflow-x-hidden p-8">
        <div className="max-w-7xl mx-auto">


          <div className="">

            {renderContent()}
          </div>
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;