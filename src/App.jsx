import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Routes, Route } from 'react-router'
import Faq from './Components/Faq/Faq'
import About from './Components/AboutUs/About'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import ScrollTop from './Components/ScrollTop/ScrollTop'
import Loading from './Components/Loding/Loding'
import FindMess from './Components/FindMess/FindMess'
import MessDetails from './Components/MessDetails/MessDetails'
import AdminLayout from './Components/AdminLayout/AdminLayout'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import UnderDevelope from './Components/ErrorPage/UnderDevelope';
import MealTrackingDashboard from './Components/AdminLayout/MealTrackingDashboard';
import InternalServerError from './Components/ErrorPage/InternalServerError';


const App = () => {
  axios.defaults.withCredentials = true;  // This applies to ALL axios calls
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const onLoad = () => {
      console.log('Page is fully loaded');
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return isLoading ? <Loading /> : (
    <>

      <ScrollTop />

      <Navbar />
      <Routes>

        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<FindMess />} />
        <Route path='/mess/:id' element={<MessDetails />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/admin/profile/*' element={<AdminLayout />} />
          <Route path='/:messingId/messing-dashboard' element={<MealTrackingDashboard />} />
        </Route>
        <Route path='/error' element={<InternalServerError />} />

      </Routes >
      <Footer />
    </>
  )
}

export default App
