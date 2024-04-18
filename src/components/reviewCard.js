import React from 'react'
import { FaStar } from "react-icons/fa";


function ReviewCard() {
  return (
    <div>
        <div className='flex items-center justify-center m-auto p-6' style={{minWidth: "650px", maxWidth: "650px",}}>
            <div className='relative'>
                <img src='./images/reviewImg-c.png' alt='reviewImg-c'/>
                <div className='absolute -bottom-24 left-24 right-24 border-2 border-green-600 p-6 bg-white rounded-3xl'>
                    <hi>Best! I got the house I wanted through Hounter</hi>
                    <p>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
                    <div>
                        <div className='flex justify-between items-center'>
                            <img src='./images/dianne.png' alt='dianne russell'/>
                            <div>
                                <h4>Dianne Russell</h4>
                                <p>Manager Director</p>
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
