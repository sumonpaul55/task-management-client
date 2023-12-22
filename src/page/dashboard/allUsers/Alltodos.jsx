import React, { useContext } from 'react'
import { UserContext } from '../../../shared/AuthContext'
import { useQuery } from '@tanstack/react-query'
import useAxios from '../../../hooks/useAxios'
import empty from '../../../assets/empty.png'
import Loading from '../../../shared/Loading'
import { FaTrash } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
function Alltodos() {
    const { user } = useContext(UserContext)
    const axiosPublic = useAxios()
    const { data: todoList, isLoading, refetch } = useQuery({
        queryKey: ['mytodoList', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myTodoslist?email=${user?.email}`)
            return await res.data
        }
    })
    // console.log(todoList)

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
    // update todos

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            {
                todoList?.length < 1 ? <div className='mt-32 text-center text-xl md:text-2xl font-bold lg:text-3xl'>
                    <h1 className=''>You do not have any todos.</h1>
                    <img src={empty} alt="" className='mx-auto mt-5 md:w-1/4' />
                </div> :
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <h1 className='text-xl mb-5 md:text-2xl font-semibold'>My all todos</h1>
                            {
                                todoList?.map((items, idx) => (
                                    <div key={idx} className='border p-2 rounded-md bg-white relative my-4'>
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
                                                <Link to={``}>
                                                    <button className='hover:text-red-600'>
                                                        <FaEdit />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            {
                                user && <div className='text-center'>
                                    <img src={user?.photoURL} alt="" className='mx-auto w-40 h-40 rounded-full' />
                                    <h2 className='mt-3'>Name: <span className='font-bold'>{user?.displayName}</span></h2>
                                    <h2 className='mt-3'>Email: <span className='font-bold'>{user?.email}</span></h2>
                                    <h2 className='text-xl mt-4 font-bold text-teal-500 p-2 border'>Total Task: {todoList.length}</h2>
                                </div>
                            }
                        </div>

                    </div>
            }
        </>
    )
}

export default Alltodos 