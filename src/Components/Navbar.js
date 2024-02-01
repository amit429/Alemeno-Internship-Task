import React from 'react'
import { chakra, Box, Flex, useColorModeValue, HStack, Button, VisuallyHidden, IconButton, VStack, CloseButton, useDisclosure , Avatar } from '@chakra-ui/react';
import { AiOutlineMenu , AiOutlineUser } from 'react-icons/ai';
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
        label: "Dashboard",
        link: '/dashboard'
      },
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
              Alemeno
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
             <Avatar bg='red.500' icon={<AiOutlineUser fontSize='1.5rem' />} />
            </HStack>
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
                <Avatar
                  size={"md"}
                  src={"https://avatars.githubusercontent.com/u/81866624?v=4"}
                  alt={"Author"}
                />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    
    </>
  )
}
