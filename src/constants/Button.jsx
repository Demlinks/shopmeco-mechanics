import React from 'react'
import '../index.css'

const Button = ({name}) => {
  return (
   <button className='w-full rounded-lg btn-color py-3 mt-10 text-white bg-span-color hover:opacity-90 font-semibold'>{name}</button>
  )
}

export default Button