import React from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
    
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
        
        return <Navigate to="/login" replace />;
    }

    // If authenticated, render the child routes (the "Outlet")
    return <Outlet />;
};

export default ProtectedRoute;