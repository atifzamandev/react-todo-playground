import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import NavBar from './NavBar'

const PrivateRoute = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to='/login' />

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default PrivateRoute
