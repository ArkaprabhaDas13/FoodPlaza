import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'



const AddFood = () => {

    const navigate = useNavigate()

    const[name, setName]=useState('')
    const [categoryName, setcategoryName] = useState('')
    const [imgPath, setimgPath] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    // FUNCTION to send POST request to '/createFood'
    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        try{
            const foodData = await axios.post('http://localhost:3000/createFood', { name, categoryName, imgPath, price, description})
            console.log("Successfully created FOOD ITEM !!", foodData)
            navigate("/")
        }catch(error){
            console.error("ERROR in POSTING Food ITEM !!", error)
        }
    }

    return (
        <div>
            <div className='container' style={{ maxWidth: '30%', alignItems: 'center' }}>
                <form id='form' action="" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} placeholder=" Name" />
                    </div>
                    <div className="input-group mb-3">
                        <ul>
                            <li>Indian</li>
                            <li>Itaian</li>
                            <li>Chinese</li>
                        </ul>
                        <input type="text" value={categoryName} className="form-control" onChange={(e) => { setcategoryName(e.target.value) }} placeholder="categoryName" aria-label="categoryName" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" value={imgPath} className="form-control" onChange={(e) => { setimgPath(e.target.value) }} placeholder="imgPath" aria-label="imgPath" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" value={price} className="form-control" onChange={(e) => { setPrice(e.target.value) }} placeholder="Price" aria-label="price" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <textarea style={{height:'100px'}} type="text" value={description} className="form-control" onChange={(e) => { setDescription(e.target.value) }} placeholder="Description" aria-label="description" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <Button type='submit'>Create New Food Item</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddFood