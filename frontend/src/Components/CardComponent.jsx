import React, { useState, useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatchCart, useCart } from './ContextReducer';
// import { Link } from 'react-router-dom';

const CardComponent = (props) => { 

    const dispatch = useDispatchCart();
    let data = useCart();
    
    
    const foodItem = props.foodItems;
    const [quantity, setQuantity] = useState(1);
    
    const handleAddToCart = async ()=>{
        console.log(typeof(dispatch));
        await dispatch({type:"ADD", id:foodItem._id, name:foodItem.name, price:foodItem.price, quantity:quantity})
        
        console.log(data)
    }
    
    const p = parseFloat(foodItem.price);
    
    return (
        <div>

            <Card className='card' style={{ width: '16rem' , height:'23rem'}}>
                <Card.Img vxariant="top" src={foodItem.imgPath} style={{width:'16rem', height:'10rem'}}/>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{foodItem.name}</Card.Title>
                    <div className="container w-100 p-0">
                        <select className='m-0 h-100 w-40 bg-white rounded' id="" onChange={(e)=>{setQuantity(e.target.value)}}>
                            {Array.from(Array(8), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <div className="price">
                            <p><b className='fs-4'>{foodItem.price}</b></p>
                        </div>

                        <div>{p * quantity}</div>

                        <hr />

                        <Button variant="primary" onClick={handleAddToCart} >Add to Cart</Button>
                    </div>

                </Card.Body>
            </Card>

        </div>
    )
}

export default CardComponent