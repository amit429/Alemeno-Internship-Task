import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import JobDescription from '../Components/JobDescription'

export default function Job() {
  return (
    <>
        <Navbar/>
        <Header
            title= "Web Designer & Developer"
            description="San Francisco, CA | Full Time"
            button="Apply Now"
        />
        <JobDescription/>
    
    
    </>
  )
}
