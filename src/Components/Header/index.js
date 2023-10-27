import React from 'react'
import {TbMathGreater} from 'react-icons/tb';

export default function Header(){
  return(
    <div style={{paddingLeft:'70px',paddingRight:'70px',backgroundColor:'white',boxShadow:'0px 5px #fcfcfc'}}>
      <div style={{paddingTop:'2px', color:'black', display:'flex', alignItems:'center'}}>
        <p style={{fontWeight:300, marginRight:'8px', fontSize:'12px'}}>Orders</p>
        <TbMathGreater size={10}  />
        <p style={{fontWeight:300, marginLeft:'8px', fontSize:'12px', textDecoration:'underline'}}>Order 32457ABC</p>
      </div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2px'}}>
        <p style={{fontWeight:'bold', fontSize:'18px'}}>Order 32457ABC</p>
        <div>
          <button style={{borderRadius:'12px', outline:'none', border:'1px solid #265c39', backgroundColor:'white', padding:'5px 10px',color:'#265c39', fontSize:'12px', marginRight:'10px'}}>Back</button>
          <button style={{borderRadius:'12px', outline:'none', border:'1px solid #265c39', backgroundColor:'#265c39', padding:'5px 10px',color:'white', fontSize:'12px', marginRight:'10px'}}>Approve order</button>
        </div>
      </div>
    </div>
  )
}
