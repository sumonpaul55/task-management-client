import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { toast } from 'react-toastify';
import MyHelmet from '../../shared/MyHelmet';
import Loading from '../../shared/Loading';
import LoginWithSocialMedia from '../../shared/LoginWithSocialMedia';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../shared/AuthContext';
import { updateProfile } from 'firebase/auth';
import useAxios from '../../hooks/useAxios';

const imageAPI = import.meta.env.VITE_IMAGEAPI
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageAPI}`

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const [processing, setProcessing] = useState(false)
    const { register: registerNow } = useContext(UserContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const location = useLocation()
    const axiosPublic = useAxios();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const imagefile = data.image[0]
        const name = data.name;
        const email = data.email
        const password = data.password
        const profession = data.profession

        const formData = new FormData()
        formData.append("key", imageAPI)
        formData.append("image", imagefile)
        try {
            setProcessing(true)
            const imgureResponse = await axios.post(image_hosting_api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            if (imgureResponse.data.data.url) {
                const photoUrl = imgureResponse.data.data.url
                const userInfo = {
                    name, email, photoUrl, profession
                }
                registerNow(email, password)
                    .then(res => {
                        // console.log(res)
                        const user = res.user;
                        updateProfile(user, {
                            displayName: name,
                            photoURL: photoUrl
                        })
                        axiosPublic.post("/login", userInfo)
                            .then(res => {
                                res && toast(`welcome ${name}`)

                            }).catch(err => {
                                toast(err)
                            })
                        navigate(location?.state ? location.state : "/")
                    }).catch(error => {
                        // console.log(error)
                        toast(error)
                    })

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
        reset()
    }
    return (
        <>
            <MyHelmet title="Register"></MyHelmet>
            <main className='min-h-screen'>
                <section className='bg-black py-16 loginbg'>
                    <h1 className='text-center font-bold text-xl md:text-2xl lg:text-4xl text-white'>Register</h1>
                </section>
                <div className="container mx-auto">
                    <div className='max-w-[700px] mx-auto mt-20 bg-slate-200 p-4 rounded-md mb-10'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div>
                                    <input  {...register("name", { required: true })}
                                        placeholder='Your name' className='outline-none rounded-md py-1 px-2 w-full' />

                                    {errors.name?.type === "required" && (
                                        <p role="alert" className='text-red-500'>name is required</p>
                                    )}
                                </div>
                                <div>
                                    <input  {...register("profession", { required: true })}
                                        placeholder='profession' className='outline-none rounded-md py-1 px-2 w-full' />

                                    {errors.profession?.type === "required" && (
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
                        <p className='mt-4'>Do you have already account? Please <Link to="/login" className='text-teal-600 font-bold mt-5'>Login</Link></p>
                        <div className='mt-20'>
                            <p className='font-semibold md:text-xl mb-4'>Login with the following social midea</p>
                            <LoginWithSocialMedia></LoginWithSocialMedia>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Register;