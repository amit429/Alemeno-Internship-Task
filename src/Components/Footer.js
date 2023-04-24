import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import WebFont from "webfontloader";
import { useEffect } from "react";

const ListHeader = ({ children }) => {
  return (
    <Text fontFamily={"Nunito"} fontWeight={"800"} fontSize={"xl"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
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
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        mt={10}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>XeroCodee</ListHeader>
              <Text href={"#"}>
                You get just what you need to run your cloud workloads--no more,
                no less. Deploy from our single pane of glass, manage them with
                ease and scale up as fast as your workload grows . . .
              </Text>
              <Link href="#">
                📧 hello@xerocodee.com
                <br />
                xerocodee@gmail.com
              </Link>
              <Link href="#">📱+91 9667475014</Link>
            </Stack>

            <Stack align={"center"}>
              <ListHeader>Pages</ListHeader>
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Integrations</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Contact Us</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Utility Pages</ListHeader>
              <Link href={"#"}>Password</Link>
              <Link href={"#"}>Protected</Link>
              <Link href={"#"}>404 Not Found</Link>
              <Link href={"#"}>Style Guide</Link>
              <Link href={"#"}>Licenses</Link>
              <Link href={"#"}>Changelog</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Infrastructure Automation & Compliance</ListHeader>
              <Text>
                With a few clicks, you can integrate your preferred DevOps tools
                to enable Single Pane of Glass DevOps
              </Text>
              <Stack style={{
                marginTop: '40px'
              }} direction="row" spacing={4} align="center">
                <Button 
                    p={{base: '10px', md: '20px'}}
                    w={{base: 'xs' , md: '150px'}}
                    h={{base: 'xs' , md: '50px'}}
                    bg={"#242331"}
                    rounded={"full"}
                    color={"white"}
                >
                  App Store
                </Button>
                <Button
                     p={{base: '10px', md: '20px'}}
                     w={{base: 'xs' , md: '150px'}}
                     h={{base: 'xs' , md: '50px'}}
                     bg={"#242331"}
                     rounded={"full"}
                     color={"white"} 
                >
                  Play Store
                </Button>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>Copyright © XeroCodee | Designed by Arya Soni</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
