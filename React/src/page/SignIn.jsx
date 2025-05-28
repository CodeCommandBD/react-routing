import React, { useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }
    const passHandle = (e) => {
        setPassword(e.target.value)
    }

    const submitHandle =(e) => {
        e.preventDefault()
        console.log(email);
        console.log(password);
        
    }


  return (
    <div>
        <h1>Sign In</h1>
        <form onSubmit={submitHandle}>
            <input onChange={emailHandle} type="email" placeholder='enter your email'/>
            <input onChange={passHandle} type="password" placeholder='password' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignIn