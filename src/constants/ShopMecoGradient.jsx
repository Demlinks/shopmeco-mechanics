import React from 'react'
import logo from '../assets/logo1.png'
import title from '../assets/grp.png'


const ShopMecoGradient = () => {
  return (
    <div className='w-5/12 hidden md:block bg bg-cover md:h-[780px]   bg-no-repeat text-white relative'>
    <img src={logo} alt="logo"  />
    <div className='absolute top-[240px] left-[15%] right-[15%]'>
    <img src={title} alt="title"  />
    </div>
</div>
  )
}

export default ShopMecoGradient