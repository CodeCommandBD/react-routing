import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }
    const passHandle = (e) => {
        setPassword(e.target.value)
    }

    const submitHandle =(e) => {
        e.preventDefault()
        const user= {
            name: 'shantokumar',
            email:'shantokumar@gmail.com',
            address:'Dhaka'
        }
        if(email === 'shantokumar@gmail.com' && password === '123'){
            navigate('/dashboard/user/profile', {state: user})
        }else{
            alert('email or password invalid')
        }
    }


  return (
    <div className='w-[30%] h-fit p-4 m-auto text-center shadow-2xl my-8 rounded-2xl'>
        <h1 className='text-3xl font-extrabold'>Sign In</h1>
        <form onSubmit={submitHandle} className='flex flex-col gap-4 my-6'>
            <input className='text-lg border rounded-2xl p-2' onChange={emailHandle} type="email" placeholder='enter your email'/>
            <input className='text-lg border rounded-2xl p-2' onChange={passHandle} type="password" placeholder='password' />
            <button className='bg-cyan-700 p-3 text-white text-lg font-bold rounded-2xl' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignIn