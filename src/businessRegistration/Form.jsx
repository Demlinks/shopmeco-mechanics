import React , {useState}from 'react'
import '../index.css'

import ShopMecoGradient from '../constants/ShopMecoGradient'

const Form = () => {
    const [page, setPage] = useState(0)
    const FormTitles = ["Register Business Account", "Complete Profile", "Almost Done", "Subscription"]
  return (
    <div className='md:flex md:flex-row  h-screen w-full'>
    <ShopMecoGradient/>
    <div className='md:w-7/12 w-full  md:flex md:justify-center md:py-[68px]'>
        <div className='flex justify-between'>
            <div></div>
            <div></div>
        </div>
        <div className="header">
            <h1>{FormTitles[page]}</h1>
        </div>


<button 
disabled={page == FormTitles.length - 1}
onClick={() => {
setPage((currentPage) => currentPage + 1)
}} 
>
Next
</button>
    </div>
    </div>
  )
}

export default Form