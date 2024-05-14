import React from 'react'
import Navbar from '../constants/Navbar'
import '../index.css'
import img from '../assets/img-svg.png'
import star from '../assets/Star 1.png'
import profile_pic from '../assets/profile-picture.png'
import Header from '../constants/Header'

const Profile = () => {
  return (
    <div>
<Navbar/>

    <Header/>
<div className='profile-content lg:w-10/12 md:ml-[25%] md:p-[20px]  lg:p-[40px]  lg:ml-[16.67%] w-full md:w-9/12'>

    <div className='bg-[#7029FF] hidden md:block  rounded-xl relative'>
        <img src={img} alt="" className='w-full'/>
        <div className='absolute top-[15%] right-[3%] bg-white text-[#7029FF] rounded-lg lg:p-2 p-1'>
            <p className='flex items-center justify-center lg:text-[18px] font-semibold gap-1'>4.0 
            <img src={star} alt='rating-star' className='w-[18px]'/>
            </p>
            </div>
            <div className='bg-white   absolute rounded-lg flex justify-center items-center
             lg:w-[155px] lg:h-[155px] lg:-bottom-[50%]  left-[4%] 
             md:w-[100px]  md:h-[100px] md:-bottom-[50%] 
             2xl:-bottom-[30%]  
              z-30'>
            <img src={profile_pic} alt="profile-pic" className='md:w-[95px] lg:w-[150px]'/>
            </div>
    </div>

</div>

    </div>
  )
}

export default Profile