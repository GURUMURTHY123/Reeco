import React, {Component} from 'react'
import ShippingDetails from '../ShippingDetails'
import Products from '../Products'
import {sampleProducts} from '../../data.js'

class Order extends Component{
  state = {productsList:sampleProducts}

  updateStatus = async (id, statusText) =>{
    console.log('clicked')
    const {productsList} = this.state
    const updatedProductsList = productsList.map((eachProduct)=>{
      if(eachProduct.id===id){
        eachProduct.status = statusText
      }
      return eachProduct
    })
    await this.setState({productsList:updatedProductsList})
  }

  render(){
    const {productsList} = this.state
    return(
      <div style={{paddingLeft:'70px',paddingRight:'70px',backgroundColor:'#edf4f7', paddingTop:'30px', maxHeight:'80vh', overflow:'scroll'}}>
        <ShippingDetails />
        <Products productsData={productsList} updateStatus={this.updateStatus}/>
      </div>
    )
  }
}

export default Order