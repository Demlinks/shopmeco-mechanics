import React from 'react'
import '../index.css'


const Register = () => {
  return (
    <>
  
  <div className='register mt-8'>
       <label className='input-details'>Your fullname</label> <br/>
<input type="text" placeholder='Enter your fullname' className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]' required/><br/> <br/>
   <label className='input-details'>Email address</label> <br/>
<input type="email" placeholder='Enter your email' className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]' required/><br/> <br/>
<label className='input-details'>Password</label> <br/>

<input  placeholder='Enter your password' className=' mt-1 w-full span-color font-medium rounded-lg p-3 outline-color text-[14px] border-2 border-gray-300' required/>
<div className='flex'>
        <input type="checkbox"  id="agree" className='me-2' />
    <label htmlFor="agree" className='small-text'>i agree to <a className='span-color font-semibold underline cursor-pointer'>terms & conditions</a></label>
    </div>
   
  </div>
  </>
  )
}

export default Register