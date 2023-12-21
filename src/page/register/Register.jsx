import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { toast } from 'react-toastify';
import MyHelmet from '../../shared/MyHelmet';
import Loading from '../../shared/Loading';

const imageAPI = import.meta.env.VITE_IMAGEAPI
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageAPI}`

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const [processing, setProcessing] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const imagefile = data.image[0]
        const name = data.name;
        const email = data.email
        const password = data.password

        const formData = new FormData()
        formData.append("key", imageAPI)
        formData.append("image", imagefile)
        try {
            setProcessing(true)
            const imgureResponse = await axios.post(image_hosting_api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            if (imgureResponse.data.data.url) {
                setProcessing(false)
                toast(`You have succefully registered ${name}`, {
                    autoClose: 2000,
                    position: "bottom-right"
                })
            }
        } catch (err) {
            toast(`${err}`, {
                icon: "errors",
                autoClose: 2000,
                position: 'bottom-right'
            })
        }


    }
    return (
        <>
            <MyHelmet title="Register"></MyHelmet>
            <main className='min-h-screen'>
                <section className='bg-black py-16 loginbg'>
                    <h1 className='text-center font-bold text-xl md:text-2xl lg:text-4xl text-white'>Register</h1>
                </section>
                <div className="container mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[700px] mx-auto mt-20 bg-slate-300 p-4 rounded-md'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <input  {...register("name", { required: true })}
                                    placeholder='Your name' className='outline-none rounded-md py-1 px-2 w-full' />

                                {errors.name?.type === "required" && (
                                    <p role="alert" className='text-red-500'>name is required</p>
                                )}
                            </div>
                            <div>
                                <input {...register("email", { required: true })} type='email' placeholder='Your email' className='outline-none rounded-md py-1 px-2 w-full' />
                                {errors.email?.type === "required" && (
                                    <p role="alert" className='text-red-500'>email is required</p>
                                )}
                            </div>

                            <div className='relative'>
                                <input {...register("password", { required: true })} type={showPass ? "text" : "password"} placeholder='Your Password' className='outline-none rounded-md py-1 px-2 w-full' />
                                {errors.email?.type === "required" && (
                                    <p role="alert" className='text-red-500'>Password is required</p>
                                )}
                                {
                                    showPass ?
                                        <button className='absolute top-2 right-2' onClick={() => setShowPass(!showPass)}>
                                            <FaEye size={16} />
                                        </button> :
                                        <button className='absolute top-2 right-2' onClick={() => setShowPass(!showPass)}>
                                            <FaEyeSlash size={16} />
                                        </button>

                                }
                            </div>
                            <div>
                                <input type="file" {...register("image", { required: true })} className='outline-none rounded-md py-1 px-2 w-full' />
                                {errors.image?.type === "required" && (
                                    <p role="alert" className='text-red-500'>Image is required</p>
                                )}
                            </div>
                        </div>
                        <div className='text-center'>
                            <input type="submit" className='py-1 px-3 bg-teal-500 mt-7 md:px-10 text-white cursor-pointer rounded-md' />
                        </div>
                    </form>
                    {
                        processing && <Loading></Loading>
                    }
                </div>
            </main>
        </>
    );
};

export default Register;