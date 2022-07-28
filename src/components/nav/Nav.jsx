import React from 'react'
import {Link} from 'react-router-dom'
export const Nav = () => {
  return (
    <div className=' w-full h-12 justify-items-center flex justify-between bg-slate-800 text-white'>
    <span className='text-2x1 ml-5'>John</span>
    <span className=' text-4xl '>Square Game</span>
    <button className='text-2x1 mr-5'><Link to={"/auth/login"}>Log out</Link> </button>
    </div>
  )
}
