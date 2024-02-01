import React from 'react'
import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
//add the font nunito
import WebFont from 'webfontloader';
import { useEffect } from 'react';



export default function Header(props) {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito:300,400,700,800']
      }
    });
   }, []);

  return (
    <>
         <Container maxW={{base: 'lg' , md: '5xl'}}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}>
          <Heading
            fontWeight={800}
            fontSize={{ base: '45px', sm: '4xl', md: '65px' }}
            fontFamily={'Nunito'}
            >
                {props.title}
          </Heading>
          {/* <Text
            
            fontFamily={'Nunito'}
            fontSize={{ base: 'md', md: '25px' }}
            fontWeight={400}
            color={'gray.500'}>
            {props.description}
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
          >
            <Button
              fontFamily={'Nunito'}
              width={{ base: '321px', md: '441px' }}
              height={'75px'}
              bg={'#0C5BC6'}
              color={'white'}
              rounded={'full'}
              fontSize={'18px'}
              fontWeight={800}
              px={6}
              _hover={{
                bg: '#0C5BC1',
              }}
            >
               {props.button}
            </Button>
          </Stack> */}
        </Stack>
      </Container>
    
    </>
  )
}
