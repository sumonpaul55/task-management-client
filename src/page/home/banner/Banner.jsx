import React from 'react';
import "./banner.css"
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className='banner px-1'>
            <div className="container mx-auto">
                <div className='flex justify-center'>
                    <div className="mt-40 md:mt-52 text-center" data-aos="fade-up">
                        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Explore the Power of Our Task Management</h1>
                        <Link to="dashboard">
                            <button className='px-3 w-auto md:px-10 py-1 bg-teal-600 text-white mt-10 md:py-2 text-xl font-semibold hover:bg-teal-800 duration-200'>Explore Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;