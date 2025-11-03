import React from 'react'
import { BiSearch } from "react-icons/bi";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to= '/'>
            <h1 className= "font-bold text-sm sm:test-xl flex flex-wrap">
            <span className="text-slate-500">Don</span>
            <span className= "text-slate-700">Estate</span>
            </h1>
          </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
           <BiSearch className='text-slate-600 ' /> 
        </form>
        <ul className="flex gap-4 cursor-pointer">
          <Link to = '/'>
          <li className='hidden sm:inline text-slate-700 hover:text-blue-900'>Home</li>
          </Link>
          <Link to = '/about'>
          <li className='hidden sm:inline text-slate-700 hover:text-blue-900'>About</li>
          </Link>
          <Link to = '/profile'>
          {currentUser ? (
            <img src={currentUser.avatar} alt={currentUser.name} className="w-8 h-8 rounded-full object-cover"/>
          ): ( <li className='hidden sm:inline text-slate-700 hover:text-blue-900'>Signin</li>
        )}
          
          </Link>
        </ul> 
        </div>
       
    </header>
  )
}
