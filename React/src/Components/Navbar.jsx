import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between px-10 py-6 bg-emerald-400'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
        </nav>
            <Outlet></Outlet>
    </div>
  )
}

export default Navbar