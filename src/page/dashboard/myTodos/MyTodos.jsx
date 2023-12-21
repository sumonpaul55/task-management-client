import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import useAxios from '../../../hooks/useAxios'
import { UserContext } from '../../../shared/AuthContext'
// import { toast } from 'react-toastify'

function MyTodos() {
    const { user } = useContext(UserContext)
    const axiosPublic = useAxios()
    const { data: todos } = useQuery({
        queryKey: ['myTodos', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/myTodos?key=${user?.email}`)
            return res.data
        }
    })
    console.log(todos)
    return (
        <div>
            <h1 className='text-xl font-bold md:text-3xl'>My Todos</h1>
        </div>
    )
}

export default MyTodos