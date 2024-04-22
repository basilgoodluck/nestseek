import React from 'react'
import { FaStar } from "react-icons/fa";


function ReviewCard() {
  return (
    <div>
        <div className='flex items-center justify-center m-auto p-2 lg:p-6'>
            <div className='relative' style={{minHeight: '50vh'}}>
                <img src='./images/reviewImg-c.png' alt='reviewImg-c'/>
                <div className='absolute -bottom-0 left-0 right-0 shadow-2xl p-6 bg-white rounded-3xl w-4/5 m-auto'>
                    <hi className='font-bold'>Best! I got the house I wanted through Hounter</hi>
                    <p className='text-gray-600'>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
                    <div>
                        <div className='flex justify-between items-center'>
                            <img src='./images/dianne.png' alt='dianne russell'/>
                            <div>
                                <h4 className='font-bold'>Dianne Russell</h4>
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
