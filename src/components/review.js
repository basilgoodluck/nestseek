import React from 'react'
import ReviewCard from './reviewCard'

function Rewiew() {
  return (
    <div>
        <div className='pt-8 pb-8' style={{minHeight: "90vh"}}>
            <p className='text-orange-400 text-center'>---</p>
            <p className='text-orange-400 text-center'>See Our Review</p>
            <h1 className='font-bold text-2xl text-center'>What Our Users Say About Us</h1>
            <div className='flex justify-center items-center '>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div> 
        </div>     
    </div>
  )
}

export default Rewiew