import React, { useState } from 'react'

const SignIn = () => {

    let [form, setForm] = useState('')


    const emailHandle = () => {

    }
    const passHandle = () => {

    }

    const submitHandle =(e) => {
        e.preventDefault()
    }


  return (
    <div>
        <form onSubmit={submitHandle}>
            <input onChange={emailHandle} type="email" placeholder='enter your email'/>
            <input onChange={passHandle} type="password" placeholder='password' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignIn