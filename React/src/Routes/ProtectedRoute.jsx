import React from 'react'
import { Outlet } from 'react-router';
import SignIn from '../page/SignIn';

const ProtectedRoute = () => {
    const isSignedIn = false;
  return isSignedIn ? <Outlet></Outlet> : <SignIn></SignIn>
}

export default ProtectedRoute