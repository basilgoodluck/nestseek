import React from 'react'

function FeaturedCard() {
  return (
    <div className='pr-5 w-3/12'>
      <div className='pb-4'>
        <img src='./images/roseland.png' houseImg/>
      </div>     
      <h1 className='pb-4'>Roselands House</h1>
      <p className='pb-4'>$ 50,000,000</p>   
      <div className='pb-4 flex justify-start'>
        <img src='./images/dianne.png' alt='houseImg' className='' />
        <div>
          <h4>Dianne Russell</h4>
          <p>Manchester, Kentuchy</p>
        </div>
      </div>    
    </div>
  )
}

export default FeaturedCard
