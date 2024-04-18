import React from 'react'
import BlogCard from './blogCard'

function Blog() {
  return (
    <div>
        <div className='px-16'>
            <p className='text-orange-400 text-center'>---</p>
            <p className='text-orange-400 text-center'>See Our Review</p>
            <h1 className='font-bold text-2xl text-center'>What Our Users Say About Us</h1>

            <div className='flex justify-center items-center'>
                <div className='w-1/2'>
                    <div className='flex justify-start items-center py-6 pr-16'>
                        <div className='w-10'>
                            <img src='./images/blogImg-3.png' alt='blogImg'/>
                        </div>
                        <BlogCard />
                    </div>
                    <div className='flex justify-start items-center py-16 pr-16'>
                        <div>
                            <img src='./images/blogImg-2.png' alt='blogImg'/>
                        </div>
                        <BlogCard />
                    </div>
                    <div className='flex justify-start items-center py-16 pr-16'>
                      <div>
                          <img src='./images/blogImg.png' alt='blogImg'/>
                      </div>
                        <BlogCard />
                    </div>
                    
                </div>
                <div className='w-1/2'>
                    <div><img src='./images/blogImg-4.png' alt='sddsjfo'/></div>
                    <BlogCard />
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Blog
