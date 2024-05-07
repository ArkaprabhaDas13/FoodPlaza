
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';


const CarouselComponent = () => {

  return (
    <div >

      <Carousel className='d-block' id='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400?fruits"
            alt="First slide"
          />
          <Carousel.Caption>
          <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button style={{color:"white"}} className="btn bg-success btn-outline-success m-2 my-2 my-sm-0" type="submit">Search</button>
            </form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400?biriyani"
            alt="Second slide"
          />
          <Carousel.Caption>
          <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button style={{color:"white"}} className="btn bg-success btn-outline-success m-2 my-2 my-sm-0" type="submit">Search</button>
            </form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400?pizza"
            alt="Third slide"
          />
          <Carousel.Caption>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button style={{color:"white"}} className="btn bg-success btn-outline-success m-2 my-2 my-sm-0" type="submit">Search</button>
            </form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </div>
  )
}

export default CarouselComponent