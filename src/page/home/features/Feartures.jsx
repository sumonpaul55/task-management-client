import React from 'react'

function Feartures() {
    return (
        <section className='py-32 bg-slate-200 px-2'>
            <div className="container mx-auto">
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl md:mx-20'>Key Features</h1>
                <div className=' mt-10 md:mx-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                        <div className='bg-white py-7 rounded-md p-5' data-aos="fade-right">
                            <h2 className='font-bold text-xl'>Streamlined and user-friendly </h2>
                            <p className='mt-6'>streamlined and user-friendly task creation, were emphasizing the design and functionality of the task creation process to ensure it is intuitive, efficient, and pleasant for the user. Heres a more detailed description</p>
                        </div>
                        <div className='bg-white py-7 rounded-md p-5' data-aos="fade-left">
                            <h2 className='font-bold text-xl'>Cross-Platform Accessibility</h2>
                            <p className='mt-6'>streamlined and user-friendly task creation, were emphasizing the design and functionality of the task creation process to ensure it is intuitive, efficient, and pleasant for the user. Heres a more detailed description</p>
                        </div>
                    </div>
                    <div className='bg-white py-7 rounded-md p-5 mt-10' data-aos="fade-up">
                        <h2 className='font-bold text-xl'>Cross-Platform Accessibility</h2>
                        <p className='mt-6'>streamlined and user-friendly task creation, were emphasizing the design and functionality of the task creation process to ensure it is intuitive, efficient, and pleasant for the user. Heres a more detailed description</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Feartures