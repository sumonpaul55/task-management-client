import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import useAxios from '../../../hooks/useAxios'
import { toast } from 'react-toastify'
import { UserContext } from '../../../shared/AuthContext'

function AddTodos() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const axiosPublic = useAxios()
    const { user } = useContext(UserContext)

    const onSubmit = async (data) => {
        const todos = { ...data, email: user?.email }
        axiosPublic.post("/add-todos", todos)
            .then(res => {
                if (res.data.insertedId) {
                    toast(`Your todos added to list`)
                }
            }).catch(err => {
                toast(err)
            })
        reset()
    }
    return (
        <main>
            <div className='max-w-[800px] mx-auto bg-slate-50 p-5 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div>
                        <input  {...register("title", { required: true })}
                            placeholder='Your title' className='outline-none rounded-md py-1 px-2 w-full' />
                        {errors.title?.type === "required" && (
                            <p role="alert" className='text-red-500'>title is required</p>
                        )}
                    </div>
                    <div>
                        <input  {...register("description", { required: true })}
                            placeholder='Your description' className='outline-none rounded-md py-1 px-2 w-full' />
                        {errors.description?.type === "required" && (
                            <p role="alert" className='text-red-500'>description is required</p>
                        )}
                    </div>
                    <div>
                        <input type='date' {...register("date", { required: true })}
                            placeholder='Deadlines' className='outline-none rounded-md py-1 px-2 w-full' />
                        {errors.description?.type === "required" && (
                            <p role="alert" className='text-red-500'>Deadlines is required</p>
                        )}
                    </div>
                    <div>
                        <select {...register("priority", { required: true })} className='outline-none border rounded-md py-1 px-2 w-full'>
                            <option value="low">Low</option>
                            <option value="high">High</option>
                            <option value="moderate">Moderate</option>
                        </select>
                        {errors.priority?.type === "required" && (
                            <p role="alert" className='text-red-500'>priority is required</p>
                        )}
                    </div>
                    <div className='text-center'>
                        <input type="submit" value="Add Todos" className='py-1 px-3 bg-teal-500 mt-7 md:px-10 text-white cursor-pointer rounded-md' />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddTodos