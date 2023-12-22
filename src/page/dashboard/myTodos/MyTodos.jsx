import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import useAxios from '../../../hooks/useAxios'
import { UserContext } from '../../../shared/AuthContext'
import Loading from '../../../shared/Loading'
// import { toast } from 'react-toastify'
import empty from '../../../assets/empty.png'
import { MdOutlineUpdateDisabled } from "react-icons/md";

import { FaTrash } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { DragDropContext } from 'react-beautiful-dnd'



function MyTodos() {

    const { user } = useContext(UserContext)
    const axiosPublic = useAxios()
    const { data: todos, isLoading, refetch } = useQuery({
        queryKey: ['myTodos', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myTodos?email=${user?.email}`)
            return await res.data
        }
    })
    const handleDelete = (item) => {
        // console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/deletetodos/${item._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }
    // update data
    const handleUpdate = (item) => {
        // console.log(item)
        Swal.fire({
            title: "Is it completed or not",
            text: "Let's make it completed or ongoing",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update"
        }).then((result) => {
            if (result.isConfirmed) {
                if (item.status === "ongoing") {
                    axiosPublic.put(`/updatetask/${item._id}`, { status: "completed" })
                        .then(res => {
                            // console.log(res.data)
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    title: "Task Updated!",
                                    text: "Very good you have completed it.",
                                    icon: "success"
                                });
                            }
                            refetch()
                        })
                }
                if (item.status === "completed") {
                    axiosPublic.put(`/updatetask/${item._id}`, { status: "ongoing" })
                        .then(res => {
                            // console.log(res.data)
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    title: "Task Updated!",
                                    text: "Very good you have completed it.",
                                    icon: "success"
                                });
                            }
                            refetch()
                        })
                }

            }
        });
    }
    // console.log(todos)
    refetch()
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-xl font-bold md:text-3xl'>My Todos</h1>
            <div className='mt-10 bg-slate-100 p-3'>
                {
                    todos.length < 1 ? <div className='mt-32 text-center text-xl md:text-2xl font-bold lg:text-3xl'>
                        <h1 className=''>You do not have any todos.</h1>
                        <img src={empty} alt="" className='mx-auto mt-5 md:w-1/4' />
                    </div> :
                        <DragDropContext>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <h1 className='text-xl mb-5 md:text-2xl font-semibold'>Ongoing task</h1>
                                    {
                                        todos?.map((items, idx) => (
                                            items.status === "ongoing" &&
                                            <div key={idx} className='border p-2 rounded-md bg-white relative my-2'>

                                                <div>
                                                    <h2 className='font-bold'>{items?.title}</h2>
                                                    <div className='flex gap-3 items-center'>
                                                        <span className='font-semibold text-sm text-teal-600'>status: {items.status}</span>/
                                                        <p className='font-semibold text-sm'>Deadlines: <span className='text-pink-500'>{items?.date}</span></p>
                                                        /<p className='font-semibold text-sm'>Priority: <span className='text-pink-500'>{items?.priority}</span></p>
                                                    </div>
                                                    <div className='absolute top-0 justify-between py-2 right-3 flex flex-col gap-3 h-full'>
                                                        <button className='hover:text-red-600' onClick={() => handleDelete(items)}>
                                                            <FaTrash />
                                                        </button>
                                                        <button className='hover:text-red-600' onClick={() => handleUpdate(items)}>
                                                            <MdOutlineUpdateDisabled />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h1 className='text-xl mb-5 md:text-2xl font-semibold'>Completed task</h1>
                                    {
                                        todos?.map((items, idx) => (
                                            items.status === "completed" && <div key={idx} className='border my-2 p-2 rounded-md bg-red-100 relative'>
                                                <h2 className='font-bold'>{items?.title}</h2>
                                                <div className='flex gap-3 items-center'>
                                                    <span className='font-semibold text-sm text-teal-600'>status: {items.status}</span>/
                                                    <p className='font-semibold text-sm'>Deadlines: <span className='text-pink-500'>{items?.date}</span></p>
                                                    /<p className='font-semibold text-sm'>Priority: <span className='text-pink-500'>{items?.priority}</span></p>
                                                </div>
                                                <div className='absolute top-0 justify-between py-2 right-3 flex flex-col gap-3 h-full'>
                                                    <button className='hover:text-red-600' onClick={() => handleDelete(items)}>
                                                        <FaTrash />
                                                    </button>
                                                    <button className='hover:text-red-600' onClick={() => handleUpdate(items)}>
                                                        <MdOutlineUpdateDisabled />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </DragDropContext>
                }
            </div>
        </div >
    )
}

export default MyTodos