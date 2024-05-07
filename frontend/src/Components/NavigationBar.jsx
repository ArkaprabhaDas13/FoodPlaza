import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Link className='navLink' to="/"> <h1>CompanyName</h1> </Link>
              <Nav className="me-auto">
                  <Link className='navLink' to="/">Home</Link>
                  <Link className='navLink' to="/features">Features</Link>
                  <Link className='navLink' to="/pricing">Pricing</Link>
                  <Link className='navLink' to="/login">Login</Link>
              </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar