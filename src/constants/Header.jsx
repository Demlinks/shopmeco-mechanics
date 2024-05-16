import React , {useState} from 'react'
import '../index.css'
import { Link } from 'react-router-dom'





const Header = () => {
    const [opened, setOpened] = useState(false);
    const toggleNavbar = () => {
      setOpened(!opened)
    } 
  return (
    <div className='header md:h-[100px] lg:w-[83.3%] md:w-[75%] w-full bg-[#F7F7FD] border border-b-[#d4ccff] '>
    <div className='flex justify-between items-center lg:px-[40px] py-[20px] px-[20px] '>
        <div className='md:flex items-center bg-white rounded-lg border p-4 hidden  border-[#d4ccff] lg:w-[460px]'>
            <img src='../assets/search.png' alt="search" className='cursor-pointer me-2' />
        <input type="text" placeholder='Search or Type' className='outline-none w-full'/>
        </div>
        <div className='flex  gap-3 items-center md:hidden'>
            <button>
           
                <img src='../assets/bar.png' alt="toggle-bar-open" onClick={toggleNavbar} />
                

            </button>
            <img src='../assets/logo2.png' alt="logo" />
        </div>
        {opened && (

       <nav className="vertical-navbar  w-full md:hidden">
       <div className=' px-6 flex justify-end'>
                <button onClick={toggleNavbar}>
                
                <img src='../assets/close.png' alt="toggle-bar-close" onClick={toggleNavbar} className='w-[20px] h-[20px]' />
                </button>
            </div>
       <div className=' flex flex-col w-full justify-between h-[90%] text-[18px] font-medium mt-10 py-6'>
       <ul className="navbar-nav w-full flex flex-col gap-4">
    
    <Link to={'/dashboard'}>
       <div className='nav-nav flex items-center py-2 px-6'>
         <li className="nav-item">
           <p className="nav-link opacity-80">Dashboard</p>
         </li>
         </div>
         </Link>
         <Link to={'/services'}>
         <div className='nav-nav flex items-center py-2  px-6'>
        
         <li className="nav-item">
           <p className="nav-link opacity-80">Services</p>
         </li>
         </div>
         </Link>
         <Link to={'/booking'}>
         <div className='nav-nav flex items-center py-2  px-6'>
         <li className="nav-item">
           <p className="nav-link opacity-80">Booking</p>
         </li>
         </div>
         </Link>
         <Link to={'/messages'}>
         <div className='nav-nav flex items-center py-2  px-6'>
         <li className="nav-item">
           <p className="nav-link opacity-80">Messages</p>
         </li>
         </div>
         </Link>
       </ul>
       <ul className='navbar-nav  w-full flex flex-col gap-6'>
         <Link to={'/settings'}>
       <div className='nav-nav flex items-center py-2  px-6'>
       <li className="nav-item">
           <p className="nav-link opacity-80">Settings</p>
         </li>
         </div>
         </Link>
         <Link to={'/logout'}>
         <div className='nav-nav flex items-center py-2  px-6'>
         <li className="nav-item">
           <p className="nav-link opacity-80">Log out</p>
         </li>
         </div>
         </Link>
       </ul>
       </div>
     </nav>
)}
        <div className='flex  gap-3 md:gap-4 items-center'>
            <button>
                <img src='../assets/search2.png' alt="search" className='md:hidden' />
            </button>
            <button>
                
            <img src='../assets/Notification.png' alt="notification" className=' cursor-pointer' />
            </button>
            <Link to={'/profile'}>
            <button className='flex items-center cursor-pointer'>
                <img src="/assets/profile-pic.png" alt="profile-pic" className='me-1'/>
                <div className=' hidden md:block'>
                    <p className='font-semibold'>Tiamiyu Mubarak</p>
                    <p className='text-[#AAA8A8] text-[14px]'>Service Provider</p>
                </div>
            </button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Header