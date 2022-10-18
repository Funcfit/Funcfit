import React from 'react'
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-black w-screen h-20 bg-white font-extrabold'>
      <div className='ml-16'>
        <Link to="/"  className="">
          <span >Exercise</span>
        </Link>
        <Link to="/home"  className="pl-6">
          <span >Food Plan</span>
        </Link>
      </div>
      <div className='mr-8'>
        <Link to="/home"  className="">
          <span >Profile</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar