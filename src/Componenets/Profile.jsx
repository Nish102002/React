import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
    
  return (
    <div className='container mt-4'>
        <h3>Profile Component</h3>
      <Link to="user">User Profile </Link>&nbsp;&nbsp;
      <Link to="Admin">Admin Profile </Link>&nbsp;&nbsp;
    

     <Outlet></Outlet>
    </div>
  )
}

export default Profile
