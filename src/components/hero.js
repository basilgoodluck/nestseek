import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='h-screen w-screen'>
        <div className='relative'>
            <img src='./images/Color Blur.png' alt='Blur color' className='absolute top-0 left-0 w-1/2'/>
            <img src='./images/hero.png' alt='heroImage' className='absolute top-0 right-0 w-1/2 h-5/6 '/>
            <div className='flex m-auto py-3 px-16 justify-between items-center fixed w-full z-50'>
                <h1 className='font-bold'>NestSeek</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center px-9 text-white'>
                        <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-2 px-4 mr-9'>About us</a>
                        <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-2 px-4 mr-9'>Article</a>
                        <a href='./' className='border-white border-2 rounded-3xl bg-transparent py-2 px-4 mr-9'>Property</a>
                    </div>
                    <a href='./' className='text-green-900 border-green-200 bg-green-200 border-2 px-4 py-2 rounded-3xl'>Sign Up</a>
                </div>
            </div>
            <div className='flex m-auto items-center justify-between h-screen py-3 pl-16 overflow-x-hidden'>
                <div className='item-start relative w-2/5'>
                    <h1 className='font-black text-4xl pb-5' style={{fontFamily: "lexend"}}>Find The Place to Live Your Dream Easily Here</h1>
                    <p className="pb-5">Everything you need about finding your place to live will be here, where it will be easier for you</p>
                    <form className='pb-5'>
                        <div className='bg-white border-gray-100 border-2 rounded-3xl flex justify-between pl-5 items-center'>
                            <FaMapMarkerAlt className='text-2xl text-pink-500' />
                            <input className='w-full rounded-3xl'/>
                            <button className='p-2 px-10 rounded-3xl bg-green-500 border-gray-100 border-2'>Search</button>
                        </div>
                    </form>
                    <p className=''>Our Partnership</p>
                    <div className='flex justify-start pb-3 items-center'>
                        <img src='/images/airbnb.png' alt='Logos' />
                        <img src='/images/traveloka_logo 2.png' alt='Logos' />
                        <img src='/images/tripadvisor.png' alt='Logos' />
                        <img src='/images/tiketcom.png' alt='Logos' />
                    </div>
                </div>
                <div className='z-10 flex justify-start items-center w-1/2 overflow-x-hidden' >
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
