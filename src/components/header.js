import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className='relative h-screen w-screen'>
        <img className='absolute right-0 top-0 w-4/12' src='./images/hero.png' style={{zIndex: -1}} alt='heroImg' />
        <div className=''>
            <div className='w-11/12 flex m-auto py-3 justify-between items-center'>
                <h1>NestSeek</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center px-9'>
                        <a href='./' className='border-black border-2 rounded-3xl bg-orange-600 py-2 px-4 mr-9'>About us</a>
                        <a href='./' className='border-black border-2 rounded-3xl bg-orange-600 py-2 px-4 mr-9'>Article</a>
                        <a href='./' className='border-black border-2 rounded-3xl bg-orange-600 py-2 px-4 mr-9'>Property</a>
                    </div>
                    <a href='./' className='text-green-900 border-green-200 bg-green-200 border-2 px-4 py-2 rounded-3xl'>Sign Up</a>
                </div>
            </div>
            <div className='w-11/12 flex m-auto items-center justify-between h-96 '>
                <div className='grid-cols-none'>
                    <h1>Find The Place to Live Your Dream Easily Here</h1>
                    <p>Everything you need about finding your place to live will be here, where it will be easier for you</p>
                    <form>
                        <div>
                            <FaMapMarkerAlt />
                            <input />
                            <button>Search</button>
                        </div>
                    </form>
                    <p>Our Partnership</p>
                    <div>
                        <img src='/images/airbnb.png' alt='Logos' />
                        <img src='/images/traveloka_logo 2.png' alt='Logos' />
                        <img src='/images/tripadvisor.png' alt='Logos' />
                        <img src='/images/tiketcom.png' alt='Logos' />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Header
