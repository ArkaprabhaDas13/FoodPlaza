import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

const Signup = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] =  useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/createUser', {name, password, email, location})
            console.log("Successfully POSTED!")
            console.log(response)
        }catch(error){
            console.log("ERROR in POST request !!", error)
        }
    }

    return (
        <div className='container' style={{maxWidth:'30%', alignItems:'center'}}>
            <form id='form' action="" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" value={name} className="form-control" onChange={(e)=>setName(e.target.value)} placeholder=" Name" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" value={email} className="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="password" value={password} className="form-control" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" value={location} className="form-control" onChange={(e)=>{setLocation(e.target.value)}} placeholder="Location" aria-label="Location" aria-describedby="basic-addon1" />
                </div>
                <div>
                    <Button type='submit'>Signup</Button>
                </div>
                <div>
                    <Link to='/login' style={{textDecoration:'none'}}> Already a User </Link>
                </div>
            </form>
        </div>
    )
}

export default Signup