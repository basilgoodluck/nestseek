import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";

function BlogCard() {
  return (
    <div>
        <div>
            <div className='flex justify-start'>
                <img src='' alt='profileIMg' />
                <p className='pl-6'>Dianne Russell</p>
            </div>
            <h4>The things we need to check when we want to buy a house</h4>
            <p><MdAccessTimeFilled /> 4 min read | 18 April 2024</p>
        </div>      
    </div>
  )
}

export default BlogCard
