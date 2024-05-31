import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { useState } from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddFood from './Pages/AddFood';
import Cart from './Pages/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Components/ContextReducer';


function App() {
  const [product, setProduct] = useState('empty');

  return (
    <>
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/addFood' element={<AddFood/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
    </>
  )
}

export default App
