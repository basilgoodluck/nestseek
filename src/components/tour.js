import React from 'react'
import { IoCallSharp } from "react-icons/io5";

function Tour() {
  return (
    <div>
      <div className='pl-2 lg:px-16 flex justify-between lg:items-center flex-col lg:flex-row m-auto pb-16 text-sm'>
        <div className='lg:w-1/2 lg:pr-16'>
          <p className='text-orange-400 pb-4'>--- Ready To Sell</p>
          <div className='px-6 '>
            <h1 className='font-bold text-2xl'>Let’s tour and see our house!</h1>
            <img src='./images/tour.png' alt='ronald' className='lg:hidden block' />
            <p className='text-4 text-gray-600'>Houses recommended by our partners that have been curated to become the home of your dreams!</p>
            <h4 className='font-bold '>House Detail</h4>
            <div className='grid grid-rows-2 grid-flow-col gap-4 pb-6 text-gray-600'>
                <p> 4 Bedroom </p>
                <p>2 Bedroom </p>
                <p>1 Carport </p>
                <p>2 Floors </p>
            </div>
            <div className='pt-6 flex justify-start border-t border-gray-100 items-center'>
              <div className='flex justify-between '>
                <img src='./images/Dianne.png' alt='ronald'/>
                <div className=' text-gray-600'>
                  <h4>Dianne Russel</h4>
                  <p>Managing Director</p>
                </div>
              </div>
              <div className='flex justify-center text-md lg:text-sm items-center justify-items-start rounded-3xl lg:p-2 p-1'>
                <IoCallSharp className='text-white bg-green-700 rounded-3xl p-2 text-3xl' /> <p className='text-black'>Contact now</p>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img alt='tour' src='./images/tour.png' className='lg:block hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Tour