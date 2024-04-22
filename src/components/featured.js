import React from 'react'
import { FaChevronCircleRight,  FaChevronCircleLeft } from "react-icons/fa";
import FeaturedCard from './featuredCard';

function Featured() {
  return (
    <div className=''>
        <div className='pl-2 lg:pl-16 lg:pt-8 pb-3 lg:pb-8'>
            <p className='text-orange-400 pb-4 '>--- Our Recommendation</p>
            <div className='pb-3 pl-6'>
                <div className='flex justify-between lg:pr-16 items-center'>
                    <h1 className='lg:w-2/6 lg:text-2xl font-bold'>Featured House</h1>
                    <div className='flex justify-between lg:justify-center items-center lg:w-1/3 text-gray-600'>
                        <p className='lg:ml-5 bg-green-400 py-1 px-2 lg:px-4 rounded-3xl text-sm'>House</p>
                        <p className='lg:ml-5 bg-gray-200 py-1 px-4 rounded-3xl text-sm'>Villa</p>
                        <p className='lg:ml-5 bg-gray-200 py-1 px-4 rounded-3xl text-sm'>Apartment</p>
                    </div>
                    <div className='lg:flex lg:w-1/3 justify-end hidden'>
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
