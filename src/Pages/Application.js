import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import { Heading } from '@chakra-ui/react'
import WebFont from "webfontloader";
import { useEffect } from "react";
import Form from '../Components/Form';

export default function Application() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ["Nunito:300,400,700,800"],
          },
        });
      }, []);
  return (
    <>
        <Navbar/>
        <Heading
            textAlign={'center'}
            fontSize={{ base: '3xl', md: '65px' }}
            fontWeight={'bold'}
            fontFamily={'Nunito'}
            mt={'50px'}
        >
            Job Post Application
        </Heading>
        <Form/>
    
    </>
  )
}   
