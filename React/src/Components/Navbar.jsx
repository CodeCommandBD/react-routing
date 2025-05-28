import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <Outlet></Outlet>
        </nav>
    </div>
  )
}

export default Navbar