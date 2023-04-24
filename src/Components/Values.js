import React from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import {BsFillPersonPlusFill , BsFillRocketFill , BsFillAirplaneEnginesFill , BsFillStopwatchFill }from 'react-icons/bs';
import {IoIosWallet} from 'react-icons/io';
import {RiTaskFill} from 'react-icons/ri';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

const Feature = ({ title, text, icon , bg }) => {
    return (
      <Stack  boxShadow={'1px 15px 23px rgba(229, 229, 229, 0.25)'} rounded={'40px'} p={5}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'xl'}
          bg={bg}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };

export default function Values() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Nunito:300,400,700,800']
          }
        });
       }, []);

    const features = [
        {
            title: 'Patients come first',
            text: 'Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.',
            bg: '#EFADFF',
            icon: <Icon color={'#C555E1'} as={BsFillPersonPlusFill} w={8} h={8} />,
        },
        {
            title: 'Competitive salary',
            text: 'Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.',
            bg: '#FFDBB0',
            icon: <Icon as={IoIosWallet} color={'#F0A041'} w={8} h={8} />,
        },
        {
            title: 'Career growth',
            text: 'Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.',
            bg: '#FFCACA',
            icon: <Icon as={BsFillRocketFill} color={'#F16A6A'} w={8} h={8} />,
        },
        {
            title: 'Holidays & Parental',
            text: 'Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.',
            bg: '#CAC2FF',
            icon: <Icon as={BsFillAirplaneEnginesFill} color={'#5236FF'} w={8} h={8} />,
        },
        {
            title: 'Flexible hours',
            text: 'Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.',
            bg: '#FFDBE6',
            icon: <Icon as={BsFillStopwatchFill} color={'#FF6493'} w={8} h={8} />,
        },
        {
            title: 'Medical insurance',
            text: 'Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.',
            bg: '#B7EEFF',
            icon: <Icon as={RiTaskFill} color={'#33BFEB'} w={8} h={8} />,
        }
    ]
  return (
    <>
    <Box maxW={'5xl'} m={'auto'} p={8}>
        <Heading mb={5} textAlign={'center'} fontFamily={'Nunito'}>
            Values that define us
        </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
        {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
        ))}
      </SimpleGrid>
    </Box>
    
    </>
  )
}
