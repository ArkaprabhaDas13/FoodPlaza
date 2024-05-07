import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { useState } from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {

  const [product, setProduct] = useState('empty');

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
