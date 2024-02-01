import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import IntroPhotos from '../Components/IntroPhotos'
import Values from '../Components/Values'
import Listings from '../Components/Listings'
import Footer from '../Components/Footer'

export default function Landing() {
  return (
    <>
        <Navbar/>
        <Header
          title="Courses for your Development"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
          nterdum ullamcorper sed pharetra sene."
          button="Browse Open Positions"
        />
        <IntroPhotos/>
        {/* <Values/> */}
        <Listings/>
        <Footer/>
    
    </>
  )
}
