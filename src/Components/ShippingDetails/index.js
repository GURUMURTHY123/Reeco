import React from 'react'
import {shippingData} from '../../data.js'

const ShippingDetails = () =>{
  return(
    <div style={{border:'2px solid #e1e8e7', borderRadius:'10px', display:'flex', backgroundColor:'white', padding:'5px 35px', marginBottom:'20px'}}>
      {shippingData.map((eachItem,index)=>(
        <>
          <div style={{width:'150px', display:'flex', flexDirection:'column', marginTop:'10px'}} key={eachItem.label}>
            <p style={{fontWeight:300, fontSize:'14px', marginBottom:'0px'}}>{eachItem.label}</p>
            <p style={{fontWeight:800, fontSize:'20px', marginTop:'8px'}}>{eachItem.text}</p>
          </div>
          {index!==(shippingData.length-1) && <hr style={{width:'1px', borderColor:'white'}} />}
        </>
      ))}
    </div>
  )
}

export default ShippingDetails