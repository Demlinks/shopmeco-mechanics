import React from 'react'
import '../index.css'
import logout from '../assets/logout.png'
import service from '../assets/service.png'
import booking from '../assets/caricon.png'
import settings from '../assets/settings.png';
import dash from '../assets/dashboard icon.png';
import message from '../assets/message.png';
import logo from '../assets/logo2.png'

const Navbar = () => {

  return (
    <nav className="vertical-navbar  lg:w-2/12 w-3/12  hidden md:block">
      <img src={logo} alt="logo" className='px-6' />
      <div className=' flex flex-col w-full justify-between h-[90%] text-[18px] font-medium mt-10 py-6 px-2'>
      <ul className="navbar-nav w-full flex flex-col gap-4">
   
      <div className='nav-nav flex items-center py-2 px-6'>
          <img src={dash} alt="dashboard" className='me-2' />
        <li className="nav-item">
          <a href="/about" className="nav-link opacity-80">Dashboard</a>
        </li>
        </div>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src={service} alt="service" className='me-2 ' />
        <li className="nav-item">
          <a href="/contact" className="nav-link opacity-80">Services</a>
        </li>
        </div>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src={booking} alt="booking" className='me-2' />
        <li className="nav-item">
          <a href="/about" className="nav-link opacity-80">Booking</a>
        </li>
        </div>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src={message} alt="service" className='me-2' />
        <li className="nav-item">
          <a href="/contact" className="nav-link opacity-80">Messages</a>
        </li>
        </div>
      </ul>
      <ul className='navbar-nav  w-full flex flex-col gap-6'>
      <div className='nav-nav flex items-center py-2  px-6'>
          <img src={settings} alt="settings"  className='me-2'/>
      <li className="nav-item">
          <a href="/home" className="nav-link opacity-80">Settings</a>
        </li>
        </div>
        <div className='nav-nav flex items-center py-2  px-6'>
          <img src={logout} alt="log out" className='me-2'/>
        <li className="nav-item">
          <a href="/about" className="nav-link opacity-80">Log out</a>
        </li>
        </div>
      </ul>
      </div>
    </nav>
  );
}




export default Navbar