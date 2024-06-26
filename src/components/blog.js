import React from 'react'
import BlogCard from './blogCard'

function Blog() {
  return (
    <div>
        <div className='px-2 lg:px-16 pt-16 pb-8'>
            <p className='text-orange-400 text-center'>---</p>
            <p className='text-orange-400 text-center'>See Our Review</p>
            <h1 className='font-bold lg:text-2xl text-center text-sm'>What Our Users Say About Us</h1>

            <div className='flex justify-start items-start lg:justify-center lg:items-center pt-6 lg:flex-row flex-col'>
                <div className='lg:w-1/2'>
                    <div className='flex justify-start lg:items-center py-3 lg:pr-6'>
                        <div className=''>
                            <img src='./images/blogImg-3.png' alt='blogImg'/>
                        </div>
                        <BlogCard />
                    </div>
                    <div className='flex justify-start items-center py-3 lg:pr-6'>
                        <div>
                            <img src='./images/blogImg-2.png' alt='blogImg'/>
                        </div>
                        <BlogCard />
                    </div>
                    <div className='flex justify-start items-center py-3 pr-6'>
                      <div>
                          <img src='./images/blogImg.png' alt='blogImg'/>
                      </div>
                        <BlogCard />
                    </div>
                </div>
                <div className='lg:w-1/2 self-start grid grid-cols-1 gap-3'>
                    <div className='lg:pl-4'><img src='./images/blogImg-4.png' alt='sddsjfo'/></div>
                    <BlogCard />
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Blog
