import React from 'react'
import logo from '../assets/logo2.png'

import '../index.css'
// import title from '../assets/grp.png'
// import rect from '../assets/Rectangle 35.png'


const ShopMecoGradient = () => {
  return (
    <div className='w-5/12 hidden md:block bg bg-cover h-screen bg-no-repeat text-white'>
    <img src={logo} alt="logo" className='w-[250px] m-8' />
   
    <div className='lg:w-[70%] mx-auto px-8 lg:px-4 mt-[100px]'>
<div className="box box1 mb-8 "></div>
<p className='w-full text-center text-[18px] lg:text-[28px] opacity-70 leading-relaxed font-medium '>Take care of your car in the garage, and the car will take care of you on the road.
</p>
<div className='w-full flex justify-end'>
<div className="box  box2 mt-8"></div>
</div>

<p className='text-right mt-4  text-[14px] lg:text-[20px] opacity-70 '>
― Amit Kalantri, <br />Wealth of Words
</p>
    </div>

</div>
  )
}

export default ShopMecoGradient