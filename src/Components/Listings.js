import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";
import { useEffect , useState } from "react";

export default function Listings() {

  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("http://localhost:3030/courses");
    const data = await response.json();
    console.log(data);
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
    WebFont.load({
      google: {
        families: ["Nunito:300,400,700,800"],
      },
    });
  }, []);

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
      >
        Browse through our courses
      </Heading>
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
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
          {courses.map((course) => (
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
                    marginBottom: "40px",
                    marginTop: "20px",
                  }}
                >
                  {course.description}
                </Text>

                <Button
                  w={"30%"}
                  h={"40px"}
                  bg={"white"}
                  border={"1px"}
                  fontSize={"sm"}
                  rounded={"full"}
                  fontFamily={"Nunito"}
                  as={'a'}
                  onClick={()=>{
                    window.location.href = `/course/${course.id}`
                  }}
                >
                  Enroll Now
                </Button>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}
