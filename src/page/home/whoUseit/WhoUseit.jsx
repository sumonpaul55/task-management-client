import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxios from '../../../hooks/useAxios'
import "./whouse.css"
function WhoUseit() {
    const axiosPublic = useAxios()
    const { data: user } = useQuery({
        queryKey: ["usersType"],
        queryFn: async () => {
            const users = await axiosPublic.get("/allusers")
            return users.data
        }
    })
    // console.log(user)


    return (
        <section className='bg-gray-300 py-16 md:py-32 whouse px-1'>
            <div className="container mx-auto px-1 text-white">
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl border-b w-fit pb-3'>Who Use This</h1>
                <p>Which type of people use this and benifitted</p>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                    {
                        user?.slice(0, 8).map((items, idx) => (
                            <div key={idx} data-aos="fade-up" className='border p-5 rounded-md bg-teal-50 text-black space-y-2 hover:scale-110 duration-200'>
                                <h2 className='font-bold text-xl'>{items.name}</h2>
                                <h2 className='font-semibold'>Profession: <span className='text-pink-600'>{items.profession}</span></h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WhoUseit