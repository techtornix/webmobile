import React from 'react'
import { Link, Outlet } from 'react-router'
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
       <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/setting">Setting</Link>
        <Outlet/>
    </div>
  )
}

export default Dashboard
