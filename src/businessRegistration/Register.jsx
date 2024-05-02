import React from 'react'
import '../index.css'


const Register = ({formData, setFormData}) => {

  return (
    <>
  
  <div className='register mt-8'>
       <label className='input-details'>Your fullname</label> <br/>
<input type="text"
 placeholder='Enter your fullname'
className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]'
 value={formData.fullname} 
 onChange={(e) => setFormData({...formData, fullname: e.target.value})} required/><br/> <br/>


   <label className='input-details'>Email address</label> <br/>
<input type="email" 
placeholder='Enter your email'
 className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]' 
 value={formData.email} 
 onChange={(e) => setFormData({...formData, email: e.target.value})}
required/>
<br/> <br/>
<label className='input-details'>Password</label> <br/>

<input type='password' placeholder='Enter your password' className=' mt-1 w-full span-color font-medium rounded-lg p-3 outline-color text-[14px] border-2 border-gray-300'
 value={formData.password} 
 onChange={(e) => setFormData({...formData, password: e.target.value})}
required/>


<div className='flex'>
        <input type="checkbox"  id="agree" className='me-2' 
         name="checkbox1"
         checked={formData.checkbox1}
         onChange={(e) => setFormData({...formData, checkbox1: e.target.checked})}/>
    <label htmlFor="agree" className='small-text'>i agree to <button className='span-color font-semibold underline cursor-pointer'>terms & conditions</button></label>
    </div>
   
  </div>
  </>
  )
}

export default Register