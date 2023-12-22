import React from 'react'
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { FaArrowsToDot } from "react-icons/fa6";
import { MdOutlineLabelImportant } from "react-icons/md";
import { BiAccessibility } from "react-icons/bi";

function Benifites() {
    return (
        <section className='py-32'>
            <div className="container mx-auto">
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Type of todos</h1>
                <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    <div data-aos="fade-up" className='border p-3 rounded-md text-center flex flex-col items-center bg-slate-100 hover:scale-105 duration-200'>
                        <FaArrowsTurnToDots size={40} color='indigo' />
                        <h2 className='font-bold text-xl md:text-2xl mt-4'>Add Todos</h2>
                        <p className='mt-4'>You will be able to add your regular task for later do. You will be able to add your tasks deadlines. which will help to to do this work.</p>
                    </div>

                    <div data-aos="fade-up" className='border p-3 rounded-md text-center flex flex-col items-center bg-slate-100 hover:scale-105 duration-200'>
                        <FaArrowsToDot size={40} color='indigo' />
                        <h2 className='font-bold text-xl md:text-2xl mt-4'>Low Priority</h2>
                        <p className='mt-4'>Effective management of low-priority tasks involves balancing your workload, allocating time wisely, and ensuring that important but less urgent activities do not fall through the cracks. </p>
                    </div>
                    <div data-aos="fade-up" className='border p-3 rounded-md text-center flex flex-col items-center bg-slate-100 hover:scale-105 duration-200'>
                        <MdOutlineLabelImportant size={40} color='indigo' />
                        <h2 className='font-bold text-xl md:text-2xl mt-4'>High Priority</h2>
                        <p className='mt-4'>time-sensitive activities are completed. Tackling low-priority tasks is essential for maintaining overall productivity and preventing them from accumulating into more significant challenges. </p>
                    </div>
                    <div data-aos="fade-up" className='border p-3 rounded-md text-center flex flex-col items-center bg-slate-100 hover:scale-105 duration-200'>
                        <BiAccessibility size={40} color='indigo' />
                        <h2 className='font-bold text-xl md:text-2xl mt-4'>Moderate Priority</h2>
                        <p className='mt-4'>management of low-priority tasks involves balancing your workload, allocating time wisely, and ensuring that important but less urgent activities do not fall </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benifites