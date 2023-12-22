import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading';
import { UserContext } from '../shared/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext)
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user && !loading) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;