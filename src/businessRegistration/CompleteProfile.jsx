import React from 'react'
const CompleteProfile = () => {
  return (
    <div className='complete md:w-[450px] mt-8'>
    <label className='input-details'>Your PhoneNumber</label> <br/>
<input type='tel' placeholder='080xxxxxxxx' className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]' required/><br/> <br/>
<label className='input-details'>Workshop name</label> <br/>
<input type="text"  className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]' required/><br/> <br/>

<label className='input-details'>Workshop Address</label> <br/>

<textarea  className=' mt-1 w-full span-color font-medium rounded-lg p-3 outline-color text-[14px] border-2 border-gray-300' required/>

<div className='font-semibold  whitespace-nowrap justify-end hidden md:flex md:pe-4 mt-4'>
                <p className=' small-text me-1'>Need to complete profile later? </p>
                <button className='span-color text-[14px] '>Click Here</button>
                </div>

</div>
  )
}

export default CompleteProfile