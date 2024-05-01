import React from 'react'
import ShopMecoGradient from '../constants/ShopMecoGradient'
const Getstarted = () => {
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
        <div className=' md:w-[450px] lg:w-[500px] w-full  '>
            <div className='font-semibold  whitespace-nowrap justify-end hidden md:flex md:pe-4'>
            <p className=' small-text me-1'>Don’t have an account? </p>
            <button className='span-color text-[14px] '>Register</button>
            </div>
            <div className='md:w-[450px]  w-full md:mt-10 md:px-4 mt-6'>
       <h1 className='font-bold text-center md:text-left px-4 md:p-0'>Login</h1>
       <p className=' text-center md:text-left small-text  flex md:block justify-center font-semibold mt-3 md:p-0 px-4 '>Login to your account and explore our services <br className='md:block hidden'/> and proficient technicians.</p>
        <form className=' mt-10 mx-auto p-6 md:p-0 w-full'>
<label className='input-details'>Email address</label> <br/>
<input type="email" placeholder='Enter your email' className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]' required/><br/> <br/>
<label className='input-details'>Password</label> <br/>
<div className='flex items-center relative'>
<input type={showPassword ? "text" : "password"} placeholder='Enter your password' className=' mt-1 w-full span-color font-medium rounded-lg p-3 outline-color text-[14px] border-2 border-gray-300' required/>
<button onClick={toggleVisibility} className='span-color show font-semibold cursor-pointer'>{showPassword ? "hide": "show"}</button>
</div>

<div className='flex justify-between mt-2 font-semibold text-[14px]'>
<div className='flex justify-center items-center'>
    <input type="checkbox"  id="remember" className='me-1' />
<label htmlFor="remember" className='small-text'>Remember Me</label>
</div>
<button className='span-color font-semibold text-[14px]'>Forgot Password?</button>


</div>
<Button name="Login" onClick={handleClick}></Button>
<div className='md:hidden flex justify-center mt-4 font-semibold'>
            <p className=' sm-text me-1'>Don’t have an account? </p>
            <button className='span-color text-[14px] '>Register</button>
            </div>
<div className='mt-4 flex justify-center items-center'>
<hr className='border-t-2 border-gray me-3 w-[50%]' />
<span  className='text-[12px] font-semibold'>OR</span>
<hr className='border-t-2 border-gray ms-3 w-[50%]'/>
</div>
<button className='w-full mt-6 shadow-md rounded-lg py-3 border-2 font-bold hover:bg-gray-100'>
<div className='flex justify-center items-center'>
<img src={google} alt="google" className='me-2 w-[20px] h-[20px]'/>
<p className='hidden md:block'>Register with Google</p>
<p className='md:hidden'>Login with Google</p>
</div>

</button>
        </form>
        </div>
        </div>
    </div>
  
</div>

  )
}

export default Getstarted