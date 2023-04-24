import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Form() {
  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
      >
        <Stack 
            spacing={10} 
            maxW={{ base: "xl", md: "3xl" }} 
            py={12} 
            px={6}
            
        >
          <Box
            w={{ base: "380px", md: "750px" }}
            borderRadius={"2xl"}
            bg={"#F9F9F9"}
            boxShadow={"0px 17px 44px rgba(179, 179, 179, 0.25)"}
            p={8}
          >
            <Stack spacing={6}>
              <HStack spacing={10}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Job Title</FormLabel>
                    <Input w={{base: '150px' , md: 'xs'}} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Job Location</FormLabel>
                    <Input w={{base: '150px' , md: 'xs'}} type="text" />
                  </FormControl>
                </Box>
              </HStack>

              <HStack spacing={10}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Job Mode</FormLabel>
                    <Input w={{base: '150px' , md: 'xs'}} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Apply URL</FormLabel>
                    <Input w={{base: '150px' , md: 'xs'}} type="text" />
                  </FormControl>
                </Box>
              </HStack>
              
              <Box>
                <FormControl id="summery" isRequired>
                  <FormLabel>About Job</FormLabel>  
                  <Textarea h={'200px'} placeholder="responsibilities" w={{base: '150px' , md: '2xl'}} type="text" />
                </FormControl>
              </Box>

              <Stack spacing={10} pt={2}  m={'auto'}>
                <Button
                  m={'auto'}
                  loadingText="Submitting"
                  p={{base: '10px', md: '20px'}}
                  w={{base: 'xs' , md: '150px'}}
                  h={{base: 'xs' , md: '50px'}}
                  bg={"#242331"}
                  rounded={"full"}
                  color={"white"}
                >
                  Send Message
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
