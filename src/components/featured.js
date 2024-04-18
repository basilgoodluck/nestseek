import React from 'react'
import { FaChevronCircleRight,  FaChevronCircleLeft } from "react-icons/fa";
import FeaturedCard from './featuredCard';

function Featured() {
  return (
    <div className=''>
        <div className='pl-16'>
            <p className='text-orange-400 pb-4 '>--- Our Recommendation</p>
            <div className='pb-3 pl-6'>
                <div className='flex justify-between pr-16 items-center'>
                    <h1 className='w-2/6 text-2xl font-bold'>Featured House</h1>
                    <div className='flex justify-center items-center w-1/3'>
                        <p className='ml-5 bg-green-400 py-1 px-4 rounded-3xl text-sm'>House</p>
                        <p className='ml-5 bg-gray-200 py-1 px-4 rounded-3xl text-sm'>Villa</p>
                        <p className='ml-5 bg-gray-200 py-1 px-4 rounded-3xl text-sm'>Apartment</p>
                    </div>
                    <div className='flex w-1/3 justify-end'>
                        <FaChevronCircleLeft className='rounded-3xl text-3xl text-gray-500 ml-3'/>
                        <FaChevronCircleRight className='rounded-3xl text-3xl text-green-600 ml-3'/>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center py-2 pl-6 overflow-x-hidden'>
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>      
    </div>
  )
}

export default Featured
