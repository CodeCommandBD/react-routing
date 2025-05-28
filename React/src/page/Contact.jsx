import React from 'react'

import {useNavigate} from 'react-router-dom'
const Contact = () => {

  let navigate = useNavigate()

  const handle = () => {
      navigate('/')
  }

  return (
    <div>
        <h1>contact</h1>
        <button onClick={handle} className='p-3 bg-fuchsia-400 rounded-lg text-white cursor-pointer'>go back Home</button>
    </div>
  )
}

export default Contact