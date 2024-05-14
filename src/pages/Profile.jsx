import React from 'react'
import Navbar from '../constants/Navbar'
import '../index.css'
import img from '../assets/img-svg.png'
import star from '../assets/Star 1.png'
import profile_pic from '../assets/profile-picture.png'
import exp from '../assets/exp.png'
import grad from '../assets/grad.png'
import edu from '../assets/edu.png'
import blackStar from '../assets/blacks star.png'
import subscribe from '../assets/subscribe.png'
import Header from '../constants/Header'
import svg from '../assets/sub-svg.png'
import company from '../assets/company.png'
import location from '../assets/location.png'
import opening from '../assets/opening.png'
import image1 from '../assets/Rectangle 5995 (1).png'
import  image2 from '../assets/Rectangle 5996.png'
import image3 from '../assets/Rectangle 5997.png'
import image4 from '../assets/Rectangle 5998.png'
import image5 from '../assets/Rectangle 5999.png'
import image6 from '../assets/Rectangle 6000.png'
import review from '../assets/review.png'
import lightStar from '../assets/light-star.png'

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
    <div className='md:flex justify-between relative ps-[4%] md:pt-[8%] profile-details'>
        <div>
        <p className='text-[28px] font-semibold py-3 md:hidden'>Profile</p>
        <div className='flex  mt-4  gap-3'>
            <img src={profile_pic} alt="profile" className='md:hidden w-[100px] sm:w-[150px]' />
            <div className='flex flex-col justify-between'>
            <div>
            <p className='md:text-[28px]  font-medium'>Robert Fox</p>
            <p className='text-[#AAA8A8] text-[14px] mt-2'>CEO, MM Technicians</p>
            </div>
            <div className='flex items-center md:hidden'>
                <img src={blackStar} alt="" className='me-2 w-[15px]' />
                <p className='text-[18px]'>3.5</p>
            </div>
            </div>
        </div>
        <div className='mt-6 flex flex-col gap-3 text-[#1F1F1F] font-semibold opacity-95'>
            <div className=' flex items-center'>
                <img src={exp} alt="experience" className='me-2 md:hidden' />
            <p className='flex'> <span className='hidden md:block me-1'>-</span>10 years of experience.</p>
            </div>
          <div className='flex items-center'>
            <img src={edu} alt="education" className='me-2 md:hidden' />
            <p className='flex'><span className='hidden md:block me-1'>-</span> Studied Mechanical Engineering.</p>
          </div>
          <div className='flex items-center'>
            <img src={grad} alt="graduation" className='me-2 md:hidden' />
            <p className='flex'> <span className='hidden md:block me-1'>-</span>Graduated from University of Lagos, Lagos, Nigeria.</p>
          </div>
        </div>
        </div>
        <div>
            <button className='bg-[#5007E0] text-white font-medium w-full md:w-[170px] hover:opacity-85 rounded-lg py-3 mt-8 md:mt-0'>Edit Profile</button>
        </div>
    </div>
    <div className="sub ">
        <p className='text-[22px] font-semibold my-6'>Subscription details</p>
        <div className='bg-[#EDEDFA] md:h-[120px] h-[180px] py-6  md:py-0 md:flex items-center justify-between px-4  lg:w-[65%] rounded-lg relative'>
          <img src={svg} alt="" className=' absolute w-[50%] md:h-[120px] h-[150px] right-0 opacity-10'/>
            <div className='flex gap-3'>
            <div className='w-[48px] h-[48px] bg-white flex justify-center rounded-full items-center'>
        <img src={subscribe} alt="subscribe" className='w-[24px] h-[24px]' />
            </div>

            <div>
                <p className='font-meduim text-[18px] mb-1'>Active Subscriber</p>
                <p className='text-[14px] text-[#AAA8A8] mt-1'>340 days left</p>
            </div>
            </div>
            <div>
                <button className='font-medium w-[91%] sm:w-[95%]   rounded-lg py-3 mt-8 md:mt-0 md:w-[170px]  text-[#5007E0] bg-white border-2 border-solid border-[#5007E0] absolute md:right-[5%] md:bottom-[30%] hover:bg-[#5007E0] hover:text-white'>Subscribe</button>
            </div>
        </div>
    </div>
<div className='company'>
    <p className='text-[22px] font-semibold my-6'>Company details</p>
    <div className='lg:flex w-full'>
        <div className='lg:w-[65%] pe-10'>
<div className='flex items-center gap-3'>
    <img src={company} alt="" className='w-[64px] h-[64px]' />
    <div>
        <p className='text-[22px] font-medium'>MM Technicians</p>
        <p className='text-[14px] text-[#AAA8A8]'>Auto Mechanic Company.</p>
    </div>
</div>
<div className='mt-6'>
    <p className='py-4 text-[20px] font-medium'>Description</p>
    <p className='text-[16px] text-[#AAA8A8] leading-relaxed'>MM Technicians is a company that your car the right service it needs with a unique automechanic shop that links you with the best. MM Technicians is a company that your car the right service it needs with a unique automechanic shop that links you with the best</p>
</div>
</div>
<div className='lg:w-[35%] bg-[#EDEDFA] rounded-lg'>
<div className='p-4 mt-8 lg:mt-0'>
    <p className='text-[18px] font-medium'>Address</p>
    <div className='flex gap-2'>
<img src={location} alt="location" className='w-[40px] h-[40px]' />
<p className='text-[16px] text-[#AAA8A8]'>Mechanic Village <br />
No 22, Bolaji Mc Anthony way, <br /> opposite Law School, Ikeja, Lagos State.</p>
    </div>
</div>
<div className='p-4'>
    <p className='text-[18px] font-medium'>Opening hours</p>
    <div className='flex gap-2'>
<img src={opening} alt="location" className='w-[40px] h-[40px]' />
<p className='text-[16px] text-[#AAA8A8]'>Monday - Friday <br />
8:00 AM - 6:00 PM</p>
    </div>
</div>
</div>
    </div>

</div>
<div className='workshop'>
<p className='text-[22px] font-semibold my-6'>WorkShop Details</p>
<div className='flex flex-col lg:flex-row w-full gap-4'>
    <div className='flex flex-row lg:flex-col  gap-4'>

<img src={image1}  alt="" className='lg:w-full w-[48%] object-cover hover:scale-105 transition-scale duration-300 rounded-lg' />
<img src={image5} alt=""className=' lg:w-full w-[48%]  object-cover hover:scale-105 transition-scale duration-300 rounded-lg' />
    </div>
    <div>
<img src={image2} alt="" className='w-full hidden lg:block object-cover hover:scale-105 transition-scale duration-300 rounded-lg' />
    </div>
    <div className='flex flex-col gap-6 lg:gap-3'>
<img src={image3} alt="" className='w-full object-cover hover:scale-105 transition-scale duration-300 rounded-lg'/>
<div className='flex gap-4'>
<img src={image4} alt="" className='w-[48.5%] object-cover hover:scale-105 transition-scale duration-300 rounded-lg'/>
<img src={image6} alt=""className='w-[48.5%] object-cover hover:scale-105 transition-scale duration-300 rounded-lg' />
</div>
    </div>
</div>
</div>
<div className='reviews'>
<p className='text-[22px] font-semibold my-6'>Reviews (273)</p>
<div className='review-sect'>
    <div className='flex items-start gap-4'>
        <img src={review} alt="review" />
        <div>
        <div className='flex items-center gap-2'>
            <div>
                <p className='text-[18px] font-medium'>Daniella wike</p>
                <p className='text-[14px] text-[#AAA8A8]'>2days ago</p>
            </div>
            <div className='flex gap-1'>
                <img src={star} alt="ratingStar" className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={lightStar} alt="ratingStar"  className='h-[15px]' />
            </div>
        </div>
        <p className='sm:text-[16px] text-[14px] text-[#AAA8A8] mt-3'>MM Technicians is a company that your car the right service it needs with a unique automechanic shop that links you with the best. MM Technicians is a company that your car the right service it needs with a unique.</p>
        </div>

    </div>
   
</div>
<div className='review-sect mt-4'>
    <div className='flex items-start gap-4'>
        <img src={review} alt="review" />
        <div>
        <div className='flex items-center gap-2'>
            <div>
                <p className='text-[18px] font-medium'>Daniella wike</p>
                <p className='text-[14px] text-[#AAA8A8]'>2days ago</p>
            </div>
            <div className='flex gap-1'>
                <img src={star} alt="ratingStar" className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={lightStar} alt="ratingStar"  className='h-[15px]' />
            </div>
        </div>
        <p className='sm:text-[16px] text-[14px] text-[#AAA8A8] mt-3'>MM Technicians is a company that your car the right service it needs with a unique automechanic shop that links you with the best. MM Technicians is a company that your car the right service it needs with a unique.</p>
        </div>

    </div>
   
</div>
<div className='review-sect mt-4'>
    <div className='flex items-start gap-4'>
        <img src={review} alt="review" />
        <div>
        <div className='flex items-center gap-2'>
            <div>
                <p className='text-[18px] font-medium'>Daniella wike</p>
                <p className='text-[14px] text-[#AAA8A8]'>2days ago</p>
            </div>
            <div className='flex gap-1'>
                <img src={star} alt="ratingStar" className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={star} alt="ratingStar"  className='h-[15px]' />
                <img src={lightStar} alt="ratingStar"  className='h-[15px]' />
            </div>
        </div>
        <p className='sm:text-[16px] text-[14px] text-[#AAA8A8] mt-3'>MM Technicians is a company that your car the right service it needs with a unique automechanic shop that links you with the best. MM Technicians is a company that your car the right service it needs with a unique.</p>
        </div>

    </div>
   
</div>
</div>
</div>

    </div>
  )
}

export default Profile