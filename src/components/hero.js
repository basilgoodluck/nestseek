import React from 'react'
import Header from './header'
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
    
  return (
    <div className='lg:h-screen w-screen lg:pb-8'>
        <div className='relative'>
            <img src='./images/Color Blur.png' alt='Blur color' className='absolute top-0 left-0 w-1/2'/>
            <img src='./images/hero.png' alt='heroImage' className='hidden lg:block absolute top-0 right-0 w-1/2 h-5/6 '/>
            <Header />
            <div className='flex m-auto lg:items-center flex-col lg:flex-row justify-center h-screen py-3 px-2 lg:pl-16 overflow-x-hidden'>
                <div className='item-start py-6 lg:py-0 relative w-4/5 lg:w-2/5'>
                    <h1 className='font-black text-4xl pb-5' style={{fontFamily: "lexend"}}>Find The Place to Live Your Dream Easily Here</h1>
                    <p className="pb-5">Everything you need about finding your place to live will be here, where it will be easier for you</p>
                    <form className='pb-5'>
                        <div className='shadow bg-white border-gray-100 border-2 rounded-3xl flex justify-between pl-5 items-center'>
                            <FaMapMarkerAlt className='text-2xl text-pink-500' />
                            <input className='w-full rounded-3xl'/>
                            <button className='p-2 px-10 rounded-3xl bg-green-500 border-gray-100 border-2'>Search</button>
                        </div>
                    </form>
                    <p className='font-bold'>Our Partnership</p>
                    <div className='flex justify-start lg:pb-3 items-center'>
                        <img src='/images/airbnb.png' alt='Logos' className='py-2 pr-6'/>
                        <img src='/images/traveloka_logo 2.png' alt='Logos' className='py-2 pr-6'/>
                        <img src='/images/tripadvisor.png' alt='Logos' className='py-2 pr-6'/>
                        <img src='/images/tiketcom.png' alt='Logos' className='py-2 pr-2'/>
                    </div>
                </div>
                <div className='z-10 flex justify-start items-start w-1/2 overflow-x-hidden' >
                    <img src='./images/1k Peoples.png' alt='' className='w-1/3' />
                    <img src='./images/4k+.png' alt='' className='w-1/3' />
                    <img src='./images/56-houses.png' alt='' className='w-1/3' />
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Hero
