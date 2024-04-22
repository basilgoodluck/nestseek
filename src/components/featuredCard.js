import React from 'react'

function FeaturedCard() {
  return (
    <div className='pr-5 text-sm lg:text-xl ' style={{minWidth: "250px", maxWidth: "250px"}}>
      <div className='pb-4'>
        <img src='./images/roseland.png' alt='houseImag' />
      </div>     
      <h1 className='pb-4 text-gray-600 '>Roselands House</h1>
      <p className='pb-4 text-gray-600'>$ 50,000,000</p>   
      <div className='pb-4 flex justify-start text-gray-600' >
        <img src='./images/Dianne.png' alt='houseIg' className='' />
        <div>
          <h4>Dianne Russell</h4>
          <p>Manchester, Kentuchy</p>
        </div>
      </div>    
    </div>
  )
}

export default FeaturedCard
