import React, { useEffect, useState } from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import CardComponent from '../Components/CardComponent';
import CarouselComponent from '../Components/CarouselComponent'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { CartProvider } from '../Components/ContextReducer';

const Home = () => {

    const [search, setSearch] = useState('')
    const [foodData, setFoodData] = useState([])
    const [categoryData, setCategoryData] = useState([])


    const fetchData = async () => {
        const resData = await axios.get('http://localhost:3000/getAllFood')
        console.log("FOOD DATA = ", resData.data)

        // resData = resData.data
        let arr = resData.data

        // Here the foodData and categoryData cannot be logged in the console because the update wont be reflected here as state update is an asynchronous function

        setFoodData(arr[0])
        setCategoryData(arr[1])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div><NavigationBar /></div>

            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/random/800x400?fruits"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="form-inline my-2 my-lg-0 justify-content-center">

                                {/* SEARCH NOT WORKING !!!! */}
                                {/* RESOLVED : We have to put it for every individual Carousel */}

                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value); console.log(search) }} />
                                <button style={{ color: "white" }} className="btn bg-success btn-outline-success m-2 my-2 my-sm-0" type="submit">Search</button>
                            </div>
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
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value); console.log(search) }} />
                                <button style={{ color: "white" }} className="btn bg-success btn-outline-success m-2 my-2 my-sm-0" type="submit">Search</button>
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
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value); console.log(search) }} />
                                <button style={{ color: "white" }} className="btn bg-success btn-outline-success m-2 my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className="container">

                {categoryData != [] ? categoryData.map((data) => {
                    return (<div key={data._id} className='row mb-3'>
                        <h1 className=''>{data.categoryName}</h1>
                        <hr />

                        {foodData != [] ? 
                            foodData.filter((food) => (food.categoryName == data.categoryName) && (food.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                .map((filterItem) => {
                                    return (
                                        <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                                            {filterItem.name}
                                            <CardComponent foodItems={filterItem} />
                                        </div>
                                    )
                                }) 
                            : 
                            <div>No such data found</div>
                        }

                    </div>
                    )
                })
                    :
                    <div>Empty</div>
                }
            </div>

            {/* <div><CardComponent /></div> */}

            <div><Footer /></div>
        </div>
    )
}

export default Home







