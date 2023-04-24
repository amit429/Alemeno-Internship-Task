import { ListItem, Stack, UnorderedList , Box , Text, Button } from '@chakra-ui/react'
import React from 'react'
import WebFont from "webfontloader";
import { useEffect } from "react";

export default function JobDescription() {

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
            bg={'gray.100'}
            maxW={{ base: 'xl', md: '4xl' }}
            mx={'auto'}
            rounded={'2xl'}
            p={5}
            mt={5}
            mb={5}
        >
            <Stack
                spacing={4}
                align={'flex-start'}
                direction={{ base: 'column', md: 'column' }}
                fontFamily={'Nunito'}
                p={4}
            >
                <Text
                    fontSize={'3xl'}
                    fontWeight={600}
                    fontFamily={'Nunito'}
                >
                    About the role
                </Text>
                <Text
                    color={'#797979'}
                    fontSize={'sm'}
                >
                    you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                </Text>
                <UnorderedList
                    spacing={3}
                    pl={4}
                    color={'#797979'}
                    fontSize={'sm'}
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                </UnorderedList>

                <Text
                    fontSize={'3xl'}
                    fontWeight={600}
                    fontFamily={'Nunito'}
                >
                    If the feeling is mutual, we offer:
                </Text>
                <Text
                    color={'#797979'}
                    fontSize={'sm'}
                >
                    you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                </Text>
                <UnorderedList
                    spacing={3}
                    pl={4}
                    color={'#797979'}
                    fontSize={'sm'}
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                    <ListItem>You are going to use a passage of Lorem Ipsum, you need to be</ListItem>
                </UnorderedList>

                <Text
                    fontSize={'3xl'}
                    fontWeight={600}
                    fontFamily={'Nunito'}
                >
                    Contact Us!
                </Text>
                <Text
                    color={'#797979'}
                    fontSize={'sm'}
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    Reach out to discuss the opportunity & send your answers to:<br/><br/>
                    <b color='black'>John Peeter</b><br/>
                    saasup@mail.co<br/>
                    +256 445 023423<br/>
                </Text>
                
                <Button
                    w={"15%"}
                    h={"40px"}
                    bg={"#242331"}
                    rounded={'full'}
                    color={'white'}
                >
                    Apply Now
                </Button>

            </Stack>
        </Box>
    
    </>
  )
}
