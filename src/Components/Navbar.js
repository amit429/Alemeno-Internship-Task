import React from 'react'
import { chakra, Box, Flex, useColorModeValue, HStack, Button, VisuallyHidden, IconButton, VStack, CloseButton, useDisclosure } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

    const navitems = [
      {
        label: "Home",
        link: '/'
      },
      {
        label: "About",
        link: '/about'
      },
      {
        label: 'Features',
        link: '/features'
      },
      {
        label: 'Pages',
        link: '/pages'
      },
      {
        label: 'Blog',
        link: '/blog'
      },
      {
        label: 'Contact',
        link: '/contact'
      }
    ]
  return (
    <>
        <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              XeroCodee
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
             <Box
              p={3}
              style={{
                marginRight: '2rem',
                borderRadius: '39px',
                backgroundColor: '#F9F9F9',
              }}
             >
               {navitems.map((item, index) => (
                  <Button  
                    key={index} 
                    variant='ghost' 
                    size='sm'
                    as={Link}
                    p={5}
                    to={item.link}
                    >
                      {item.label}
                    </Button>
               ))}
             </Box>
              <Button style={{
                    backgroundColor: "#0C5BC6",
                    color: "white",
                    width: "136px",
                    height: "55px",
                    borderRadius: "38px",
              }}>Sign in</Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                {navitems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    w="full"
                    as={Link}
                    to={item.link}
                    onClick={mobileNav.onClose}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button style={{
                    backgroundColor: "#0C5BC6",
                    color: "white",
                    width: "136px",
                    height: "55px",
                    borderRadius: "38px",
              }}     w="full" colorScheme='blue'>
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    
    </>
  )
}
