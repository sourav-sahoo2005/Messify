import axios from 'axios';
import { Layout } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { CircleUserRound, Users, LayoutDashboard, UserRoundPen, CookingPot, LogOut, X, Menu } from 'lucide-react'
import Loding from '../Loding/Loding';
import MessProfile from './MessProfile';
import UsersManager from './UserManager';
import EditProfile from './EditProfile';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router';
import Msgpopup from '../Login/Msgpopup';
import MealTrackingDashboard from './MealTrackingDashboard';
import TrackMeal from './TrackMeal';
import { useLocation, Link } from 'react-router'



const AdminLayout = ({ children }) => {


  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [profile, setProfile] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [serverMsg, setServerMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/owner/dashboard`,
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


  const pathParts = pathname.split('/');
  const currentPath = pathParts[pathParts.length - 1];

  const renderContent = () => {
    switch (currentPath) {
      case 'profile':
        return <MessProfile data={profile} />;
      case 'users-management':
        return <UsersManager data={profile} setServerMsg={setServerMsg} />;
      case 'dashboard':
        return <Dashboard data={profile} />;
      case 'edit-profile':
        return <EditProfile data={profile} setServerMsg={setServerMsg} />;
      case 'track-meal':
        return <TrackMeal />
      default:
        return <MessProfile data={profile} />;
    }
  };


  const logOut = async function () {

    if (confirm("Are you sure want to logout from your account")) {
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/owner/logout`);
      localStorage.clear();
      navigate('/');


    }

  }

  return (

    <div className="flex w-full h-screen overflow-hidden bg-gray-900 z-200">
      <Msgpopup
        message={serverMsg}
        onClose={() => setServerMsg("")}
      />
      <div className="flex w-full h-screen bg-slate-100 overflow-hidden">
        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 ease-in-out transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 shrink-0
      `}>
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <div>
              <p className='text-2xl font-bold text-amber-500'>Messify</p>
              <p className='text-xl font-bold'>Admin Panel</p>
              <p className='py-1 text-sm text-slate-400'>Hello, {profile.owner.name}</p>
            </div>
            {/* Close button for mobile */}
            <button onClick={toggleSidebar} className="lg:hidden p-1">
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
            <NavItem
              active={pathname === '/admin/profile' || pathname === '/admin/profile/'}
              onClick={() => { setActiveTab('profile'); setIsOpen(false); }}
              icon={<CircleUserRound />}
              label="Mess Profile"
              path='/admin/profile'
            />
            <NavItem
              active={pathname.includes('users-management')}
              onClick={() => { setActiveTab('users'); setIsOpen(false); }}
              icon={<Users />}
              label="Users"
              path='/admin/profile/users-management'
            />
            <NavItem
              active={pathname.includes('dashboard')}
              onClick={() => { setActiveTab('dashboard'); setIsOpen(false); }}
              icon={<LayoutDashboard />}
              label="Dashboard"
              path='/admin/profile/dashboard'
            />
            <NavItem
              active={pathname.includes('edit-profile')}
              onClick={() => { setActiveTab('edit'); setIsOpen(false); }}
              icon={<UserRoundPen />}
              label="Edit Profile"
              path='/admin/profile/edit-profile'
            />

            {profile.meal === "yes" && (
              <NavItem
                active={pathname.includes('track-meal')}
                onClick={() => { setActiveTab('meal'); setIsOpen(false); }}
                icon={<CookingPot />}
                label="Track Meal"
                path='/admin/profile/track-meal'
              />
            )}

            <div
              onClick={logOut}
              className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition flex items-center gap-3 mt-auto"
            >
              <LogOut />
              <span>Log Out</span>
            </div>
          </nav>

          <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
            Logged in as Admin
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Mobile Header */}
          <header className="lg:hidden bg-slate-900 border-b p-4 flex items-center justify-between">
            <p className='font-semibold text-amber-500 text-xl'>Messify</p>
            <button onClick={toggleSidebar} className="p-2 text-white">
              <Menu size={28} />
            </button>
          </header>

          <main className="w-full flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>

    </div>
  );
};
const NavItem = ({ icon, label, onClick, active, path }) => (
  <Link
    to={path}
    onClick={onClick}
    className={`p-3 ${active ? 'bg-indigo-600' : 'hover:bg-slate-800'} rounded-lg text-sm cursor-pointer transition flex items-center gap-3`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default AdminLayout;