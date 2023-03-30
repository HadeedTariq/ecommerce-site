import React, { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import {RxCrossCircled} from 'react-icons/rx'
import { stateHolder } from '../context/reducer'
import { useGlobal } from '../context/store'
import '../css/Home.css'
function Cart() {
  const [{cart},dispatch]=useGlobal()
  const [cartItems,setCartItems]=useState([])
  const [toggle,setToggle]=useState(false)
  const removeCart=(product)=>{
    dispatch({type:stateHolder.RemoveCart,cart:product})
    setToggle(true)
    setTimeout(() => {
      setToggle(false)
    }, 1200);
  }
  useEffect(()=>{
    setCartItems(cart)
  },[cart])
  return (
    <>
    <div className="cart">
    {toggle &&<div className="display-toggle">
      <RxCrossCircled color='red'/>
      <p>Item removed from cart successfully</p>
    </div>}
     {cartItems?.map((product,index)=>
       <div className="products-column" key={index}>
        <img src={product.imgUrl} alt="" />
        <p>{product.productName}</p>
        <div className="price-list">
          <strong>${product.price}</strong>
          <h3>{product.avgRating} <span><FaRegStar/></span></h3>
        </div>
        <button className="remove" onClick={()=>removeCart(product)}>Remove</button>
       </div>
      )
     }
     </div>
    </>
  )
}

export default Cart