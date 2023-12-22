import React, { useContext } from 'react'
import { UserContext } from '../../../shared/AuthContext'

function Profile() {
    const { user } = useContext(UserContext)
    return (
        <div>
            {
                user && <div className='text-center'>
                    <img src={user?.photoURL} alt="" className='mx-auto w-40 h-40 rounded-full' />
                    <h2 className='mt-3'>Name: <span className='font-bold'>{user?.displayName}</span></h2>
                    <h2 className='mt-3'>Email: <span className='font-bold'>{user?.email}</span></h2>
                </div>
            }
        </div>
    )
}

export default Profile