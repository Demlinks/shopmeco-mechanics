import React , {useState}from 'react'
import '../index.css'
import Register from './Register'
import CompleteProfile from './CompleteProfile'
import AlmostDone from './AlmostDone'
import google from '../assets/google.png'
import lock from '../assets/lock_24px.png'
import bar from '../assets/bar.png'
import logo2 from '../assets/logo2.png'

import ShopMecoGradient from '../constants/ShopMecoGradient'
import Button from '../constants/Button'
import Subscription from './Subscription'



const Form = () => {
    const [page, setPage] = useState(0)
    const FormTitles = ["Register Business Account", "Complete Profile", "Almost Done", "Subscription"]
    const ButtonLabels = ["Register Account", "Save & Continue", "Save", "Pay ₦5,000"]
    const pageNumber = ["01","02","03","04"]
    const info = ["Personal Info.", "Service Info.", "Workshop Info.","Subscription"]
    const pageDisplay = () => {
        if(page == 0){
       return <Register/>
        } else if (page == 1){
       return <CompleteProfile/>
        }else if (page == 2){
          return <AlmostDone/>
            } else{
                return <Subscription/>
            }
    }

  return (
    <div className='md:flex md:flex-row  h-screen w-full'>
          <div className='flex items-center md:hidden p-6'>
    <button> 
        <img src={bar} alt="toggle" className='h-[18px] w-[24px] me-6 '/>
    </button>
    <img src={logo2} alt="logo" className='h-[35px]' />
</div>
    <ShopMecoGradient/>
    <div className='md:w-7/12 w-full  md:flex md:justify-center lg:py-[28px] md:py-[18px]  md:px-[20px] '>
<div className='flex flex-col md:w-[400px] lg:w-[500px] mx-auto p-6 md:p-0 w-full '>
        <div className='flex justify-between'>
          <button disabled={page == 0} onClick={() => {
setPage((currentPage) => currentPage - 1)}} >
  <span className='small-text font-bold'> {'<'} back </span>
    </button>
            <div> 
                <span className='span-color font-bold  text-[12px]'>STEP {pageNumber[page]}/04 </span> <br/> <span className='small-text font-semibold'>{info[page]} </span></div>
        </div>
        <div className="header font-bold text-center mt-10 md:text-left">
            <h1>{FormTitles[page]}</h1>
        </div>
        <div className='small-text font-semibold mt-3 text-center md:text-left'>
     {(page == 0 || page == 1 || page == 2) ?
      "Your details are required to get started with providing services." :
       "Subscribing on Shopmeco is your sure tickets to a lot of opportunities as a technician."}
       </div>
        <div>{pageDisplay()}</div>

<Button name={ButtonLabels[page]}  disabled={page == FormTitles.length - 1} onClick={() => {
setPage((currentPage) => currentPage + 1)}}  >


</Button>
{page == 0 && 
<div className=''>
<div className='mt-4 flex justify-center  items-center'>
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
     </div>
}
     <div className='flex justify-center items-center mt-4 small-text font-bold' >
        <img src={lock} alt="lock"  className='me-2'/>
<p>Your Information is safely secured</p>
</div>
    </div>
    </div>
    </div>
  )
}

export default Form