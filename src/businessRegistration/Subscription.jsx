import React from "react"
import '../index.css'
const Subscription = () => {
  return (
<div className="mt-14  md:w-[450px]">
  <ol className="mt-8">
    <div className="flex">
        <input type="checkbox" className="me-2 " />
        <p className="input-details">Get marketing and promotional support which will improve your visibility.</p>
    </div>

 </ol>
  <ol className="mt-8">
    <div className="flex ">
        <input type="checkbox" className="me-2 " />
        <p className="input-details">Gain access to a pool of potential clients actively seeking automotive services.</p>
    </div>
    </ol>

  <ol className="mt-8">
    <div className="flex ">
        <input type="checkbox" className="me-2 " />
        <p className="input-details">Increase your visibility among your peers by continuous exposure to car owners.</p>
    </div>
    </ol>
  <ol className="mt-8">
    <div className="flex ">
        <input type="checkbox" className="me-2 " />
        <p className="input-details">Grow your business consistently for 365 days with guaranteed flow of customers and several opportunities.</p>
        </div>
        
</ol>
</div>
  )
}

export default Subscription