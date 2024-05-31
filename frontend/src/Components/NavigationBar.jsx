import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , useNavigate} from 'react-router-dom';


const NavigationBar = () => {

  const handleLogout = ()=>{
    localStorage.removeItem('authToken')
    navighate("/login")
  }


  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
            <div className='d-flex container-fluid'>
              <Link className='navLink' to="/"> <h1>CompanyName</h1> </Link>
              <Nav className="me-auto">
                <ul className='navbar-nav' style={{listStyle:'none'}}>
                  <li className='nav-item'><Link className='btn btn-info navLink' to="/">Home</Link></li>
                  <li className='nav-item'><Link className='btn btn-info navLink' to="/addFood">Add Food Item</Link></li>
                  <li className='nav-item'>
                    {(localStorage.getItem('authToken')?<div className='nav-item'><Link className='btn btn-warning navLink' to="/">My Orders</Link></div>:'')}
                  </li>
                   
                </ul>
                  
                  
                {(!localStorage.getItem('authToken')? 
                  <div className='d-flex'>
                    <Link className='btn btn-primary navLink' to="/login">Login</Link>
                    <Link className='btn btn-success navLink' to="/signup">Signup</Link>
                  </div>  
                  :
                  <div>
                    <Link className='btn btn-success navLink' to="/cart">Cart</Link>
                    <Link className='btn navLink text-danger' to="/" onClick={handleLogout}>Logout</Link>
                  </div>
                )}
                  
              </Nav>
            </div>
        </Navbar>
    </div>
  )
}

export default NavigationBar