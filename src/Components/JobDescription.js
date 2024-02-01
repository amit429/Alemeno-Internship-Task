import {
  ListItem,
  Stack,
  UnorderedList,
  Box,
  Text,
  Button,
  HStack,
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import WebFont from "webfontloader";
import { useEffect } from "react";

export default function JobDescription(props) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nunito:300,400,700,800"],
      },
    });
  }, []);

  return (
    <>
      <Box
        bg={"gray.100"}
        maxW={{ base: "xl", md: "4xl" }}
        mx={"auto"}
        rounded={"2xl"}
        p={5}
        mt={5}
        mb={5}
      >
        <Stack
          spacing={4}
          align={"flex-start"}
          direction={{ base: "column", md: "column" }}
          fontFamily={"Nunito"}
          p={4}
        >
          <Text fontSize={"3xl"} fontWeight={600} fontFamily={"Nunito"}>
            Description
          </Text>
          <Text color={"#797979"} fontSize={"lg"}>
            <b>{props.description}</b>
          </Text>

          <Text color={"#797979"} fontSize={"lg"}>
            <b>Course Duration : {props.duration} </b>
          </Text>

          <Text color={"#797979"} fontSize={"lg"}>
            <b>Schedule : {props.schedule} </b>
          </Text>

          <Text color={"#797979"} fontSize={"lg"}>
            <b>
              Prerequisites : {props.prerequisites[0]} ,{" "}
              {props.prerequisites[1]}{" "}
            </b>
          </Text>

          <Text fontSize={"3xl"} fontWeight={600} fontFamily={"Nunito"}>
            Syllabus
          </Text>
          <Accordion allowToggle minW={{base : 'lg' , md : '2xl'}}>
            {props.syllabus.map((syllabus) => (
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                        Week {syllabus.week}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <b>{syllabus.topic}</b><br/>
                        <b>{syllabus.content}</b>
                    </AccordionPanel>
                </AccordionItem>
            ))}
          </Accordion>
          <Text fontSize={"3xl"} fontWeight={600} fontFamily={"Nunito"}>
            Instructor
          </Text>
          <HStack
            spacing={4}
            align={"space-around"}
            direction={{ base: "column", md: "row" }}
            fontFamily={"Nunito"}
            p={4}
          >
            <Avatar
              size={"md"}
              src={"https://avatars.githubusercontent.com/u/81866624?v=4"}
              alt={"Author"}
            />

            <Text
              color={"#797979"}
              fontSize={"xl"}
              style={{
                marginBottom: "20px",
              }}
            >
              <b color="black">{props.instructor}</b>
              <br />
            </Text>
          </HStack>

          <Button
            w={"15%"}
            h={"40px"}
            bg={"#242331"}
            rounded={"full"}
            color={"white"}
            as={"a"}
          >
            Enroll Now
          </Button>
        </Stack>
      </Box>
    </>
  );
}
