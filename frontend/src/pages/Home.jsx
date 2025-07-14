import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Location from '../components/Location'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Hero/>
        <Newsletter/>
        <Location/>
        <Footer/>
    </>
  )
}

export default Home