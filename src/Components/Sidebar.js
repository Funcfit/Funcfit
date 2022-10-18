import React from 'react'
import {Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" h-screen w-80 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white shadow-2xl">
      <div className="flex justify-between items-center">
        <Link to="/home"  className="items-center gap-3 ml-16 mt-7 flex text-xl font-extrabold tracking-tight text-black">
              <span >Funcfit</span>
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-20 font-extrabold tracking-tight text-black">
          <div className='font-extrabold text-xs ml-4'>
            <h1>Menu</h1>
          </div>
          <Link to="/home"  className="ml-8">
            <span >Home</span>
          </Link>
          <Link to="home"  className="ml-8">
            <span >Daily Routine</span>
          </Link>
          <Link to="home"  className="ml-8">
            <span >Instructor</span>
          </Link>
      </div>

      <div className="flex flex-col gap-3 mt-12 font-extrabold tracking-tight text-black">
          <div className='font-extrabold text-xs ml-4'>
            <h1>Scheduled Events</h1>
          </div>
          <Link to="home"  className="ml-8">
            <span >Cardio Wrokout</span>
          </Link>
          <Link to="home"  className="ml-8">
            <span >Legs Workout</span>
          </Link>
      </div>
      
    </div>
  )
}

export default Sidebar