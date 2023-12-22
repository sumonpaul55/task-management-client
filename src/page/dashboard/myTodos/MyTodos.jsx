import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import useAxios from '../../../hooks/useAxios'
import { UserContext } from '../../../shared/AuthContext'
import Loading from '../../../shared/Loading'
// import { toast } from 'react-toastify'
import empty from '../../../assets/empty.png'
function MyTodos() {
    const { user } = useContext(UserContext)
    const axiosPublic = useAxios()
    const { data: todos, isLoading } = useQuery({
        queryKey: ['myTodos', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myTodos?email=${user?.email}`)
            return await res.data
        }
    })
    // console.log(todos)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-xl font-bold md:text-3xl'>My Todos</h1>
            {
                todos.length < 1 && <div className='mt-32 text-center text-xl md:text-2xl font-bold lg:text-3xl'>
                    <h1 className=''>You do not have any todos.</h1>
                    <img src={empty} alt="" className='mx-auto mt-5 md:w-1/4' />
                </div>
            }
        </div>
    )
}

export default MyTodos