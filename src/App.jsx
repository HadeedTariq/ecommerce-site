import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import {Cart, Header, Home, Product} from './pages'
function App() {
  return (
  <>
  <div className="app">
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </Router>
   </div>
  </>
  )
}

export default App
