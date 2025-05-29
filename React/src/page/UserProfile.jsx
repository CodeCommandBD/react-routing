import React from 'react'
import { useLocation } from 'react-router'

const UserProfile = () => {

   const {state} = useLocation()

  return (
    <div className='w-[40%] h-fit p-8 m-auto my-8 shadow-lg'>
        <div className=''>
            <h1 className='text-4xl font-bold mb-5'>User Profile</h1>
            <h4 className='text-xl'>Name: {state.name}</h4>
            <h4 className='text-xl'>Email: {state.email}</h4>
            <h4 className='text-xl'>Address: {state.address}</h4>
        </div>
    </div>
  )
}

export default UserProfile