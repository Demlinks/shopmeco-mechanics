import React from 'react'
import '../index.css'

const Button = (props) => {
    const handleClick = () => {
        props.onClick()
    }
  return (
   <button className='md:w-[450px] w-full rounded-lg btn-color py-3 mt-10 text-white bg-span-color hover:opacity-90 font-semibold' onClick={handleClick} disabled={props.disabled}>{props.name}</button>
  )
}

export default Button