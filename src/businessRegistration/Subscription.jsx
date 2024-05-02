import React from "react"

import '../index.css'


const Subscription = ({formData, setFormData}) => {
  return (
    <>
    
<div className="mt-14  ">
  <ol className="mt-8">
    <div className="flex">
        <input type="checkbox" 
        className="me-2 " 
         name="checkbox2"
         checked={formData.checkbox2}
         onChange={(e) => setFormData({...formData, checkbox2: e.target.checked})}
        />
        <p className="input-details">Get marketing and promotional support which will improve your visibility.</p>
    </div>

 </ol>
  <ol className="mt-8">
    <div className="flex ">
        <input type="checkbox"
         className="me-2 "
         name="checkbox3"
         checked={formData.checkbox3}
         onChange={(e) => setFormData({...formData, checkbox3: e.target.checked})} />
        <p className="input-details">Gain access to a pool of potential clients actively seeking automotive services.</p>
    </div>
    </ol>

  <ol className="mt-8">
    <div className="flex ">
        <input type="checkbox" className="me-2 "
         name="checkbox4"
         checked={formData.checkbox4}
         onChange={(e) => setFormData({...formData, checkbox4: e.target.checked})} />
        <p className="input-details">Increase your visibility among your peers by continuous exposure to car owners.</p>
    </div>
    </ol>
  <ol className="mt-8">
    <div className="flex ">
        <input type="checkbox" 
        className="me-2 "
        name="checkbox5"
        checked={formData.checkbox5}
        onChange={(e) => setFormData({...formData, checkbox5: e.target.checked})}
         />
        <p className="input-details">Grow your business consistently for 365 days with guaranteed flow of customers and several opportunities.</p>
        </div>
        
</ol>
</div>
</>
  )
}

export default Subscription