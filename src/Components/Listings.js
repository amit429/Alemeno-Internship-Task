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
  Link,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import WebFont from "webfontloader";
import { useEffect } from "react";

export default function Listings() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nunito:300,400,700,800"],
      },
    });
  }, []);

  const jobs = [
    {
      title: "Web Designer & Developer",
      location: "San Francisco, CA",
      type: "Part Time",
      desc: "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout.",
    },
    {
      title: "Front-end developer",
      location: "San Francisco, CA",
      type: "Part Time",
      desc: "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout.",
    },
    {
      title: "SEO Specialist",
      location: "San Francisco, CA",
      type: "Full Time",
      desc: "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout.",
    },
    {
      title: "UI / UX Designer",
      location: "San Francisco, CA",
      type: "Full Time",
      desc: "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout.",
    },
    {
      title: "Backend Developer",
      location: "San Francisco, CA",
      type: "Part Time",
      desc: "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout.",
    },
    {
      title: "Content Wrtiter",
      location: "San Francisco, CA",
      type: "Part Time",
      desc: "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout.",
    },
  ];

  return (
    <>
      <Heading
        style={{
          marginTop: "50px",
        }}
        textAlign={"center"}
        fontSize={"4xl"}
        fontFamily={"Nunito"}
        mb={4}
      >
        Current job open positions
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
          {jobs.map((job) => (
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
                bg: "#0C5BC6",
                color: "white",
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
                  {job.title}
                </Heading>
                <Text fontFamily={"Nunito"} color={"gray.500"} size="sm" mb={4}>
                  {job.location} | <Link color={"blue"}>{job.type}</Link>
                </Text>

                <Text
                  color={"gray.500"}
                  style={{
                    fontSize: "14px",
                    marginBottom: "40px",
                    marginTop: "20px",
                  }}
                >
                  {job.desc}
                </Text>

                <Button
                  w={"30%"}
                  h={"40px"}
                  bg={"white"}
                  border={"1px"}
                  fontSize={"sm"}
                  rounded={"full"}
                  fontFamily={"Nunito"}
                >
                  Apply Now
                </Button>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}
