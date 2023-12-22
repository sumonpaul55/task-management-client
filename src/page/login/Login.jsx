import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import LoginWithSocialMedia from '../../shared/LoginWithSocialMedia'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../shared/AuthContext'
import { toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const { logIn } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        logIn(data.email, data.password)
            .then(res => {
                res && toast(`Welcome Back`)
                navigate("/")
            }).catch(err => {
                toast(err)
            })
    }

    return (
        <>
            <div className='py-10 md:py-16 bg-black text-white'>
                <h1 className='text-center font-bold text-xl md:text-2xl lg:text-4xl text-white'>Login</h1>
            </div>
            <div className='bg-slate-200 p-9 max-w-[600px] mx-auto my-6 md:my-32 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 gap-5'>
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
                    </div>
                    <div className='text-center'>
                        <input type="submit" className='py-1 px-3 bg-teal-500 mt-7 md:px-10 text-white cursor-pointer rounded-md' />
                    </div>
                </form>
                <p className='mt-4'>Are you new here? Please <Link to="/register" className='text-teal-600 font-bold mt-5'>Register</Link></p>
                <div className='mt-20'>

                    <p className='font-semibold md:text-xl mb-4'>Login with the following social midea</p>
                    <LoginWithSocialMedia></LoginWithSocialMedia>
                </div>
            </div>
        </>

    )
}

export default Login