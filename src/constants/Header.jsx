import React from 'react'
import '../index.css'
import notification from '../assets/Notification.png'
import pic from '../assets/profile-pic.png'
import search from '../assets/search.png'
import search2 from '../assets/search2.png'
import bar from '../assets/bar.png'
import logo from '../assets/logo2.png'

const Header = () => {
  return (
    <div className='header md:h-[100px] lg:w-[83.3%] md:w-[75%] w-full bg-[#F7F7FD] border border-b-[#d4ccff] '>
    <div className='flex justify-between items-center lg:px-[40px] py-[20px] px-[20px] '>
        <div className='md:flex items-center bg-white rounded-lg border p-4 hidden  border-[#d4ccff] lg:w-[460px]'>
            <img src={search} alt="search" className='cursor-pointer me-2' />
        <input type="text" placeholder='Search or Type' className='outline-none w-full'/>
        </div>
        <div className='flex  gap-3 items-center md:hidden'>
            <button>
            <img src={bar} alt="toggle-bar" />

            </button>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex  gap-3 md:gap-4 items-center'>
            <button>
                <img src={search2} alt="search" className='md:hidden' />
            </button>
            <button>
            <img src={notification} alt="notification" className=' cursor-pointer' />
            </button>
            <button className='flex items-center cursor-pointer'>
                <img src={pic} alt="profile-pic" className='me-1'/>
                <div className=' hidden md:block'>
                    <p className='font-semibold'>Tiamiyu Mubarak</p>
                    <p className='text-[#AAA8A8] text-[14px]'>Service Provider</p>
                </div>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Header