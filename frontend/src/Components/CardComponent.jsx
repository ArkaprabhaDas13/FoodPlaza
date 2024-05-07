import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = () => {
    return (
        <div>

            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img vxariant="top" src={"data:image/jpeg;base64,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"} />
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>Title</Card.Title>
                    <Card.Text className='card-text'>
                        Text text text
                    </Card.Text>
                    <div className="container w-100 p-0">
                        <select className='m-0 h-100 w-40 bg-white rounded' id="">
                            {Array.from(Array(8), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 w-40 bg-white rounded' id="">
                            <option value="Half">Half</option>
                            <option value="Full">Full</option>
                        </select>

                        <div className="price">
                            <p><b className='fs-4'>Rs300</b></p>
                        </div>

                        <Button variant="primary">Add to Cart</Button>
                    </div>

                </Card.Body>
            </Card>

        </div>
    )
}

export default CardComponent