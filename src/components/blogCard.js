import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";

function BlogCard() {
  return (
    <div>
        <div className='grid grid-cols-1 gap-3 pl-6 text-gray-600'>
            <div className='flex justify-start items-center '>
                <img src='./images/robert.png' alt='profileIMg' />
                <p className='pl-3 font-bold text-black'>Dianne Russell</p>
            </div>
            <h4>The things we need to check when we want to buy a house</h4>
            <p><MdAccessTimeFilled className='inline' /> 4 min read | 18 April 2024</p>
        </div>      
    </div>
  )
}

export default BlogCard
