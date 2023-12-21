import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
const Headers = () => {
    const navItems =
        <>
            <li className='bg-teal-500 rounded-lg'><Link to="/">Home</Link></li>
            <li className='bg-teal-500 rounded-lg'><Link to="">Todos</Link></li>
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
                    <div className="navbar-end">
                        <Link to="" className="px-2 rounded-lg bg-teal-500 text-white py-1 hover:bg-teal-700">Dashboard</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Headers;