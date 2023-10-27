import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiPrinter} from 'react-icons/fi'
import ProductDetails from '../ProductDetails'

const Products = props =>{
  const {productsData, updateStatus} = props
  return(
    <div style={{border:'2px solid #e1e8e7', borderRadius:'10px', backgroundColor:'white', padding:'20px 35px'}}>
      <div style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', marginBottom:'15px'}}>
        <div style={{borderRadius:'15px', display:'flex', alignItems:'center', border:'1px solid #e1e8e7', outline:'none', padding:'5px', width:"300px"}}>
          <input type="text" style={{width:'80%', border:'none', paddingLeft:'8px', paddingRight:'5px', fontSize:"12px", outline:'none', overflow_X:'scroll'}} placeholder='search...' />
          <AiOutlineSearch size={20} style={{width:'20%'}} />
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
          <button style={{borderRadius:'12px', outline:'none', border:'1px solid #265c39', backgroundColor:'white', padding:'5px 10px',color:'#265c39', fontSize:'12px', marginRight:'10px'}}>Add Item</button>
          <FiPrinter size={20} style={{color:'#265c39', marginLeft:'10px'}} />
        </div>
      </div>
      <div style={{border:'2px solid #e1e8e7', borderTopLeftRadius:'10px', borderTopRightRadius:'10px', display:'flex', paddingLeft:'30px'}}>
        <p style={{width:'250px', marginLeft:'40px'}}>Product name</p>
        <p style={{width:'150px', marginLeft:'40px'}}>Brand</p>
        <p style={{width:'100px', marginLeft:'10px'}}>Price</p>
        <p style={{width:'100px', marginLeft:'10px'}}>Quantity</p>
        <p style={{width:'100px', marginLeft:'10px'}}>Total</p>
        <p style={{width:'100px', marginLeft:'20px'}}>Status</p>
      </div>
      {productsData.map((eachProduct, index)=>(
        <ProductDetails eachProduct = {eachProduct} updateStatus={updateStatus} />
      ))}
    </div>
  )
}

export default Products