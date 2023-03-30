import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { stateHolder } from '../context/reducer'
import { useGlobal } from '../context/store'
import { auth, provider } from '../firebase'

function NavBar() {
  const navigation = useNavigate()
  const [{user},dispatch]=useGlobal()
  const navigator = (url) => {
    navigation(url)
  }
  const login = async () => {
    const { user } = await signInWithPopup(auth, provider)
    dispatch({type:stateHolder.SetUser,user:user})
    console.log(user)
    localStorage.setItem('user-credential',JSON.stringify(user))
  }
  const logout=()=>{
    signOut(auth)
    dispatch({type:stateHolder.RemoveUser,user:null})
    localStorage.removeItem('user-credential')
    navigation('/')
  }
  return (
    <>
      <div className="nav-bar">
        <nav className="nav">
          <h1>Al-Haya</h1>
          <ul className="ul">
            <li onClick={() => navigator('/')}>Home</li>
            {user?(
              <>
               <li onClick={() => navigator('/cart')}>Cart</li>
               <img src={user.photoURL} alt="" />
               <li onClick={logout}>Logout</li>
              </>
            ):(
              <>
               <li onClick={login}>Login</li>
              </>
            )
            }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar