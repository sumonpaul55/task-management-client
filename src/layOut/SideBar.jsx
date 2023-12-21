import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="addTodos">Add todos</Link>
            <Link to="mytodos">My todos</Link>
            <Link to="allUsers">All users</Link>
        </div >
    );
};

export default SideBar;