import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
import bar from '../assets/bar.png'
import logo2 from '../assets/logo2.png'
import arrow from '../assets/arrow-right.png'
import business from '../assets/business.png'
import individual from '../assets/individual.png'


import ShopMecoGradient from '../constants/ShopMecoGradient'
const Getstarted = () => {

    const [isHovered, setIsHovered] = useState(false)
    const [isHovered1, setIsHovered1] = useState(false)
    const onHover = () => {
        setIsHovered(true)
    }
    const onHover1 = () => {
        setIsHovered1(true)
    }
    const leaveHover = () => {
        setIsHovered(false)
    }
    const leaveHover1 = () => {
        setIsHovered1(false)
    }
  return (
    <div className='md:flex md:flex-row  h-screen w-full'>
   
    <ShopMecoGradient/>
    <div className='flex items-center md:hidden p-6'>
        <button> 
            <img src={bar} alt="toggle" className='h-[18px] w-[24px] me-6 '/>
        </button>
        <img src={logo2} alt="logo" className='h-[35px]' />
    </div>
    <div className='md:w-7/12  md:flex md:justify-center lg:py-[28px] md:py-[18px]  md:px-[50px]' >
    <div className=' md:w-[400px] lg:w-[500px] w-full  mt-8 px-5 '>
                <div className='font-semibold  whitespace-nowrap justify-end hidden md:flex md:pe-4'>
                <p className=' small-text me-1'>Already have an account? </p>
                <Link to="/" className='span-color text-[14px] '> Log In</Link>
                </div>
               <div className='lg:my-[100px] my-[70px]'>
                <h1 className='font-bold text-center md:text-left px-4 md:p-0'>Get Started</h1>
                <div className=' flex flex-col gap-10 mt-8 '>
                    
                    <button className='shadow-xl  border-2 rounded-lg hover:border-[#5007E0] hover:bg-[#F5F3FF] lg:flex p-8 justify-center w-full items-center transition-colors duration-300 ease-in '  onMouseEnter={onHover1} onMouseLeave={leaveHover1} >
                        <div className='lg:w-[20%] px-3 flex justify-center mt-2 lg:mt-0 '>
                        <img src={individual} alt="individual" />
                        
                        </div>
                        <div className='lg:w-[60%] text-center  px-3 lg:text-left mt-4 lg:mt-0  '>
                            <p className='font-bold text-[18px]'>Individual / Car Owners</p>
                            <p className='small-text font-semibold'>Personal account to manage your car and keep it in good condition.</p>
                        </div>
                        <div className='lg:w-[20%] px-3 flex lg:justify-end justify-center  mt-4 lg:mt-0 '>
                        {isHovered1 && <img src={arrow} alt="arrow" className='hidden lg:block' />}
                            </div>
                        </button>
                        <Link to='/business-form' className='w-full'>
                    <button className='shadow-xl  border-2 rounded-lg hover:border-[#5007E0] hover:bg-[#F5F3FF] lg:flex p-8 w-full justify-center items-center transition-colors duration-300 ease-in '  onMouseEnter={onHover} onMouseLeave={leaveHover}>
                    <div className='lg:w-[20%] px-3 flex justify-center mt-2 lg:mt-0 '>
                        <img src={business} alt="business" />
                     
                        </div>
                        <div className='lg:w-[60%] text-center  px-3 lg:text-left mt-4 lg:mt-0 '>
                            <p className='font-bold text-[18px]'>Business</p>
                            <p className='small-text font-semibold'>Business account for individual service providers and companies.</p>
                        </div>
                        <div className='lg:w-[20%] px-3 flex lg:justify-end justify-center  mt-4 lg:mt-0'>
                          {isHovered && <img src={arrow} alt="arrow" className='hidden lg:block' />}
                            </div>
                    </button>
                    </Link>
                </div>
             </div>
            </div>
    </div>
  
</div>

  )
}

export default Getstarted