import React from 'react'
import axios from 'axios'
import { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'


const Login = () => {
  
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/loginUser', {email, password})

      if(response)
      {
        console.log("Response Received..")
        console.log("Response = ",response)
        console.log("Response.DATA: ",response.data)

        if(response.data.message != "User not found !!")
        { 
          // Here we are storing the TOKEN in the LOCALSTORAGE
          localStorage.setItem("authToken",response.data.authToken)
          console.log(localStorage.getItem("authToken"))
          navigate("/") 
          setError(false)
        }
        else{
          setEmail('')
          setPassword('')
          setError(true)
          return(<p>Login Unsuccessful</p>)
        }
      }
      else{
        console.log("Error in fetching 'response' variable VALUE!!")
      }
    } catch (error) {
      console.log("ERROR in POST request !!", error)
    }
  }

  

  return (
    <div className='container' style={{maxWidth:'30%', alignItems:'center'}}>
      <form id='form' action="" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type="text" value={email} className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="password" value={password} className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
        </div>
        <div>
          <Button type='submit'>Login</Button>
        </div>
        <div>
          <Link to='/signup' style={{ textDecoration: 'none' }}> Create an account </Link>
        </div>
        <div>
          {error && <p style={{color:'red', fontWeight:'bold'}}>Wrong Login Credentials !</p>}
        </div>
      </form>

    </div>
  )
}

export default Login