import React from 'react'
import { FaStar } from "react-icons/fa";


function ReviewCard() {
  return (
    <div>
        <div className='flex items-center justify-center m-auto p-2 lg:p-6 text-md'>
            <div className='relative' >
                <img src='./images/reviewImg-c.png' alt='reviewImg-c' className='m-auto'/>
                <div className='z-10 left-0 right-0 top-6 bottom-6 shadow-2xl p-6 bg-green-900 rounded-3xl w-4/5  md:w-3/5 m-auto' style={{marginTop: '-120px'}}>
                    <hi className='font-bold text-white'>Best! I got the house I wanted through Hounter</hi>
                    <p className='text-white'>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
                    <div>
                        <div className='flex justify-between items-center'>
                            <img src='./images/dianne.png' alt='dianne russell'/>
                            <div>
                                <h4 className='font-bold text-white '>Dianne Russell</h4>
                                <p className='text-gray-600'>Manager Director</p>
                            </div>
                            <div>
                                <FaStar />
                                <p>4.6</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default ReviewCard
