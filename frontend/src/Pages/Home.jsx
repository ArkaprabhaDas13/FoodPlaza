import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import CardComponent from '../Components/CardComponent';
import CarouselComponent from '../Components/CarouselComponent'


const Home = () => {
    return (
        <div>
            <div><NavigationBar /></div>
            
            <div><CarouselComponent/></div>

            <div><CardComponent /></div>

            <div><Footer /></div>
        </div>
    )
}

export default Home







