import React from 'react'
import { Main, SideBar } from '../components'
import {RxHamburgerMenu,RxCross1} from "react-icons/rx"
import  '../css/Home.css'
import { useGlobal } from '../context/store'
import { stateHolder } from '../context/reducer'
function Home() {
  const [{hamBurger,display},dispatch]=useGlobal()
  const toggleHamBurger=()=>{
    if(!hamBurger){
    dispatch({type:stateHolder.SetHam,ham:!hamBurger})
    dispatch({type:stateHolder.SetDisplay,display:{transform:"translateY(-140%)"}})
    }
    else{
      dispatch({type:stateHolder.SetHam,ham:!hamBurger})
      dispatch({type:stateHolder.SetDisplay,display:{transform:"translateY(0%)"}})
    }
  }
  return (
    <>
     <div className="home">
      <div className="ham-bar" onClick={toggleHamBurger}>
        {hamBurger?
        <RxHamburgerMenu size={25}/>:
        <RxCross1 size={25}/>
      }
      </div>
      <div className="side-bar" style={display}>
        <SideBar/>
      </div>
      <div className="main">
        <Main only/>
      </div>
     </div>
    </>
  )
}

export default Home