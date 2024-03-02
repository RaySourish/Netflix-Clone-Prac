import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/Authcontext';

export const Navbar = () => {

  const {user,logOut} = UserAuth()


  
  console.log(user?.email)

  const handleLogout = async () => {
    console.log('here')
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };


  const navigate = useNavigate();
  return (

    <div className="flex justify-between item-center absolute  z-[100] w-full  p-6">
      <Link to='/prac'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'  >
          NETFLIX
        </h1>
      </Link>
    <div>
      {user?.email?(
        <>
            <Link to='/'>
            <button  className="text-white rounded p-2 m-2">Account</button>
            </Link>
        <Link to='/signup'>
        <button onClick={handleLogout} className="text-white bg-red-600 p-2  rounded m-2">Logout</button>
        </Link>
        </>
      ):(
        <>
        <Link to='/login'>
        <button className="text-white rounded p-2 m-2">Signin</button>
        </Link>
        <Link to='/signup'>
        <button className="text-white bg-red-600 p-2  rounded m-2">Signup</button>
        </Link>
        </>
      )}

    </div>
    </div>
  )
}
