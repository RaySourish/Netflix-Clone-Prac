import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();
  return (

    <div className="flex justify-between item-center absolute  z-[100] w-full  p-6">
      <Link to='/prac'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'  >
          NETFLIX
        </h1>
      </Link>
    <div>
        <button className="text-white rounded p-2 m-2">Signin</button>
        <button className="text-white bg-red-600 p-2  rounded m-2">Signup</button>
    </div>
    </div>
  )
}
