import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Link to="/" className='bg-slate-400 px-2 py-2'>Home</Link>
            <Link to="profile" className='bg-slate-500 rounded-md px-2 py-2'>Profile</Link>
            <Link to="addTodos" className='bg-slate-500 rounded-md px-2 py-2'>Add todos</Link>
            <Link to="mytodos" className='bg-slate-500 rounded-md px-2 py-2'>My todos</Link>
            <Link to="allUsers" className='bg-slate-500 rounded-md px-2 py-2'>All users</Link>
        </div >
    );
};

export default SideBar;