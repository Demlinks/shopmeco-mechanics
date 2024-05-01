import React from 'react'
import '../index.css'

const AlmostDone = () => {
  return (
    <div className='almostDone   md:w-[450px] mt-8'>
    <label className='input-details'>Workshop Photo</label> <br/>
<input type="file" placeholder='Enter your fullname' className='mt-1  border-2 border-gray-300 w-full rounded-lg p-3 span-color font-medium outline-color  text-[14px]' required/><br/> <br/>
<label htmlFor="" className='input-details'>Required Services</label>
<div className='relative inline-block w-full'> 
<select className="select-service w-full  border-2 border-gray-300 rounded-lg  span-color font-medium  mt-1 block appearance-none   hover:border-gray-500 p-6  shadow focus:outline-none focus:shadow-outline"
    defaultValue="default">
<option disabled value="default">Select an option</option>
    <option value="option1">option1</option>
    <option value="option2">option2</option>
    <option value="option3">option3</option>
    <option value="option4">option4</option>
    <option value="option5">option5</option>
    
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4 span-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  </div>

<div className='font-semibold  whitespace-nowrap justify-end hidden md:flex md:pe-4 mt-4'>
                <p className=' small-text me-1'>Need to complete profile later? </p>
                <button className='span-color text-[14px] '>Click Here</button>
                </div>

</div>
  )
}

export default AlmostDone