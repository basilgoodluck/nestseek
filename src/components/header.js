import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex m-auto py-3 px-16 justify-between items-center fixed w-full z-50'>
            <h1 className='font-bold'>NESTSEEK</h1>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center px-9 text-white'>
                    <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-1 px-3 mr-9'>About us</a>
                    <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-1 px-3 mr-9'>Article</a>
                    <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-1 px-3 mr-9'>Property</a>
                </div>
                <a href='./' className='text-green-900 border-green-200 bg-green-200 border-2 px-4 py-2 rounded-3xl'>Sign Up</a>
            </div>
        </div>
    </div>
  )
}

export default Header
