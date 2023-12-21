import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        <>
            <div className='flex gap-4'>
                <div className='w-1/5 bg-slate-600 text-white font font-semibold min-h-screen  p-8'>
                    <SideBar></SideBar>
                </div>
                <div className='w-4/5 p-8 text-xl'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;