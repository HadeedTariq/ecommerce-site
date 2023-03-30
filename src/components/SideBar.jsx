import React, { useEffect, useState } from 'react'
import { stateHolder } from '../context/reducer';
import { useGlobal } from '../context/store';
import products from '../utils/data/products'

function SideBar() {
  const [category,setCategory]=useState([]);
  const Capital=(item)=>{
    return item.slice(0,1).toUpperCase()+item.slice(1)
  }
  const [{hamBurger},dispatch]=useGlobal()
  const setProduct=(item)=>{
    dispatch({type:stateHolder.SetDisplay,display:{transform:"translateY(-140%)"}})
    dispatch({type:stateHolder.SetHam,ham:!hamBurger})
    if(item!=="All"){
     dispatch({type:stateHolder.SetCategory,category:item})
    }else{
      dispatch({type:stateHolder.SetAll,category:products}) 
    }
  }
  useEffect(()=>{
    const data=products.map((prod)=>prod.category)
    const cat=["All",...data.filter((item,index)=>data.indexOf(item)===index)]
    setCategory(cat)
  },[])
  return (
    <>
      {
        category?.map((item,index)=>
         <div className="side-bar-component" key={index}>
          <h3 onClick={()=>setProduct(item)}>{Capital(item)}</h3>
         </div>
        )
      }
    </>
  )
}

export default SideBar