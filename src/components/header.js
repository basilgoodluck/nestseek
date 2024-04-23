import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Header() {
  return (
    <div>
        <div className='bg-white shadow-sm flex m-auto py-4 px-3 md:px-16 justify-between items-center fixed w-full z-50'>
            <h1 className='font-bold'>NESTSEEK</h1>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex justify-between items-center px-9 text-white'>
                    <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-1 px-3 mr-9'>About us</a>
                    <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-1 px-3 mr-9'>Article</a>
                    <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-1 px-3 mr-9'>Property</a>
                </div>
                <a href='./' className='hidden text-green-900 border-green-200 bg-green-200 border-2 px-2 py-1 lg:px-4 lg:py-2 text-base lg:text-xl rounded-md'>Sign Up</a>
                <div className='lg:hidden text-3xl text-black p-2 font-black rounded-xl'><AiOutlineMenuUnfold className='font-black' /></div>
            </div>
        </div>
    </div>
  )
}

export default Header
