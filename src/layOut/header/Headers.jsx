import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { UserContext } from '../../shared/AuthContext';
import { toast } from 'react-toastify';
const Headers = () => {
    const { user } = useContext(UserContext)
    const { logOut } = useContext(UserContext)
    const [showtoggle, setShowtoggle] = useState(false)
    const handleLogout = () => {
        logOut().then(res => {
            res && toast(`You have logedout Successfully`)
        })
    }
    const handleToggle = (e) => {
        e.stopPropagation();
        setShowtoggle(!showtoggle)
    }
    document.body.addEventListener("click", () => {
        setShowtoggle(false)
    })
    const navItems =
        <>
            <li className='bg-teal-500 rounded-lg'><Link to="/">Home</Link></li>
            <li className='bg-teal-500 rounded-lg'><Link to="">Todos</Link></li>
            <li className='bg-teal-500 rounded-lg'><Link to="">About</Link></li>
        </>
    return (
        <nav className='bg-teal-50'>
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-200 py-5 mt-3 z-[1] p-2 shadow rounded-box w-52 gap-5">
                                {navItems}
                            </ul>
                        </div>
                        <Link className='w-40' to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3 text-white font-semibold">
                            {navItems}
                        </ul>
                    </div>
                    {user &&
                        <div className="navbar-end">
                            <Link to="dashboard" className="px-2 rounded-lg bg-teal-500 text-white py-1 hover:bg-teal-700">Dashboard</Link>
                        </div>
                    }

                    {
                        user ? <>
                            <div className='ml-3 relative'>
                                <img onClick={handleToggle} src={user?.photoURL} className='w-16 block cursor-pointer h-12 rounded-full' alt="" referrerPolicy='no-referrer' />
                                {showtoggle &&
                                    <div className='p-4 bg-slate-400 absolute top-16 -left-3'>
                                        <button className='whitespace-nowrap font-bold' onClick={handleLogout}>Log Out</button>
                                    </div>
                                }

                            </div>
                        </> :
                            <Link to="/login" className='mx-3 font-bold bg-teal-500 text-white px-2 py-1 rounded-md'>Login</Link>

                    }
                </div>
            </div>
        </nav>
    );
};

export default Headers;