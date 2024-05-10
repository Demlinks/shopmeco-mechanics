import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopMecoGradient from '../constants/ShopMecoGradient'

const RootLayout = () => {
  return (
<div className='block md:flex md:flex-row  h-screen w-full'>
    <ShopMecoGradient/>
    <div className='md:w-7/12  md:flex md:justify-center'>
    <Outlet/>
    </div>
</div>
  )
}

export default RootLayout