import React from 'react'

function Form() {
  return (
    <div className='pt-8 pb-8'>
        <div className='text-center bg-cover bg-center bg-Subscribe w-11/12 m-auto p-6 rounded-3xl'>
            <h1>Subscribe For More Info and update from Hounter</h1>
            <form className='pb-5'>
                <div className='bg-white border-gray-100 border-2 rounded-3xl flex justify-between pl-5 items-center w-2/3 m-auto'>
                    <input className='w-full rounded-3xl'/>
                    <button className='p-2 px-10 rounded-3xl bg-green-500 border-gray-100 border-2'>Search</button>
                </div>
            </form>
        </div>      
    </div>
  )
}

export default Form
