import React from 'react'

const UserProfile = () => {
  return (
    <div className='w-[40%] h-fit p-8 m-auto my-8 shadow-lg'>
        <div className=''>
            <h1 className='text-4xl font-bold mb-5'>User Profile</h1>
            <h4 className='text-2xl'>Name: </h4>
            <h4 className='text-2xl'>Email: </h4>
            <h4 className='text-2xl'>Address: </h4>
        </div>
    </div>
  )
}

export default UserProfile