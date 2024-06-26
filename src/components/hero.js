import React from 'react'
import Header from './header'
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
    
  return (
    <div className='w-screen'>
        <div className='relative'>
            <img src='./images/Color Blur.png' alt='Blur color' className='absolute top-0 left-0 w-1/2'/>
            <img src='./images/hero.png' alt='heroImage' className='hidden lg:block absolute top-0 right-0 w-1/2 h-5/6 '/>
            <Header />
            <div className='flex lg:justify-start lg:items-center lg:flex-row flex-col justify-center items-start pt-16 px-2 lg:pl-16 overflow-x-hidden leading-8' style={{minHeight: '100vh', maxHeight: '100vh'}}>
                <div className='lg:py-0 relative w-full lg:w-2/5'>
                    <h1 className='font-black text-3xl text-gray-950 lg:text-4xl pb-5' style={{fontFamily: "lexend"}}>Find The Place to Live Your Dream Easily Here</h1>
                    <p className="pb-5 text-gray-800 text-sm">Everything you need about finding your place to live will be here, where it will be easier for you</p>
                    <form className='pb-5'>
                        <div className='w-5/6 lg:w-full shadow bg-white border-gray-100 border-2 rounded-3xl flex justify-between pl-2 items-center'>
                            <FaMapMarkerAlt className='text-xl text-pink-500' />
                            <input className='w-full rounded-3xl outline-0 border-spacing-0 pl-4 text-base'/>
                            <button className='py-1 px-5 text-sm lg:px-10 rounded-3xl bg-green-500 border-gray-100 border-2'>Search</button>
                        </div>
                    </form>
                    <p className='font-bold'>Our Partnership</p>
                    <div className='flex justify-start lg:pb-3 items-center'>
                        <img src='/images/airbnb.png' alt='Logos' className=' pr-2 lg:pr-6'/>
                        <img src='/images/traveloka_logo 2.png' alt='Logos' className='pr-2 lg:pr-6'/>
                        <img src='/images/tripadvisor.png' alt='Logos' className='pr-1 lg:pr-6'/>
                        <img src='/images/tiketcom.png' alt='Logos' className='pr-2 lg:pr-2'/>
                    </div>
                </div>
                {/* <div className='z-10 flex justify-start items-start w-1/2 overflow-x-hidden' >
                    <img src='./images/1k Peoples.png' alt='' className='w-1/3' />
                    <img src='./images/4k+.png' alt='' className='w-1/3' />
                    <img src='./images/56-houses.png' alt='' className='w-1/3' />
                </div> */}
            </div>
        </div>        
    </div>
  )
}

export default Hero
