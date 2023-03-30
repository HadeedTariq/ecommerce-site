import React, { useEffect, useState } from 'react'
import { useGlobal } from '../context/store'
import {FaRegStar,FaCheck} from 'react-icons/fa'
import { stateHolder } from '../context/reducer'

function Main() {
  const [items,setItems]=useState([])
  const [loading,setLoading]=useState(false)
  const [toggle,setToggle]=useState(false)
  const [{category,user},dispatch]=useGlobal()
  const setCart=(product)=>{
    if(user){
    dispatch({type:stateHolder.SetCart,cart:product})
    setToggle(true)
    setTimeout(() => {
      setToggle(false)
    }, 1200);
    }
    else{
      alert("Please Signup for this action")
    }

  }
  useEffect(()=>{
    setItems(category)
    setLoading(true)
  },[category])
  if(!loading){
    return <h1 style={{textAlign:"center"}}>Loading...</h1>
  }
  return (
    <>
    {toggle &&<div className="display-toggle">
      <FaCheck color='green'/>
      <p>Item added to cart successfully</p>
    </div>}
     {
      loading && items.map((product,index)=>
       <div className="products-column" key={index}>
        <img src={product.imgUrl} alt="" />
        <p>{product.productName}</p>
        <div className="price-list">
          <strong>${product.price}</strong>
          <h3>{product.avgRating} <span><FaRegStar/></span></h3>
        </div>
        <button onClick={()=>setCart(product)}>Add to Cart</button>
       </div>
      )
     }
    </>
  )
}

export default Main