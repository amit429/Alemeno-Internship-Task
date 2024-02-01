import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import JobDescription from '../Components/JobDescription'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetails() {

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState();
  const id = useParams();

  const getCourse = async () => {
    try {
      const response = await fetch("http://localhost:3030/courses");
      const data = await response.json();
      console.log(data);
      setCourses(data);
      setCourse(data[id.id-1]);
      console.log(course);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCourse();
  }, []);
  
  return (
    <>
        <Navbar/>
        {course && (
      <>
        <Header
          title={course.name}
          description="San Francisco, CA | Full Time"
          button="Apply Now"
        />
        <JobDescription 
          description={course.description}
          duration={course.duration}
          schedule={course.schedule}
          prerequisites={course.prerequisites}
          instructor={course.instructor}
          syllabus={course.syllabus}
        />
        <Footer />
      </>
    )}
    </>
  )
}
