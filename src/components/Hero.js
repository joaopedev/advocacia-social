import { Box, Heading, Container, Text, Stack, Image } from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import image from "../images/359676691_186149471099294_1207164377508414123_n.jpg"


export default function Header({ color }) {
  const profile = ProfileArray();
  // const scrollToContact = () => {
  //   const contactSection = document.querySelector("#contact");
  //   contactSection.scrollIntoView({ behavior: "smooth" });
  // };
  // const linkedin = () => {
  //   window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  // };
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 40, md: 56 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>
          <Image ml="2%" src={image} />
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            
            {profile.headerDesc}
          </Text>
        </Stack>
      </Container>
    </>
  );
}
