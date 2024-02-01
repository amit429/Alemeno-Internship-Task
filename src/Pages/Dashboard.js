import React, { useEffect } from 'react'
import { Heading ,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Center,
  Progress
} from "@chakra-ui/react";
import { useState } from 'react';

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [completeStatus, setCompleteStatus] = useState("Mark as Complete");
  const [progress, setProgress] = useState(64);
  const [bg , setBg] = useState("white");

  const getCourses = async () => {
    const response = await fetch("http://localhost:3030/courses");
    const data = await response.json();
    console.log(data);
    setCourses(data);
  }

  const getEnrolledCourses = async () => {
     const data = courses.flatMap(course => 
      course.students.some(student => student.id === 101) ? [course] : []
    );
    setEnrolledCourses(data);
    console.log(data);
    const student = courses.flatMap(course =>
      course.students.find(student => student.id === 101)
    )[0];
    setStudentName(student.name);
  }

  const handleCompleteStatus = (courseId) => {
    setEnrolledCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? { ...course, completeStatus: "Completed", progress: 100, bg: "green" }
          : course
      )
    );
  };

  useEffect(() => {
    getCourses();
    getEnrolledCourses();
  }, []);

  useEffect(() => {
    getEnrolledCourses();
  }, [courses]); 

  return (
    <>
      <Heading
        style={{
          marginTop: "30px",
        }}
        textAlign={"center"}
        fontSize={"4xl"}
        fontFamily={"Nunito"}
        mb={4}
      >Dashboard</Heading>
      {enrolledCourses.length > 0 ? (
        <>
        <Heading
          style={{
            marginTop: "30px",
          }}
          textAlign={"center"}
          fontSize={"4xl"}
          fontFamily={"Nunito"}
          mb={4}
        >Hello {studentName}, Here are your Enrolled Courses</Heading>
        <Center
        style={{
          marginTop: "120px",
          marginBottom: "100px",
          fontFamily: "Nunito",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "auto",
        }}
        py={6}
      >
        <SimpleGrid columns={{ base: 1, md: 1 , lg: 2 , xl: 3 }} spacing={10}>
          {enrolledCourses.map((course) => (
            <Stack
              borderWidth="1px"
              borderRadius="2xl"
              w={{ sm: "100%", md: "540px" }}
              height={{ sm: "476px", md: "18rem" }}
              direction={{ base: "column", md: "row" }}
              boxShadow={"sm"}
              padding={4}
              spacing={4}
              maxW={"md"}
              mb={4}
              mr={4}
              _hover={{
                transform: "translateY(-2px)",
                // bg: "#0C5BC6",
                // color: "white",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Stack
                flexDirection="column"
                justifyContent="left"
                alignItems="left"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"Nunito"}>
                  {course.name}
                </Heading>
                <Text fontFamily={"Nunito"} color={"gray.500"} size="sm" mb={4}>
                  {course.location} | <span color={"blue"}>{course.enrollmentStatus}</span> | <span color={"blue"}>{course.duration}</span>
                </Text>

                <Text fontFamily={"Nunito"} color={"gray.500"} size="sm" mb={4}>
                  <b>Instructor Name :</b> {course.instructor}
                </Text>

                <Text
                  color={"gray.500"}
                  style={{
                    fontSize: "16px",
                    marginBottom: "30px",
                    marginTop: "20px",
                  }}
                >
                  Due Date : 27th June 2024
                </Text>
                <Progress hasStripe value={course.progress || progress} style={{
                  marginBottom: "10px",
                }}/>
                <Button
                  w={"50%"}
                  h={"40px"}
                  bg={course.bg || bg}
                  border={"1px"}
                  fontSize={"sm"}
                  rounded={"full"}
                  fontFamily={"Nunito"}
                  as={'a'}
                  onClick={()=>{
                    handleCompleteStatus(course.id)
                  }}
                >
                  {course.completeStatus || "Mark as Complete"}
                </Button>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        </Center>
        </>
      ) : (
        <Heading
          style={{
            marginTop: "30px",
          }}
          textAlign={"center"}
          fontSize={"4xl"}
          fontFamily={"Nunito"}
          mb={4}
        >No Enrolled Courses</Heading>
      )}
    </>
  )
}
