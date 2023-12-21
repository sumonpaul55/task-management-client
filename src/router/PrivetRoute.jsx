// import React from 'react';
// import useAuth from '../hook/useAuth';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../shared/Loading';

// const PrivateRoute = ({ children }) => {
//     const navigate = useNavigate()
//     const { user, loading } = useAuth()
//     const location = useLocation();
//     if (loading) {
//         return <Loading></Loading>
//     }
//     if (user && !loading) {
//         return children
//     }
//     return navigate(location.pathname ? location.pathname : "/")
// };

// export default PrivateRoute;