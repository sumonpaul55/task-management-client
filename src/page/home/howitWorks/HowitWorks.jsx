import React from 'react'
import login from '../../../assets/login.jpg'
import dashboard from "../../../assets/dashboard.jpg"
function HowitWorks() {
    return (
        <section className='py-32 bg-slate-200 px-2'>
            <div className="container max-w-[1000px] mx-auto">
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl border-b w-fit pb-3'>How It Works </h1>
                <div className='mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9 items-center'>
                        <div data-aos="fade-right">
                            <img src={login} alt="" className='rounded-md' />
                        </div>
                        <div className='' data-aos="fade-left">
                            <h2 className='text-xl font-bold md:text-2xl lg:text-4xl'>Login</h2>
                            <p className='text-xl leading-10'>First You have to login there is a 2 way of login system. You can login with google facebook and with your google account. And the other way is You will be able to register</p>
                        </div>
                    </div>
                </div>
                <div className='mt-32'>
                    <div className='grid grid-cols-1 justify-center md:grid-cols-2 gap-5 md:gap-9 items-center'>
                        <div className='' data-aos="fade-right">
                            <h2 className='text-xl font-bold md:text-2xl lg:text-4xl'>Explore Dashboarde</h2>
                            <p className='mt-5 text-xl leading-10'>First You have to login there is a 2 way of login system. You can login with google facebook and with your google account. And the other way is You will be able to register</p>
                        </div>
                        <div data-aos="fade-left" className='overflow-hidden'>
                            <img src={dashboard} alt="" className='m-2 rounded-md' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HowitWorks